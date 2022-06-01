import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../utils/transitions';

export default function RouterSlider({ children }) {
  return (
    <motion.div
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

RouterSlider.propTypes = {
  children: PropTypes.element.isRequired,
};
