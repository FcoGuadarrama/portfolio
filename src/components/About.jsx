import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const stats = [
    { label: 'Años de Exp.', value: '5+' },
    { label: 'Empresas', value: '3+' },
    { label: 'Proyectos', value: '10+' },
    { label: 'Tecnologías', value: '15+' },
];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Conóceme</span>
                    <h2 className="section-title">Sobre Mí</h2>
                    <p className="section-subtitle">
                        Un desarrollador apasionado por crear soluciones robustas y elegantes.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '24px', fontWeight: '700' }}>
                            Impulsando la innovación a través del <span style={{ color: 'var(--accent-primary)' }}>código</span>.
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '1.1rem' }}>
                            Soy Francisco Guadarrama, Ingeniero en Sistemas Computacionales con una trayectoria de más de 5 años en el desarrollo web full-stack. Mi enfoque se centra en la creación, mantenimiento y optimización de aplicaciones empresariales de gran escala.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
                            Especializado en modernizar sistemas legacy y construir nuevas soluciones robustas, domino tanto el backend (Laravel, Node.js) como el frontend moderno (React, Angular). Me apasiona el código limpio, la escalabilidad y ayudar a los equipos a alcanzar objetivos tecnológicos ambiciosos.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                            {stats.map((stat, idx) => (
                                <div key={idx} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                                    <h4 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '4px' }}>{stat.value}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-image-container"
                    >
                        <div style={{ position: 'relative' }}>
                            <div className="glass-card" style={{
                                position: 'relative',
                                zIndex: 2,
                                aspectRatio: '4/5',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '32px',
                                padding: '48px',
                                border: '1px solid var(--accent-primary)'
                            }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ padding: '15px', background: 'rgba(0,212,255,0.1)', borderRadius: '12px', color: 'var(--accent-primary)', fontSize: '1.5rem' }}><FaServer /></div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Backend Expert</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Laravel, PHP, SQL</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ padding: '15px', background: 'rgba(123,97,255,0.1)', borderRadius: '12px', color: 'var(--accent-secondary)', fontSize: '1.5rem' }}><FaCode /></div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Frontend Specialist</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>React, Vue, Tailwind</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ padding: '15px', background: 'rgba(0,255,170,0.1)', borderRadius: '12px', color: 'var(--accent-tertiary)', fontSize: '1.5rem' }}><FaDatabase /></div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Database & Cloud</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>MySQL, AWS, Docker</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
                                zIndex: 1
                            }}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-image-container { order: -1; }
        }
      `}</style>
        </section>
    );
}
