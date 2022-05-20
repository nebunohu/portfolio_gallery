import React from 'react';

import { Link } from 'react-router-dom';
import BackButton from '../../components/back-button/back-button';
import RouterSlider from '../../components/router-slider/router-slider';

// Styles
import styles from './contacts-page.module.scss';

// Images
import izbushka from '../../images/izbushka2.png';

function ContactsPage() {
  return (
    <RouterSlider>
      <div className={`${styles.wrapper}`}>
        <BackButton />
        <div className={`${styles.imageWrapper}`}>
            <img src={izbushka} alt="" />
          </div>
        <div className={`${styles.navigationWrapper}`}>
        <nav className={`${styles.nav}`}>
          <ul className={`${styles.navUl}`}>
            <a
              className={`${styles.navLink}`}
              href="https://instagram.com"
            >
              <li className={`${styles.navLi} ${styles.media}`}>TELEGRAM</li>
            </a>
            <a
              className={`${styles.navLink}`}
              href="https://instagram.com"
            >
              <li className={`${styles.navLi} ${styles.illustration}`}>INSTAGRAM</li>
            </a>
            <a
              className={`${styles.navLink}`}
              href="https://instagram.com"
            >
              <li className={`${styles.navLi} ${styles.design}`}>BEHANCE</li>
            </a>
          </ul>
        </nav>
        </div>
      </div>
    </RouterSlider>
  );
}

export default ContactsPage;
