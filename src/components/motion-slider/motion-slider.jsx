
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from './motion-slider.module.scss';

export default function MotionSlider({ children, parentId}) {
  const [dragConstraints, setDragConstraints] = useState({left: 0, right: 0});
  const trackRef = useRef(null);
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      setTimeout(() => {
        const rect = entry.target.getBoundingClientRect();
          setDragConstraints({
            left: window.innerWidth - entry.target.scrollWidth - (rect.x*2),
            right: 0
          })
      }, 600)
    }
  });
  
  useEffect(() => {
    trackRef.current = document.getElementById('slider-track');
    resizeObserver.observe(trackRef.current);
    return () => {
      resizeObserver.unobserve(trackRef.current);
    }
  }, []);

  return (
    <motion.div
      id='slider-track'
      className={`${styles.track}`}
      drag="x"
      dragConstraints={dragConstraints}
    >
      {children}
    </motion.div>
  )
}