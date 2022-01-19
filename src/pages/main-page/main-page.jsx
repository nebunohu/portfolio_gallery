import React from "react";
import { motion } from 'framer-motion';

// Components
import Decoration from "../../components/decoration/decoration.jsx";
import Navigation from "../../components/navigation/navigation.jsx";

// Utils 
import { pageVariants, pageTransition } from "../../utils/transitions.js";

export default function MainPage() {
  return (
    <motion.div
      style={{'position': 'relative', 'width': '100%', 'height': '100%', overflow: 'hidden'}}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Decoration />
      <Navigation />
    </motion.div>
  );
}