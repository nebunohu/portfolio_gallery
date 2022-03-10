// Images
import { useEffect, useRef } from 'react';
import eyeBoundary from '../../images/eye-boundary.svg';

// Styles
import styles from './background-eye.module.scss';

const BackgroundEye = () => {
  const irisRef = useRef();
  const mouseMoveHandler = (event) => {
    const 
      iris = irisRef.current,
      cursorX = event.pageX,
      cursorY = event.pageY,
      windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      posLeftPercetange = (cursorX / windowWidth) * 100, // turn cursorX pos into a percentage
      posTopPercentage = (cursorY / windowHeight) * 100; // turn cursorY pos into a percentage
    
      iris.style.left = `${posLeftPercetange}%`;
      iris.style.top = `${posTopPercentage}%`;

      event.stopPropagation();
  }

  useEffect(() => {
    
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    }
  })
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.eyeWrapper}`}>
        <img className={`${styles.eyeBoundary}`} src={eyeBoundary} alt=''/>
        <div className={`${styles.irisMoveBounds}`}>
          <div className={`${styles.iris}`} ref={irisRef}>
            <div className={`${styles.pupil}`} />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundEye;