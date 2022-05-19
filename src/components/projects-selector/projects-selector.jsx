import { useState } from 'react';

// Components
import { useParams } from 'react-router';
import RouterSlider from '../router-slider/router-slider';
import BackButton from '../back-button/back-button';
import ProjectsSelectorItem from '../projects-selector-item/projects-selector-item';
import BackgroundEye from '../background-eye/background-eye';

// Styles
import pageSelectorStyles from './page-selector.module.scss';

export default function ProjectsSelector({ data }) {
  const [projectsSelectorState, setProjectsSelectorState] = useState('');
  const params = useParams();
  let decorClass = '';

  switch (projectsSelectorState) {
    case 'album covers':
      decorClass = `${pageSelectorStyles.albumCovers}`;
      break;
    case 'posters':
      decorClass = `${pageSelectorStyles.posters}`;
      break;
    case 'web-design':
      decorClass = `${pageSelectorStyles.webDesign}`;
      break;
    case 'presentations':
      decorClass = `${pageSelectorStyles.presentations}`;
      break;
    default:
      break;
  }
  return (
    <RouterSlider>
      <BackButton />
      {!!projectsSelectorState && (window.innerWidth > 480) && (
      <div
        className={`${pageSelectorStyles.decorElement} ${decorClass}`}
      />
      )}
      {params.section !== 'design' && (window.innerWidth > 480) && <BackgroundEye />}
      <section className={`${pageSelectorStyles.wrapper}`}>

        {
          !!data && data.map((el, index) => (
            <ProjectsSelectorItem el={el} setProjectsSelectorState={setProjectsSelectorState} key={index} />
          ))
        }
      </section>
    </RouterSlider>
  );
}
