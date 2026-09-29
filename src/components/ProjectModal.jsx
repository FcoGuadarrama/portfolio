import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import { easeOut, easeDrawer } from '../motion';

const SHEET_QUERY = '(max-width: 734px)';

// Desktop: a centered dialog that grows from 96% (modals stay centered, no trigger origin).
// Mobile: a bottom sheet on the iOS drawer curve. Exits are always faster than entrances.
const dialogVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
    exit: { opacity: 0, scale: 0.98, y: 4, transition: { duration: 0.16, ease: easeOut } },
};

const sheetVariants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 0.42, ease: easeDrawer } },
    exit: { y: '100%', transition: { duration: 0.28, ease: easeDrawer } },
};

const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
};

export default function ProjectModal({ project, onClose, returnFocusRef }) {
    const { t } = useTranslation();
    const reduceMotion = useReducedMotion();
    const panelRef = useRef(null);
    const closeRef = useRef(null);
    const [isSheet] = useState(() => window.matchMedia(SHEET_QUERY).matches);
    const base = `projects.${project.key}`;

    useEffect(() => {
        const returnTarget = returnFocusRef.current;
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus({ preventScroll: true });

        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key !== 'Tab' || !panelRef.current) return;
            const focusables = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = overflow;
            // Return focus to the card that opened the dialog (Safari doesn't focus buttons on click).
            returnTarget?.focus({ preventScroll: true });
        };
    }, [onClose, returnFocusRef]);

    const panelVariants = reduceMotion ? fadeVariants : isSheet ? sheetVariants : dialogVariants;

    return createPortal(
        <div className={`modal-root ${isSheet ? 'is-sheet' : ''}`}>
            <motion.div
                className="modal-scrim"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.24, ease: easeOut } }}
                exit={{ opacity: 0, transition: { duration: 0.18, ease: easeOut } }}
            />
            <motion.div
                ref={panelRef}
                className="modal-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {isSheet && <span className="modal-grabber" aria-hidden="true" />}
                <header className="modal-header">
                    <div>
                        <p className="modal-org">{t(`${base}.organizationName`)}</p>
                        <h2 id="project-modal-title">{t(`${base}.title`)}</h2>
                        <p className="modal-period">{t(`${base}.period`)}</p>
                    </div>
                    <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label={t('projects.close')}>
                        <HiX aria-hidden="true" />
                    </button>
                </header>

                <div className="modal-body">
                    <p>{t(`${base}.description`)}</p>

                    <h3>{t('projects.contribution')}</h3>
                    <ul>
                        {t(`${base}.highlights`, { returnObjects: true }).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h3>{t('projects.stack')}</h3>
                    <div className="chips">
                        {project.tech.map((tch) => <span key={tch} className="chip">{tch}</span>)}
                    </div>

                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary modal-link">
                            {t('projects.visit')} <FaArrowRight size="0.8em" aria-hidden="true" />
                        </a>
                    )}
                </div>
            </motion.div>
        </div>,
        document.body
    );
}
