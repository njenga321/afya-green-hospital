import React from 'react';
import { motion } from 'framer-motion';

export function FadeIn({ children, delay = 0, duration = 0.6, className = '', direction = 'up', amount = 0.1 }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, delay = 0, staggerDelay = 0.1, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
