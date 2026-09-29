import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>&copy; {currentYear} Francisco Guadarrama Coronado. {t('footer.copyright')}</p>
                <p>{t('footer.madeWith')}</p>
            </div>
        </footer>
    );
}
