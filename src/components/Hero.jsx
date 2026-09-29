import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { reveal } from '../motion';
import IntegrationMap from './IntegrationMap';

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: reveal },
};

export default function Hero() {
    const { t } = useTranslation();
    return (
        <section id="home" className="hero">
            <div className="container hero-inner">
                <motion.div className="hero-copy" variants={container} initial="hidden" animate="visible">
                    <motion.h1 variants={item} className="hero-title">
                        <span>Francisco</span>
                        <span>Guadarrama</span>
                    </motion.h1>
                    <motion.p variants={item} className="hero-role">{t('hero.role')}</motion.p>
                    <motion.p variants={item} className="hero-tagline">{t('hero.tagline')}</motion.p>
                    <motion.div variants={item} className="hero-actions">
                        <a href="#contact" className="btn btn-primary">{t('hero.ctaContact')}</a>
                        <a href="#experience" className="link-chevron">
                            {t('hero.ctaWork')} <FaChevronRight size="0.7em" aria-hidden="true" />
                        </a>
                    </motion.div>
                </motion.div>
                <IntegrationMap />
            </div>
        </section>
    );
}
