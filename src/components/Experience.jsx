import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const experiences = [
    {
        key: 'templet',
        company: 'Templet.io',
        current: true,
        tech: ['Laravel', 'Python', 'Power BI', 'Salesforce', 'Zoom API', 'Power Automate', 'Make', 'GCP']
    },
    {
        key: 'capi',
        company: 'CAPI Software',
        current: true,
        locationKey: 'remote',
        tech: ['PHP', 'Laravel', 'Angular', 'TypeScript', 'Node.js', 'Azure', 'CI/CD']
    },
    {
        key: 'oneway',
        company: 'One Way Consulting',
        locationKey: 'remote',
        tech: ['Laravel', 'Yii2', 'Angular', 'Vue.js', 'React', 'SQL Server', 'Docker', 'AWS EC2/S3', 'GitHub Actions']
    },
    {
        key: 'narrative',
        company: 'Narrative Studio',
        locationKey: 'remote',
        tech: ['Laravel', 'CodeIgniter', 'React', 'Node.js', 'Docker', 'AWS EC2/S3/Lambda']
    }
];

export default function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experience" className="section">
            <div className="container">
                <Reveal className="section-header">
                    <h2 className="section-title">{t('experience.title')}</h2>
                </Reveal>

                <ol className="timeline">
                    {experiences.map((exp) => (
                        <li key={exp.key}>
                            <Reveal className="timeline-item">
                                <div className="timeline-meta">
                                    <span className="timeline-period">
                                        {exp.current && <span className="status-dot" aria-hidden="true" />}
                                        {t(`experience.jobs.${exp.key}.period`)}
                                    </span>
                                    {exp.locationKey && <span className="timeline-location">{t(`experience.${exp.locationKey}`)}</span>}
                                </div>
                                <div className="timeline-body">
                                    <span className="timeline-company">{exp.company}</span>
                                    <h3>{t(`experience.jobs.${exp.key}.role`)}</h3>
                                    <ul className="timeline-bullets">
                                        {t(`experience.jobs.${exp.key}.bullets`, { returnObjects: true }).map((bullet, bIdx) => (
                                            <li key={bIdx}>{bullet}</li>
                                        ))}
                                    </ul>
                                    <div className="chips">
                                        {exp.tech.map((tch) => <span key={tch} className="chip">{tch}</span>)}
                                    </div>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
