// Images
import { useEffect, useRef } from 'react';
import eyeBoundary from '../../images/eye-boundary.svg';

// Styles
import styles from './background-eye.module.scss';

const BackgroundEye = () => {
  const irisRef = useRef();

  var calcSkew = function (max, windowWidth, cursorX, cursorY, skewY) {

    // setup
    var halfWidth = windowWidth / 2; // get the half width of the window
    var halfCurrentPos = cursorX - halfWidth; // get position of x/y releative to halfWidth
    var percentageDecimal = halfCurrentPos / halfWidth, // turn halfCurrentPos into a percentage decimal
      skewDegree;
  
    if (cursorY < window.innerHeight / 2) return 0;
  
    /*if (!skewY) { // calculations for posX
      if (halfCurrentPos > 0) {
        skewDegree = -Math.abs(Math.floor(percentageDecimal * max)); // flip skewDegree to negetive for pos on right side
      } else {
        skewDegree = Math.abs(Math.floor(percentageDecimal * max)); // calc skewDegree for left side
      }
    } else { // calculations for posY	
      if (halfCurrentPos > 0) {
        skewDegree = Math.abs(Math.floor(percentageDecimal * max)); // calc skewDegree for right side
      } else {
        skewDegree = -Math.abs(Math.floor(percentageDecimal * max)); // flip skewDegree to negetive for pos on left side
      }
    }*/
    return skewDegree;
  }

  useEffect(() => {
    const iris = irisRef.current;
    window.addEventListener("mousemove", (event) => {
      // config
      var /*self = this,*/
      evnt = event,
      cursorX = evnt.pageX,
      cursorY = evnt.pageY,
      windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      posLeftPercetange = (cursorX / windowWidth) * 100, // turn cursorX pos into a percentage
      posTopPercentage = (cursorY / windowHeight) * 100; // turn cursorY pos into a percentage

    
      iris.style.left = posLeftPercetange + '%';
      iris.style.transform = 'translate(-50%, -50%) skewX(' + calcSkew(12, windowWidth, cursorX, cursorY) +
        'deg) skewY(' + calcSkew(8, windowWidth, cursorX, cursorY, 'skewY') + 'deg)';
    


      iris.style.top = posTopPercentage + '%';
      iris.style.transform = 'translate(-50%, -50%) skewX(' + calcSkew(12, windowWidth, cursorX, cursorY) +
        'deg)  skewY(' + calcSkew(8, windowWidth, cursorX, cursorY, 'skewY') + 'deg)';
    

    evnt.stopPropagation();

    });
    /*return () => {
      window.removeEventListener("mousemove");
    }*/
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