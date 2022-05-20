import React from 'react';
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
            <img className={imageBorderStyle} src={izbushka} alt="" />
          </div>
        <div className={`${navigationStyles.navigationWrapper}`}>
        <nav className={`${navigationStyles.nav}`}>
          <ul className={`${navigationStyles.navUl}`}>
            <Link
              className={`${navigationStyles.navLink}`}
              to={"3"}
              state={{ from: location.pathname }}
            >
              <li className={`${navigationStyles.navLi} ${navigationStyles.media}`}>TELEGRAM</li>
            </Link>
            <Link
              className={`${navigationStyles.navLink}`}
              to={"3"}
              state={{ from: location.pathname }}
            >
              <li className={`${navigationStyles.navLi} ${navigationStyles.illustration}`}>INSTAGRAM</li>
            </Link>
            <Link
              className={`${navigationStyles.navLink}`}
              to={"3"}
              state={{ from: location.pathname }}
            >
              <li className={`${navigationStyles.navLi} ${navigationStyles.design}`}>BEHANCE</li>
            </Link>
          </ul>
        </nav>
        </div>
      </div>
    </RouterSlider>
  );
}

export default ContactsPage;
