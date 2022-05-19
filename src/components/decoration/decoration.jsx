import { motion } from 'framer-motion';

// Styles
import decorationStyles from './decoration.module.scss';

export default function Decoration() {
  return (
    <motion.div
      className={`${decorationStyles.circleBig}`}
      animate={{
        rotate: 360,
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      <div className={`${decorationStyles.circleSmall}`} />
    </motion.div>

  );
}
