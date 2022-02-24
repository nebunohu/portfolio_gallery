import React, { useState } from "react";

// Components
import Decoration from "../../components/decoration/decoration.jsx";
import Navigation from "../../components/navigation/navigation.jsx";
import RouterSlider from "../../components/router-slider/router-slider.jsx";

// Styles
import styles from './main-page.module.scss';

export default function MainPage() {
  const [menuItem, setMenuItem] = useState('');
  let backgroundStyle = `${styles.wrapper}`;

  switch(menuItem) {
    case 'media_projects':
      backgroundStyle += ` ${styles.bgRed}`;
    break;
    case 'illustration':
      backgroundStyle += ` ${styles.bgYellow}`;
    break;
    case 'design':
      backgroundStyle += ` ${styles.bgPurple}`;
    break;
    case 'about':
      backgroundStyle += ` ${styles.bgGrenGrey}`;
    break;
    default:
    break;
  }

  return (
    <div className={backgroundStyle}>
      <RouterSlider>
        <Decoration />
        <Navigation setMenuItem={(item) => setMenuItem(item)} />
      </RouterSlider>
    </div>
  );
}