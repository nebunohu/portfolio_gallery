import React, { useEffect, useRef } from 'react';
// Images
import eyeBoundary from '../../images/eye-boundary.svg';

// Styles
import styles from './background-eye.module.scss';

function BackgroundEye() {
  const irisRef = useRef();
  const pupilRef = useRef();
  const mouseMoveHandler = (event) => {
    const
      iris = irisRef.current;
    const pupil = pupilRef.current;
    const cursorX = event.pageX;
    const cursorY = event.pageY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const posLeftPercetange = (cursorX / windowWidth) * 100; // turn cursorX pos into a percentage
    const posTopPercentage = (cursorY / windowHeight) * 100; // turn cursorY pos into a percentage

    iris.style.left = `${posLeftPercetange}%`;
    iris.style.top = `${posTopPercentage}%`;

    pupil.style.left = `${posLeftPercetange}%`;
    pupil.style.top = `${posTopPercentage}%`;

    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  });
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.eyeWrapper}`}>
        <img className={`${styles.eyeBoundary}`} src={eyeBoundary} alt="" />
        <div className={`${styles.irisMoveBounds}`}>
          <div className={`${styles.iris}`} ref={irisRef}>
            <div className={`${styles.pupilMoveBounds}`}>
              <div className={`${styles.pupil}`} ref={pupilRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundEye;
