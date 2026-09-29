import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';
import Reveal from './Reveal';

const rows = [
    { labelKey: 'email', value: 'ingfranciscoguadarrama@gmail.com', href: 'mailto:ingfranciscoguadarrama@gmail.com', icon: <FaEnvelope /> },
    { labelKey: 'phone', value: '+52 229 243 6936', href: 'tel:+522292436936', icon: <FaPhone /> },
    { labelKey: 'linkedin', value: 'in/fcoguadarrama', href: 'https://linkedin.com/in/fcoguadarrama', icon: <FaLinkedin />, external: true },
    { labelKey: 'github', value: 'fcoguadarrama', href: 'https://github.com/fcoguadarrama', icon: <FaGithub />, external: true },
    { labelKey: 'location', valueKey: 'contact.locationValue', icon: <FaMapMarkerAlt /> },
];

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="section">
            <div className="container contact-inner">
                <Reveal className="section-header contact-header">
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="section-subtitle">{t('contact.subtitle')}</p>
                    <a href="mailto:ingfranciscoguadarrama@gmail.com" className="btn btn-primary contact-cta">
                        <FaEnvelope /> {t('contact.send')}
                    </a>
                </Reveal>

                <Reveal delay={0.1}>
                    <ul className="grouped-list">
                        {rows.map((row) => {
                            const content = (
                                <>
                                    <span className="icon-tile" aria-hidden="true">{row.icon}</span>
                                    <span className="grouped-text">
                                        <span className="grouped-label">{t(`contact.${row.labelKey}`)}</span>
                                        <span className="grouped-value">{row.valueKey ? t(row.valueKey) : row.value}</span>
                                    </span>
                                    {row.href && <FaChevronRight className="grouped-chevron" aria-hidden="true" />}
                                </>
                            );
                            return (
                                <li key={row.labelKey}>
                                    {row.href ? (
                                        <a
                                            href={row.href}
                                            className="grouped-row"
                                            {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <div className="grouped-row">{content}</div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
