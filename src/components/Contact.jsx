import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Hablemos</span>
                    <h2 className="section-title">Contáctame</h2>
                    <p className="section-subtitle">
                        ¿Tienes un proyecto en mente o quieres modernizar tu infraestructura? Estoy listo para colaborar.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px' }} className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '32px' }}>Información de <span style={{ color: 'var(--accent-primary)' }}>Contacto</span></h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}><FaEnvelope /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</h4>
                                    <a href="mailto:ingfranciscoguadarrama@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>ingfranciscoguadarrama@gmail.com</a>
                                </div>
                            </div>

                            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)' }}><FaPhone /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Teléfono</h4>
                                    <a href="tel:+522292436936" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>+52 229 243 6936</a>
                                </div>
                            </div>

                            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--accent-tertiary)' }}><FaMapMarkerAlt /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Ubicación</h4>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>CDMX, México</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '48px', display: 'flex', gap: '24px' }}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}><FaLinkedin /></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}><FaGithub /></a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card" style={{ padding: '48px' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Nombre</label>
                                        <input type="text" placeholder="Tu nombre" style={{
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            color: 'var(--text-primary)',
                                            outline: 'none'
                                        }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email</label>
                                        <input type="email" placeholder="tu@email.com" style={{
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '8px',
                                            padding: '12px 16px',
                                            color: 'var(--text-primary)',
                                            outline: 'none'
                                        }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Mensaje</label>
                                    <textarea rows="5" placeholder="Cuéntame sobre tu proyecto..." style={{
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '8px',
                                        padding: '12px 16px',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        resize: 'none'
                                    }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
                                    <FaPaperPlane /> Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
