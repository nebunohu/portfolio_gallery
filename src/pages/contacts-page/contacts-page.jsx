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
          <img src={izbushka} alt="" />
        </div>
        <div className={`${styles.navigationWrapper}`}>
          <nav className={`${styles.nav}`}>
            <div className={`${styles.contactsWrapper}`}>
              <ul className={`${styles.navUl}`}>
                <li className={`${styles.navLi}`}>
                  <a
                    className={`${styles.navLink}`}
                    href="https://t.me/gryozart"
                  >
                    TELEGRAM
                  </a>
                </li>
                <li className={`${styles.navLi}`}>
                  <a
                    className={`${styles.navLink}`}
                    href="https://instagram.com/gryozart"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li className={`${styles.navLi}`}>
                  <a
                    className={`${styles.navLink}`}
                    href="https:/behance.net/gryozart"
                  >
                    BEHANCE
                  </a>
                </li>
              </ul>
              <div>
                @GRYOZART
              </div>
            </div>
            <div className={`${styles.navLi} ${styles.email}`}>
              <a
                className={`${styles.navLink} ${styles.email}`}
                href="/"
              >
                GRYOZART@GMAIL.COM
              </a>
            </div>
          </nav>
        </div>
      </div>
    </RouterSlider>
  );
}

export default ContactsPage;
