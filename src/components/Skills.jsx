import React from 'react';
import { motion } from 'framer-motion';
import { FaLaravel, FaNodeJs, FaReact, FaAngular, FaVuejs, FaDocker, FaAws, FaGitAlt, FaBrain } from 'react-icons/fa';
import { SiPhp, SiJavascript, SiTypescript, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiTailwindcss, SiOpenai, SiAnthropic, SiGoogle } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Backend Development',
        skills: [
            { name: 'PHP / Laravel', icon: <FaLaravel />, color: '#ff2d20' },
            { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
            { name: 'CodeIgniter / Yii2', icon: <SiPhp />, color: '#777bb4' },
            { name: 'C# / .NET', icon: <span style={{ fontWeight: '800' }}>C#</span>, color: '#239120' },
        ]
    },
    {
        title: 'Frontend Frameworks',
        skills: [
            { name: 'React', icon: <FaReact />, color: '#61dafb' },
            { name: 'Angular', icon: <FaAngular />, color: '#dd0031' },
            { name: 'Vue.js', icon: <FaVuejs />, color: '#4fc08d' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
        ]
    },
    {
        title: 'Databases & Performance',
        skills: [
            { name: 'MySQL / PostgreSQL', icon: <SiMysql />, color: '#4479a1' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
            { name: 'SQL Server', icon: <SiPostgresql />, color: '#336791' },
            { name: 'Redis', icon: <SiRedis />, color: '#dc382d' },
        ]
    },
    {
        title: 'DevOps & Tools',
        skills: [
            { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
            { name: 'AWS / Azure', icon: <FaAws />, color: '#ff9900' },
            { name: 'CI/CD / Actions', icon: <FaGitAlt />, color: '#f05032' },
            { name: 'Vite / Webpack', icon: <SiJavascript />, color: '#f7df1e' },
        ]
    },
    {
        title: 'IA & Desarrollo Moderno',
        skills: [
            { name: 'OpenAI (GPT-4o)', icon: <SiOpenai />, color: '#412991' },
            { name: 'Anthropic (Claude)', icon: <SiAnthropic />, color: '#D97757' },
            { name: 'Google (Gemini)', icon: <SiGoogle />, color: '#4285F4' },
            { name: 'AI Agents / RAG', icon: <FaBrain />, color: '#FF69B4' },
        ]
    }
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Mi Arsenal</span>
                    <h2 className="section-title">Habilidades Técnicas</h2>
                    <p className="section-subtitle">
                        Un conjunto de herramientas moderno y diversificado para construir el futuro de la web.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div key={idx} variants={cardVariants} className="glass-card" style={{ height: '100%' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            color: skill.color,
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            borderRadius: '8px'
                                        }}>
                                            {skill.icon}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{skill.name}</span>
                                            </div>
                                            <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '100%' }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.5 + (sIdx * 0.1) }}
                                                    style={{ height: '100%', background: `linear-gradient(90deg, ${skill.color}, var(--accent-primary))` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
