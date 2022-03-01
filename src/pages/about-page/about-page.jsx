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
          
          {/*<img className={`${aboutPageStyles.photo}`} src={youngJuliaPhoto} alt='Young author'/>*/}
          <div className={`${aboutPageStyles.header}`}>Who is she?</div>
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
          <div className={`${aboutPageStyles.header}`}>Exhibitions</div>
          <div className={`${aboutPageStyles.textArea}`}>
          2022<br/>
          <br/>
          IN SILICO, Marina Gisich gallery, Saint-Petersburg<br/>
          <br/>
          2021<br/>
          <br/>
          Призракология постсоветских пространств, HSE Art Gallery, Moscow<br/>
          <br/>
          ODYSSEY Festival, Saint-Petersburg<br/>
          <br/>
          STAGE, AIR Gallery, Saint-Petersburg<br/>
          <br/>
          2020<br/>
          <br/>
          ЭСКИЗ, SHKAF lib and art-space, Saint-Petersburg<br/>
          <br/>
          2019<br/>
          <br/>
          Art Transaction, “Master” Gallery, Saint-Petersburg, 2019<br/>
          <br/>
          Art and Science Festival, Stroganov Academy, Moscow<br/>
          <br/>
          2015<br/>
          <br/>
          100 Years to Malevich Black Square, Saint-Petersburg Designer’s Union,Saint-Petersburg<br/>

          </div>
        </div>
    </RouterSlider>
  )
}