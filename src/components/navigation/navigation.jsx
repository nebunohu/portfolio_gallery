import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

// Styles
import navigationStyles from './navigation.module.scss';

// Consts
import {
  ABOUT, CONTACTS, DESIGN, FINE_ART, ILLUSTRATION, MEDIA_PROJECTS, PHOTOGRAPHY, ROUTES,
} from '../../consts';

export default function Navigation({ setMenuItem }) {
  const location = useLocation();

  const hoverHandler = (event, item) => {
    event.preventDefault();
    setMenuItem(item);
  };

  return (
    <div className={`${navigationStyles.navigationWrapper}`}>
      <nav className={`${navigationStyles.nav}`}>
        <div className={`${navigationStyles.name}`}>julia gryoza projects</div>
        <ul className={`${navigationStyles.navUl}`}>
          <Link
            className={`${navigationStyles.navLink}`}
            to={ROUTES.mediaProjects}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, MEDIA_PROJECTS); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.media}`}>MEDIA PROJECTS</li>
          </Link>
          <Link
            className={`${navigationStyles.navLink}`}
            to={ROUTES.illustration}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, ILLUSTRATION); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.illustration}`}>ILLUSTRATION</li>
          </Link>
          <Link
            className={`${navigationStyles.navLink}`}
            to={ROUTES.design}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, DESIGN); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.design}`}>DESIGN</li>
          </Link>
          <Link
            className={`${navigationStyles.navLink}`}
            to={ROUTES.photography}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, PHOTOGRAPHY); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.photography}`}>PHOTOGRAPHY</li>
          </Link>
          <Link
            className={`${navigationStyles.navLink} ${navigationStyles.invisibleNavLink}`}
            to={ROUTES.fineArt}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, FINE_ART); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.fineArt}`}>FINE ART (SOON)</li>
          </Link>
        </ul>
        <ul className={`${navigationStyles.infoBlock}`}>
          <Link
            className={`${navigationStyles.navLink}`}
            to={ROUTES.about}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, ABOUT); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.about}`}>ABOUT</li>
          </Link>
          <Link
            className={`${navigationStyles.navLink}`}
            to={ROUTES.contacts}
            state={{ from: location.pathname }}
            onMouseEnter={(e) => { hoverHandler(e, CONTACTS); }}
            onMouseLeave={(e) => { hoverHandler(e, ''); }}
          >
            <li className={`${navigationStyles.navLi} ${navigationStyles.contacts} ${navigationStyles.invisibleNavLink}`}>CONTACTS</li>
          </Link>
        </ul>
        <div className={`${navigationStyles.email}`}>gryozart@gmail.com</div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  setMenuItem: PropTypes.func.isRequired,
};
