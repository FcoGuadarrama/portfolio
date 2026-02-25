import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{
            padding: '40px 0',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <a href="#home" style={{
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-primary)',
                        letterSpacing: '-1px'
                    }}>
                        FG<span style={{ color: 'var(--text-primary)' }}>.dev</span>
                    </a>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        &copy; {currentYear} Francisco Guadarrama Coronado. {t('footer.copyright')}
                    </p>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                        {t('footer.madeWith', 'Hecho con')} <FaHeart style={{ color: '#ff4d4d' }} /> {t('footer.using', 'usando React & Three.js')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
