
import useWindowSize from '@rehooks/window-size';
//import useDimensions from 'react-use-dimensions';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useElementSize } from 'usehooks-ts'
import { motion, useAnimation } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// Styles
import styles from './motion-slider.module.css';

export default function MotionSlider({children}) {
  const [rerender, setRerender] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({left: 0, right: 0});
  const state = useSelector(store => store.carousel);
  const sliderTrackRef = useRef(null);
  const [squareRef, { width, height }] = useElementSize()
  
  useEffect(() => {
    sliderTrackRef.current = document.getElementById('slider-track').getBoundingClientRect();
    const win = window;
    setTimeout(() => setDragConstraints(), 1000)
  }, []);

  // if(!dragConstraints && sliderTrackRef.current) {
  //   setDragConstraints({
  //     left: window.innerWidth - sliderTrackRef.current.width - sliderTrackRef.current.x,
  //     right: 0 + sliderTrackRef.current.x
  //   });
  //   setRerender(true);
  // }
  // if(rerender) setRerender(false);

  return (
    <motion.div
    ref={squareRef}
      id='slider-track'
      className={`${styles.track}`}
      drag="x"
      dragConstraints={{
        left: 0 - window.innerWidth,
        right: window.innerWidth - 500
      }}
    >
      {children}
    </motion.div>
  )
}