// Components
import BackButton from '../../components/back-button/back-button';
import RouterSlider from '../../components/router-slider/router-slider';

// Styles
import projectPageStyles from './project-page.module.scss';

export default function ProjectPage() {

  return (
    <RouterSlider>
      <BackButton />    
      <div style={{
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        fontSize: "10vh"
      }}
      >
        Project folder is empty now  
      </div>  
    </RouterSlider>
  )
}