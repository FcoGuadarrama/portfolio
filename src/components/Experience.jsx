import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        roleKey: 'role1',
        company: 'CAPI Software',
        periodKey: 'period1',
        locationKey: 'remote',
        descriptionKey: 'desc1',
        tech: ['Laravel', 'Angular', 'Node.js', 'TypeScript', 'Azure', 'CI/CD']
    },
    {
        roleKey: 'role2',
        company: 'One Way Consulting',
        periodKey: 'period2',
        locationKey: 'remote',
        descriptionKey: 'desc2',
        tech: ['Laravel', 'Angular', 'Yii2', 'Docker', 'AWS EC2', 'Vue.js', 'React']
    },
    {
        roleKey: 'role3',
        company: 'Narrative Studio',
        periodKey: 'period3',
        locationKey: 'remote',
        descriptionKey: 'desc3',
        tech: ['Laravel', 'React', 'Node.js', 'CodeIgniter', 'Docker', 'AWS Lambda']
    }
];

export default function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t('experience.label', 'Trayectoria')}</span>
                    <h2 className="section-title">{t('experience.title')}</h2>
                    <p className="section-subtitle">
                        {t('experience.subtitle', 'Más de 5 años construyendo soluciones robustas para diversas industrias.')}
                    </p>
                </div>

                <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Timeline Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary), transparent)',
                        opacity: 0.3
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                style={{ position: 'relative', paddingLeft: '60px' }}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '11px',
                                    top: '0',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--bg-primary)',
                                    border: '3px solid var(--accent-primary)',
                                    zIndex: 2,
                                    boxShadow: '0 0 10px var(--accent-primary)'
                                }}></div>

                                <div className="glass-card" style={{ padding: '32px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)' }}>{t(`experience.${exp.roleKey}`)}</h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: '600', marginTop: '4px' }}>
                                                <FaBriefcase fontSize="0.9rem" />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                <FaCalendarAlt />
                                                <span>{t(`experience.${exp.periodKey}`)}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                <FaMapMarkerAlt />
                                                <span>{t(`experience.${exp.locationKey}`)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                                        {t(`experience.${exp.descriptionKey}`)}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {exp.tech.map((tch, tIdx) => (
                                            <span key={tIdx} className="tech-badge">
                                                {tch}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
        @media (max-width: 600px) {
          #experience h3 { font-size: 1.2rem; }
          #experience .period { text-align: left; align-items: flex-start; }
        }
      `}</style>
        </section>
    );
}
