import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../motion';

const NODE_W = 140;
const NODE_H = 38;
const COL_X = [0, 210, 420];

// Simplified map of integrations built at Templet.io (see CV). Columns: source → tool → result.
const nodes = [
    { id: 'salesforce', label: 'Salesforce', col: 0, y: 36 },
    { id: 'zoom', label: 'Zoom API', col: 0, y: 104 },
    { id: 'meta', label: 'Meta', col: 0, y: 172 },
    { id: 'sheets', label: 'Google Sheets', col: 0, y: 240 },
    { id: 'powerbi', label: 'Power BI', col: 1, y: 36 },
    { id: 'laravel', label: 'Laravel', col: 1, y: 104 },
    { id: 'make', label: 'Make', col: 1, y: 172 },
    { id: 'python', labelKey: 'python', col: 1, y: 240 },
    { id: 'dashboard', labelKey: 'dashboard', col: 2, y: 70 },
    { id: 'webinars', labelKey: 'webinars', col: 2, y: 137 },
    { id: 'leads', labelKey: 'leads', col: 2, y: 224 },
];

const edges = [
    { from: 'salesforce', to: 'powerbi', flow: 'dashboard' },
    { from: 'powerbi', to: 'dashboard', flow: 'dashboard' },
    { from: 'laravel', to: 'dashboard', flow: 'dashboard' },
    { from: 'zoom', to: 'laravel', flow: 'webinars' },
    { from: 'laravel', to: 'webinars', flow: 'webinars' },
    { from: 'meta', to: 'make', flow: 'leads' },
    { from: 'sheets', to: 'make', flow: 'leads' },
    { from: 'make', to: 'leads', flow: 'leads' },
    { from: 'sheets', to: 'python', flow: 'leads' },
    { from: 'python', to: 'leads', flow: 'leads' },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
const flowsOf = (id) => new Set(edges.filter((e) => e.from === id || e.to === id).map((e) => e.flow));

function edgePath(edge) {
    const a = byId[edge.from];
    const b = byId[edge.to];
    const x1 = COL_X[a.col] + NODE_W;
    const y1 = a.y + NODE_H / 2;
    const x2 = COL_X[b.col];
    const y2 = b.y + NODE_H / 2;
    return `M ${x1} ${y1} C ${x1 + 36} ${y1}, ${x2 - 36} ${y2}, ${x2} ${y2}`;
}

export default function IntegrationMap() {
    const { t } = useTranslation();
    const reduceMotion = useReducedMotion();
    const [activeFlows, setActiveFlows] = useState(null);

    // One orchestrated load: columns appear left to right while the connectors draw between them.
    const nodeDelay = (col) => 0.35 + col * 0.22;

    const isActive = (flows) => !activeFlows || [...flows].some((f) => activeFlows.has(f));

    return (
        <figure className="imap">
            <svg viewBox="0 0 560 282" role="group" aria-label={t('hero.mapCaption')}>
                {['sources', 'tools', 'results'].map((key, col) => (
                    <text key={key} x={COL_X[col] + 2} y="14" className="imap-col">{t(`hero.map.${key}`)}</text>
                ))}

                {edges.map((edge) => (
                    <motion.path
                        key={`${edge.from}-${edge.to}`}
                        d={edgePath(edge)}
                        className={`imap-edge ${activeFlows && isActive([edge.flow]) ? 'is-active' : ''} ${isActive([edge.flow]) ? '' : 'is-dim'}`}
                        initial={reduceMotion ? false : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: easeOut, delay: nodeDelay(byId[edge.from].col) + 0.15 }}
                    />
                ))}

                {nodes.map((node) => {
                    const flows = flowsOf(node.id);
                    const active = isActive(flows);
                    return (
                        <motion.g
                            key={node.id}
                            className={`imap-node ${node.col === 2 ? 'is-result' : ''} ${activeFlows && active ? 'is-active' : ''} ${active ? '' : 'is-dim'}`}
                            tabIndex={0}
                            aria-label={node.label || t(`hero.map.${node.labelKey}`)}
                            onMouseEnter={() => setActiveFlows(flows)}
                            onMouseLeave={() => setActiveFlows(null)}
                            onFocus={() => setActiveFlows(flows)}
                            onBlur={() => setActiveFlows(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, ease: easeOut, delay: nodeDelay(node.col) }}
                        >
                            <rect x={COL_X[node.col]} y={node.y} width={NODE_W} height={NODE_H} rx="10" />
                            <text x={COL_X[node.col] + NODE_W / 2} y={node.y + NODE_H / 2} dominantBaseline="central" textAnchor="middle">
                                {node.label || t(`hero.map.${node.labelKey}`)}
                            </text>
                        </motion.g>
                    );
                })}
            </svg>
            <figcaption>{t('hero.mapCaption')}</figcaption>
        </figure>
    );
}
