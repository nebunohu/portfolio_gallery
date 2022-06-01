import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

// Styles
import styles from './projects-selector-item.module.scss';

function ProjectsSelectorItem({ el, setProjectsSelectorState }) {
  const location = useLocation();

  return (
    <div
      className={`${styles.projectContainer}`}

    >
      <Link className={`${styles.link}`} to={`${el.url}`} state={{ from: location.pathname }}>
        <div
          className={`${styles.projectName}`}
          onMouseEnter={() => { setProjectsSelectorState(el.name); }}
          onMouseLeave={() => { setProjectsSelectorState(''); }}
        >
          {el.name}
        </div>
      </Link>
    </div>
  );
}

export default ProjectsSelectorItem;

ProjectsSelectorItem.propTypes = {
  el: PropTypes.shape({
    content: PropTypes.shape({
      description: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string,
      })),
    }),
    cover: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  setProjectsSelectorState: PropTypes.func.isRequired,
};
