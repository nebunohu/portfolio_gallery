import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// Styles
import projectsPagetyles from './projects-page.module.scss';

// Actions
import { getData } from '../../services/actions/API-actions';

// utils
import { SERVER_URL } from '../../utils/config';
import { pageVariants, pageTransition } from "../../utils/transitions.js";

// Components
import Gallery from '../../components/gallery/gallery';
import NoPageFound from '../no-page-found/no-page-found';
import BackButton from '../../components/back-button/back-button';


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
        <motion.div
          style={{'position': 'relative', 'width': '100%', 'height': '100%'}}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
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
        </motion.div>
      )
    } 

    case 'illustration':
    case 'photography': {
      return <Gallery />
    }

    default: return <NoPageFound />
  
  }
}


