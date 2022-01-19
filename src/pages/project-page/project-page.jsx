import { motion } from 'framer-motion';

// Components
import BackButton from '../../components/back-button/back-button';

// Styles
import projectPageStyles from './project-page.module.scss';

// Utils 
import { pageTransition, pageVariants } from '../../utils/transitions';

export default function ProjectPage() {

  return (
    <>
     <motion.div
      style={{'position': 'relative', 'width': '100%', 'height': '100%', overflow: 'hidden'}}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <BackButton />
    </motion.div>
      
    </>
  )
}