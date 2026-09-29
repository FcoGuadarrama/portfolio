import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const facts = ['experience', 'focus', 'education', 'location'];

export default function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="section">
            <div className="container about-grid">
                <Reveal>
                    <h2 className="section-title">{t('about.title')}</h2>
                </Reveal>

                <div>
                    <Reveal className="about-text">
                        <p>{t('about.description1')}</p>
                        <p>{t('about.description2')}</p>
                    </Reveal>

                    <Reveal delay={0.06}>
                        <dl className="facts">
                            {facts.map((key) => (
                                <div key={key} className="fact">
                                    <dt>{t(`about.facts.${key}.label`)}</dt>
                                    <dd>{t(`about.facts.${key}.value`)}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
