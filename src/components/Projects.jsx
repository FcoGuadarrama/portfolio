import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChartLine, FaLeaf } from 'react-icons/fa';

const projects = [
    {
        titleKey: 'project1.title',
        organizationKey: 'project1.organization',
        periodKey: 'project1.period',
        descriptionKey: 'project1.description',
        tech: ['Laravel', 'Angular', 'MySQL', 'REST APIs', 'Git'],
        icon: <FaChartLine />,
        color: '#00d4ff'
    },
    {
        titleKey: 'project2.title',
        organizationKey: 'project2.organization',
        periodKey: 'project2.period',
        descriptionKey: 'project2.description',
        tech: ['Laravel', 'Vue.js', 'Vite', 'MongoDB', 'Inertia', 'Docker'],
        icon: <FaLeaf />,
        color: '#00ffaa'
    }
];

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t('projects.label', 'Portafolio')}</span>
                    <h2 className="section-title">{t('projects.title')}</h2>
                    <p className="section-subtitle">
                        {t('projects.subtitle', 'Soluciones de impacto gubernamental y empresarial desarrolladas con las mejores prácticas.')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }} className="projects-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="glass-card"
                            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            {/* Project Visual Header */}
                            <div style={{
                                height: '200px',
                                background: `linear-gradient(135deg, ${project.color}22 0%, var(--bg-tertiary) 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                borderBottom: '1px solid var(--border-color)'
                            }}>
                                <div style={{ fontSize: '5rem', color: project.color, opacity: 0.2 }}>
                                    {project.icon}
                                </div>
                                <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                                    <span className="tech-badge" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'var(--border-color)' }}>{t(`projects.${project.organizationKey}`)}</span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: '1.3' }}>{t(`projects.${project.titleKey}`)}</h3>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
                                    {t(`projects.${project.descriptionKey}`)}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                    {project.tech.map((tch, tIdx) => (
                                        <span key={tIdx} className="tech-badge" style={{ fontSize: '0.7rem' }}>{tch}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
            <style>{`
        @media (max-width: 500px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
