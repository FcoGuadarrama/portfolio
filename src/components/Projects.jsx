import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { FaChartLine, FaLeaf, FaChevronRight } from 'react-icons/fa';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import { STAGGER } from '../motion';

const projects = [
    {
        key: 'project1',
        tech: ['Laravel', 'React', 'MySQL', 'REST APIs'],
        icon: <FaChartLine />
    },
    {
        key: 'project2',
        tech: ['Laravel', 'Vue.js', 'MongoDB', 'Docker'],
        link: 'https://siatsubnacional.semarnat.gob.mx/',
        icon: <FaLeaf />
    }
];

export default function Projects() {
    const { t } = useTranslation();
    const [openKey, setOpenKey] = useState(null);
    const triggerRef = useRef(null);
    const close = useCallback(() => setOpenKey(null), []);
    const openProject = projects.find((p) => p.key === openKey);

    return (
        <section id="projects" className="section section-alt">
            <div className="container">
                <Reveal className="section-header">
                    <h2 className="section-title">{t('projects.title')}</h2>
                    <p className="section-subtitle">{t('projects.subtitle')}</p>
                </Reveal>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <Reveal key={project.key} delay={STAGGER * idx}>
                            <article className="card project-card">
                                <div className="project-top">
                                    <span className="icon-tile" aria-hidden="true">{project.icon}</span>
                                    <div className="project-meta">
                                        <span>{t(`projects.${project.key}.organization`)}</span>
                                        <span>{t(`projects.${project.key}.period`)}</span>
                                    </div>
                                </div>
                                <h3>
                                    {/* The button's ::after stretches over the whole card, so the card is one click target */}
                                    <button type="button" className="project-open" onClick={(e) => {
                                        triggerRef.current = e.currentTarget;
                                        setOpenKey(project.key);
                                    }}>
                                        {t(`projects.${project.key}.title`)}
                                    </button>
                                </h3>
                                <p>{t(`projects.${project.key}.summary`)}</p>
                                <span className="project-more" aria-hidden="true">
                                    {t('projects.details')} <FaChevronRight size="0.7em" />
                                </span>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {openProject && <ProjectModal key={openProject.key} project={openProject} onClose={close} returnFocusRef={triggerRef} />}
            </AnimatePresence>
        </section>
    );
}
