import React, { useState } from "react";

// Components
import Decoration from "../../components/decoration/decoration.jsx";
import Navigation from "../../components/navigation/navigation.jsx";
import RouterSlider from "../../components/router-slider/router-slider.jsx";

// Styles
import styles from './main-page.module.scss';

// Images
import taroSrc from '../../images/taro-cards.png';
import illustrationSrc from '../../images/illustration.png';
import designSrc from '../../images/design.png';
import photoSrc from '../../images/young-julia.png';

export default function MainPage() {
  const [menuItem, setMenuItem] = useState('');
  let backgroundStyle = `${styles.wrapper}`;
  let imageSrc = '';

  if(window.innerWidth > 480) {
    switch(menuItem) {
      case 'media_projects':
        backgroundStyle += ` ${styles.bgRed}`;
        imageSrc = taroSrc;
      break;
      case 'illustration':
        backgroundStyle += ` ${styles.bgYellow}`;
        imageSrc = illustrationSrc;
      break;
      case 'design':
        backgroundStyle += ` ${styles.bgPurple}`;
        imageSrc = designSrc;
      break;
      case 'about':
        backgroundStyle += ` ${styles.bgGrenGrey}`;
        imageSrc = photoSrc;
      break;
      default:
      break;
    }
  }

  return (
    <div className={backgroundStyle}>
      <RouterSlider>
        {!!imageSrc && <div className={`${styles.imageWrapper}`}>
            <img  src={imageSrc} alt=''/>
          </div>}
        {/*<Decoration />*/}
        <Navigation setMenuItem={(item) => setMenuItem(item)} />
      </RouterSlider>
    </div>
  );
}