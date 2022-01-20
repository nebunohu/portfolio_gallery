import BackButton from "../../components/back-button/back-button";
import RouterSlider from "../../components/router-slider/router-slider";

// Styles
import aboutPageStyles from './about-page.module.scss';

import youngJuliaPhoto from '../../images/young-julia.png';

export default function AboutPage() {
  return (
    <RouterSlider>
      <BackButton />
        <div className={`${aboutPageStyles.aboutWrapper}`}>
          
          <img className={`${aboutPageStyles.photo}`} src={youngJuliaPhoto} alt='Young author'/>
          
          <div className={`${aboutPageStyles.textArea}`}>
            <span>
              Julia - is a visionary, artist, designer, and sometimes photographer.
            </span>
            <span>
              Open for collaboration. <br/>
              Worldwide.
            </span>
          </div>
        </div>
    </RouterSlider>
  )
}