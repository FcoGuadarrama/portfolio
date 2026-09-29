import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { easeOut } from '../motion';

const navLinks = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
];

const thumbSpring = { type: 'spring', bounce: 0, duration: 0.3 };
const menuIn = { duration: 0.24, ease: easeOut };
const menuOut = { duration: 0.16, ease: easeOut };

function LangSwitch({ id }) {
    const { i18n } = useTranslation();
    const current = i18n.resolvedLanguage || 'en';

    return (
        <div className="segmented" role="group" aria-label="Language / Idioma">
            {['es', 'en'].map((lang) => (
                <button
                    key={lang}
                    type="button"
                    aria-pressed={current === lang}
                    className={current === lang ? 'is-active' : ''}
                    onClick={() => i18n.changeLanguage(lang)}
                >
                    {current === lang && (
                        <motion.span layoutId={`lang-thumb-${id}`} className="segmented-thumb" transition={thumbSpring} />
                    )}
                    <span className="segmented-label">{lang.toUpperCase()}</span>
                </button>
            ))}
        </div>
    );
}

export default function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Wayfinding: highlight the section currently in the middle of the viewport.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );
        ['home', ...navLinks.map((link) => link.key)].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    return (
        <nav className={`nav ${scrolled || menuOpen ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
            <div className="container nav-inner">
                <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
                    Francisco Guadarrama
                </a>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className={activeSection === link.key ? 'is-active' : ''}
                            aria-current={activeSection === link.key ? 'location' : undefined}
                        >
                            {t(`navbar.${link.key}`)}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <a href="https://github.com/fcoguadarrama" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-icon">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/fcoguadarrama" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-icon">
                        <FaLinkedin />
                    </a>
                    <LangSwitch id="desktop" />
                </div>

                <button
                    type="button"
                    className="nav-burger"
                    aria-label={menuOpen ? t('navbar.close') : t('navbar.menu')}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="nav-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0, transition: menuIn }}
                        exit={{ opacity: 0, y: -8, transition: menuOut }}
                    >
                        <div className="container">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ...menuIn, delay: 0.03 * idx }}
                                >
                                    {t(`navbar.${link.key}`)}
                                </motion.a>
                            ))}
                            <div className="nav-menu-footer">
                                <LangSwitch id="mobile" />
                                <div className="nav-menu-social">
                                    <a href="https://github.com/fcoguadarrama" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-icon"><FaGithub /></a>
                                    <a href="https://linkedin.com/in/fcoguadarrama" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-icon"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
