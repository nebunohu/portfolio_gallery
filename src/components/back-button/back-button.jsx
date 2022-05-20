import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import backButtonStyles from './back-button.module.scss';

export default function BackButton() {
  const location = useLocation();

  if (location.state === null) {
    location.state = { from: '/' };
  }
  return (
    <div className={`${backButtonStyles.back}`}>
      <Link className={`${backButtonStyles.link}`} to={location.state.from}>back</Link>
    </div>
  );
}
