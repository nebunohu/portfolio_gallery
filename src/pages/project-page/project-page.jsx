// Components
import BackButton from '../../components/back-button/back-button';
import RouterSlider from '../../components/router-slider/router-slider';

// Styles
import projectPageStyles from './project-page.module.scss';

export default function ProjectPage() {

  return (
    <RouterSlider>
      <BackButton />      
    </RouterSlider>
  )
}