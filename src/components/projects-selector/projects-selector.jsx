import { useState } from 'react';

// Components
import RouterSlider from "../router-slider/router-slider";
import BackButton from "../back-button/back-button";

// Styles
import pageSelectorStyles from './page-selector.module.scss'
import ProjectsSelectorItem from "../projects-selector-item/projects-selector-item";

export default function ProjectsSelector({data}) {
  const [projectsSelectorState, setProjectsSelectorState] = useState('');
  let decorClass = '';

  switch (projectsSelectorState) {
    case "album covers":
      decorClass = `${pageSelectorStyles.albumCovers}`;
    break;
    case "posters":
      decorClass = `${pageSelectorStyles.posters}`;
    break;
    case "web-design":
      decorClass = `${pageSelectorStyles.webDesign}`;
    break;
    case "presentations":
      decorClass = `${pageSelectorStyles.presentations}`;
    break;
    default: 
    break;
  }
  return (
    <RouterSlider>
      <BackButton />
      {!!projectsSelectorState && <div 
          className={`${pageSelectorStyles.decorElement} ${decorClass}`}
          />}
      <section className={`${pageSelectorStyles.wrapper}`}>
        
        {
          !!data && data.map((el, index) => {
            return (
              <ProjectsSelectorItem el={el} setProjectsSelectorState={setProjectsSelectorState} key={index} />
            );
          })
        }
      </section>
    </RouterSlider>
  )
}