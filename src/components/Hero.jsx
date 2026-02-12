import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCode, FaRocket, FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        },
    };

    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--nav-height)' }}>
            <div className="container" style={{ position: 'relative' }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ maxWidth: '800px' }}
                >
                    <motion.span variants={itemVariants} className="section-label">Hola, mi nombre es</motion.span>

                    <motion.h1 variants={itemVariants} style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        letterSpacing: '-2px'
                    }}>
                        Francisco <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Guadarrama</span>.
                    </motion.h1>

                    <motion.h2 variants={itemVariants} style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        color: 'var(--text-secondary)',
                        marginBottom: '32px',
                        lineHeight: '1.2'
                    }}>
                        Ingeniero Full-Stack especializado en <span style={{ color: 'var(--accent-primary)' }}>Laravel</span> y Ecosistemas Modernos.
                    </motion.h2>

                    <motion.p variants={itemVariants} style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        marginBottom: '48px',
                        maxWidth: '600px'
                    }}>
                        +5 años transformando ideas en aplicaciones empresariales escalables y de alto rendimiento. Experto en PHP, Node.js y frameworks de frontend.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            <FaRocket /> Ver Proyectos
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contactar
                        </a>
                    </motion.div>
                </motion.div>

                {/* Decorative Floating Icons */}
                <div style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.15, fontSize: '4rem', display: 'flex', flexDirection: 'column', gap: '40px' }} className="floating-decor">
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}><FaLaravel /></motion.div>
                    <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}><SiJavascript /></motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}><SiReact /></motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '-120px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'var(--text-muted)'
                    }}
                >
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}
                    >
                        <FaChevronDown />
                    </motion.div>
                </motion.div>
            </div>
            <style>{`
        @media (max-width: 1024px) {
          .floating-decor { display: none !important; }
        }
      `}</style>
        </section>
    );
}
