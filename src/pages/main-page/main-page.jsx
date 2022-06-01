import React, { useState } from 'react';

// Components
import Navigation from '../../components/navigation/navigation';
import RouterSlider from '../../components/router-slider/router-slider';

// Styles
import styles from './main-page.module.scss';

// Images
import taroSrc from '../../images/taro-cards.png';
import illustrationSrc from '../../images/illustration.png';
import designSrc from '../../images/design.png';
import photoSrc from '../../images/young-julia.png';
import contactsSrc from '../../images/izbushka1.png';

// Consts
import {
  ABOUT, CONTACTS, DESIGN, ILLUSTRATION, MEDIA_PROJECTS, MOBILE_DISPLAY_WIDTH,
} from '../../consts';

export default function MainPage() {
  const [menuItem, setMenuItem] = useState('');
  let backgroundStyle = `${styles.wrapper}`;
  let imageSrc = '';
  let imageBorderStyle = '';

  if (window.innerWidth > MOBILE_DISPLAY_WIDTH) {
    switch (menuItem) {
      case MEDIA_PROJECTS:
        backgroundStyle += ` ${styles.bgRed}`;
        imageSrc = taroSrc;
        break;
      case ILLUSTRATION:
        backgroundStyle += ` ${styles.bgYellow}`;
        imageSrc = illustrationSrc;
        break;
      case DESIGN:
        backgroundStyle += ` ${styles.bgPurple}`;
        imageSrc = designSrc;
        break;
      case ABOUT:
        backgroundStyle += ` ${styles.bgGrenGrey}`;
        imageBorderStyle = `${styles.imageBorder}`;
        imageSrc = photoSrc;
        break;
      case CONTACTS:
        backgroundStyle += ` ${styles.bgGreen}`;
        imageSrc = contactsSrc;
        break;
      default:
        break;
    }
  }

  return (
    <div className={backgroundStyle}>
      <RouterSlider>
        {!!imageSrc && (
        <div className={`${styles.imageWrapper}`}>
          <img className={imageBorderStyle} src={imageSrc} alt="" />
        </div>
        )}
        {/* <Decoration /> */}
        <Navigation setMenuItem={(item) => setMenuItem(item)} />
      </RouterSlider>
    </div>
  );
}
