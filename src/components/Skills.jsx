import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import { STAGGER } from '../motion';
import { FaLaravel, FaNodeJs, FaReact, FaAngular, FaVuejs, FaDocker, FaAws, FaBrain, FaMicrosoft, FaChartBar, FaCogs, FaFileAlt, FaDatabase, FaExchangeAlt } from 'react-icons/fa';
import { SiPython, SiTypescript, SiPostgresql, SiMongodb, SiRedis, SiTailwindcss, SiClaude, SiGooglecloud, SiGithubactions, SiVite, SiMake } from 'react-icons/si';

const skillCategories = [
    {
        titleKey: 'backend',
        skills: [
            { nameKey: 'php', icon: <FaLaravel /> },
            { nameKey: 'node', icon: <FaNodeJs /> },
            { nameKey: 'python', icon: <SiPython /> },
            { nameKey: 'rest', icon: <FaExchangeAlt /> },
        ]
    },
    {
        titleKey: 'frontend',
        skills: [
            { nameKey: 'typescript', icon: <SiTypescript /> },
            { nameKey: 'angular', icon: <FaAngular /> },
            { nameKey: 'react', icon: <FaReact /> },
            { nameKey: 'vue', icon: <FaVuejs /> },
            { nameKey: 'tailwind', icon: <SiTailwindcss /> },
        ]
    },
    {
        titleKey: 'databases',
        skills: [
            { nameKey: 'mysql_pg', icon: <SiPostgresql /> },
            { nameKey: 'sqlserver', icon: <FaDatabase /> },
            { nameKey: 'mongodb', icon: <SiMongodb /> },
            { nameKey: 'redis', icon: <SiRedis /> },
        ]
    },
    {
        titleKey: 'devops',
        skills: [
            { nameKey: 'aws_azure', icon: <FaAws /> },
            { nameKey: 'gcp', icon: <SiGooglecloud /> },
            { nameKey: 'docker', icon: <FaDocker /> },
            { nameKey: 'cicd', icon: <SiGithubactions /> },
            { nameKey: 'vite_webpack', icon: <SiVite /> },
        ]
    },
    {
        titleKey: 'automation',
        skills: [
            { nameKey: 'powerbi', icon: <FaChartBar /> },
            { nameKey: 'make', icon: <SiMake /> },
            { nameKey: 'power_automate', icon: <FaCogs /> },
            { nameKey: 'entra', icon: <FaMicrosoft /> },
        ]
    },
    {
        titleKey: 'ai',
        skills: [
            { nameKey: 'claude_code', icon: <SiClaude /> },
            { nameKey: 'agents', icon: <FaBrain /> },
            { nameKey: 'sdd', icon: <FaFileAlt /> },
            { nameKey: 'ml', icon: <SiPython /> },
        ]
    }
];

export default function Skills() {
    const { t } = useTranslation();
    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <Reveal className="section-header">
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <p className="section-subtitle">{t('skills.subtitle')}</p>
                </Reveal>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <Reveal key={category.titleKey} delay={STAGGER * (idx % 3)} className="skill-group">
                            <h3>{t(`skills.${category.titleKey}`)}</h3>
                            <ul>
                                {category.skills.map((skill) => (
                                    <li key={skill.nameKey}>
                                        <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                                        {t(`skills.${skill.nameKey}`)}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
