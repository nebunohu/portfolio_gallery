import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import projectsPagetyles from './projects-page.module.scss';

// Actions
import { getData } from '../../services/actions/API-actions';

// utils
import { SERVER_URL } from '../../utils/config';

// Components
import Gallery from '../../components/gallery/gallery';
import NoPageFound from '../no-page-found/no-page-found';
import BackButton from '../../components/back-button/back-button';
import RouterSlider from '../../components/router-slider/router-slider';


export default function ProjectsPage() {
  const data = useSelector(store => store.projects.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
		dispatch(getData(`${SERVER_URL}/static/${params.section}/data.json`));
	}, []);

  function onClickHandler(item) {
		
	}

  switch (params.section) {
    case 'media_projects':
    case 'design': {
      return (
        <RouterSlider>
          <BackButton />
          <section className={`${projectsPagetyles.wrapper}`}>
            {
              !!data && data.map((el, index) => {
                return (
                  <div className={`${projectsPagetyles.projectContainer}`} onClick={onClickHandler(el)} key={index}>
                    <Link className={`${projectsPagetyles.link}`} to={`${el.url}`} state={{from: location.pathname}}>
                        <div className="projects__name">{el.name}</div>
                    </Link>
                  </div>
                );
              })
            }
          </section>
        </RouterSlider>
      )
    } 

    case 'illustration':
    case 'photography': {
      return (
        <RouterSlider>
          <BackButton />
          <Gallery />
        </RouterSlider>
      )
    }

    default: return <NoPageFound />
  
  }
}


