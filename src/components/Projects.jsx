import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChartLine, FaLeaf } from 'react-icons/fa';

const projects = [
    {
        title: 'Plataforma Nacional de Financiamiento Climático',
        organization: 'SHCP',
        period: 'Nov 2020 – Jun 2021',
        description: 'Co-desarrollo de una herramienta web pionera para identificar la oferta y demanda de financiamiento climático en México, apoyando el cumplimiento de las metas del Acuerdo de París.',
        tech: ['Laravel', 'Angular', 'MySQL', 'REST APIs', 'Git'],
        icon: <FaChartLine />,
        color: '#00d4ff'
    },
    {
        title: 'Herramienta de Identificación de Acciones Climáticas',
        organization: 'SEMARNAT',
        period: 'Ene 2020 – Oct 2020',
        description: 'Sistema para la cuantificación e integración del anexo transversal de cambio climático. Enfrentó retos técnicos como manejo de grandes volúmenes de datos y fórmulas matemáticas complejas.',
        tech: ['Laravel', 'Vue.js', 'Vite', 'MongoDB', 'Inertia', 'Docker'],
        icon: <FaLeaf />,
        color: '#00ffaa'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Portafolio</span>
                    <h2 className="section-title">Proyectos Destacados</h2>
                    <p className="section-subtitle">
                        Soluciones de impacto gubernamental y empresarial desarrolladas con las mejores prácticas.
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
                                    <span className="tech-badge" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'var(--border-color)' }}>{project.organization}</span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: '1.3' }}>{project.title}</h3>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="tech-badge" style={{ fontSize: '0.7rem' }}>{t}</span>
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
