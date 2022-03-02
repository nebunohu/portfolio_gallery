
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from './motion-slider.module.scss';

export default function MotionSlider({children}) {
  const [dragConstraints, setDragConstraints] = useState({left: 0, right: 0});
  const trackRef = useRef(null);
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const rect = entry.target.getBoundingClientRect();
      if(rect.x > window.innerWidth) {
        setDragConstraints({
          left: 0 - entry.target.scrollWidth /*- ((rect.x - )*2)*/,
          right: 0
        })
      } else {
        setDragConstraints({
          left: window.innerWidth - entry.target.scrollWidth /*- (rect.x*2)*/,
          right: 0
        })
      }
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