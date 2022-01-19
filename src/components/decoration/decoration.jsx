import { motion } from 'framer-motion'

// Styles
import decorationStyles from './decoration.module.scss';

export default function Decoration() {
  return (
    <div className={`${decorationStyles.wrapper}`}>
      <motion.iv 
        className={`${decorationStyles.circleBig}`} 
        animate={{
          rotate: 360,
          count: 2
        }} 
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
      <div 
        className={`${decorationStyles.circleSmall}`} 
         
      />
      </motion.iv>
    </div>
    
  )
}