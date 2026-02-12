import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${scrolled ? 'bg-bg-glass backdrop-blur-md py-4 border-b border-border-color shadow-md' : 'bg-transparent py-6'}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}>
            <div className="container flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#home" className="logo" style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-primary)',
                    letterSpacing: '-1px'
                }}>
                    FG<span style={{ color: 'var(--text-primary)' }}>.dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link" style={{
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            color: 'var(--text-secondary)',
                            transition: 'color 0.3s ease'
                        }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                            {link.name}
                        </a>
                    ))}
                    <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border-color)', margin: '0 8px' }}></div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://github.com/fcoguadarrama" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/fcoguadarrama" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '2rem',
                    cursor: 'pointer'
                }}>
                    {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '80%',
                            height: '100vh',
                            backgroundColor: 'var(--bg-secondary)',
                            zIndex: 101,
                            padding: '80px 40px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        <button onClick={() => setMobileMenuOpen(false)} style={{
                            position: 'absolute',
                            top: 24,
                            right: 24,
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '2rem'
                        }}>
                            <HiX />
                        </button>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div style={{ marginTop: 'auto', display: 'flex', gap: '24px' }}>
                            <FaGithub style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => window.open('https://github.com/fcoguadarrama', '_blank')} />
                            <FaLinkedin style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => window.open('https://linkedin.com/in/fcoguadarrama', '_blank')} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
