import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Styles
import styles from './motion-slider.module.scss';

export default function MotionSlider({ children, parentId }) {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [timers, setTimers] = useState([]);
  const stateRef = useRef(null);
  stateRef.current = timers;
  const trackRef = useRef(null);
  const galleryWrapperRef = useRef(null);

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const timerId = setTimeout(() => {
        const galleryStartPosition = galleryWrapperRef.current.getBoundingClientRect();
        setDragConstraints({
          left: (window.innerWidth - 1 <= galleryStartPosition.width)
            ? (window.innerWidth - entry.target.scrollWidth - (galleryStartPosition.x * 2))
            : 0,
          right: 0,
        });
      }, 600);
      const temp = stateRef.current;
      temp.push(timerId);
      setTimers(temp);
    }
  });

  useEffect(() => {
    trackRef.current = document.getElementById('slider-track');
    galleryWrapperRef.current = document.getElementById(parentId);
    resizeObserver.observe(trackRef.current);
    return () => {
      resizeObserver.unobserve(trackRef.current);
      for (let i = 0; i < timers.length; i++) {
        clearTimeout(timers[i]);
      }
    };
  }, []);

  function onDragEnd(event, info) {
    const offset = info.offset.x;
    const correctedVelocity = info.velocity.x;

    const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1;
    const startPosition = info.point.x - offset;

    const endOffset = direction === 1
      ? Math.min(correctedVelocity, offset)
      : Math.max(correctedVelocity, offset);
    const endPosition = startPosition + endOffset;
  }

  return (
    <motion.div
      id="slider-track"
      className={`${styles.track}`}
      drag="x"
      dragConstraints={dragConstraints}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
}

MotionSlider.propTypes = {
  children: PropTypes.element.isRequired,
  parentId: PropTypes.string.isRequired,
};
