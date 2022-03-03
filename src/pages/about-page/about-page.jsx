import BackButton from "../../components/back-button/back-button";
import RouterSlider from "../../components/router-slider/router-slider";

// Styles
import aboutPageStyles from './about-page.module.scss';

import youngJuliaPhoto from '../../images/young-julia.png';

export default function AboutPage() {
  return (
    <RouterSlider>
      
        <div className={`${aboutPageStyles.aboutWrapper}`}>
          <BackButton />          
          <h className={`${aboutPageStyles.header} header`}>Who is she?</h>
          {(window.innerWidth < 425) && <img className={`${aboutPageStyles.photo}`} src={youngJuliaPhoto} alt='Young author'/>}
          <div className={`${aboutPageStyles.textArea}`}>
            <b>Hi, I’m Julia!</b><br/>
            <br/>
            I’m not good in writing about myself but<br/> 
            good in ideas generation.<br/>
            <br/>
            I usually work with 2D media but open to<br/>
            work with anything.<br/>
            <br/>
            My favorites topics are: emotions, modern magic<br/> 
            and music.<br/>
            <br/>
            My bachelor's degree is Graphic design.<br/>
            My master’s degree is Art & Science.<br/>
            <br/>
            My body in a Saint-Petersburg, Russia.<br/>
            My mind working universewide. 👽
          </div>
          <h className={`${aboutPageStyles.header} header`}>Exhibitions</h>
          <div className={`${aboutPageStyles.textArea}`}>
            <b>2022</b><br/>
            <br/>
            IN SILICO, Marina Gisich gallery, Saint-Petersburg<br/>
            <br/>
            <b>2021</b><br/>
            <br/>
            Призракология постсоветских пространств, HSE Art Gallery, Moscow<br/>
            <br/>
            ODYSSEY Festival, Saint-Petersburg<br/>
            <br/>
            STAGE, AIR Gallery, Saint-Petersburg<br/>
            <br/>
            <b>2020</b><br/>
            <br/>
            ЭСКИЗ, SHKAF lib and art-space, Saint-Petersburg<br/>
            <br/>
            <b>2019</b><br/>
            <br/>
            Art Transaction, “Master” Gallery, Saint-Petersburg, 2019<br/>
            <br/>
            Art and Science Festival, Stroganov Academy, Moscow<br/>
            <br/>
            <b>2015</b><br/>
            <br/>
            100 Years to Malevich Black Square, Saint-Petersburg Designer’s Union,Saint-Petersburg<br/>
          </div>
        </div>
    </RouterSlider>
  )
}