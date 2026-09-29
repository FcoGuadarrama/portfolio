import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../motion';

// Scroll entrance: a short rise plus fade, played once when the block enters the viewport.
export default function Reveal({ children, delay = 0, y = 16, ...rest }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ ...reveal, delay }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
