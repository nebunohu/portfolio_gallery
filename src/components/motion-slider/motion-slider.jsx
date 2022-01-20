
import useWindowSize from '@rehooks/window-size';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function MotionSlider({children}) {
  const dispatch = useDispatch();
  const velocity = 1;
  const state = useSelector(store => store.carousel);
  const transition = undefined;

  const negativeItems = state.items.map(
    item => item * -1 + trackDimensions.x || 0
  );

  const windowDimensions = useWindowSize();
  const controls = useAnimation();

  function onDragEnd(event, info) {
    const offset = info.offset.x;
    const correctedVelocity = info.velocity.x * velocity;

    const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1;
    const startPosition = info.point.x - offset;

    const endOffset =
      direction === 1
        ? Math.min(correctedVelocity, offset)
        : Math.max(correctedVelocity, offset);
    const endPosition = startPosition + endOffset;

    const closestPosition = negativeItems.reduce((prev, curr) =>
      Math.abs(curr - endPosition) < Math.abs(prev - endPosition) ? curr : prev
    );

    const activeSlide = negativeItems.indexOf(closestPosition);
    dispatch({ type: "SET_ACTIVE_ITEM", activeItem: activeSlide });

    controls.start({
      x: Math.max(
        closestPosition,
        windowDimensions.innerWidth -
          trackDimensions.width -
          trackDimensions.x || 0
      ),
      transition
    });
  }
  return (
    <motion.div
      ref={trackRef}  
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  )
}