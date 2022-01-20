import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles

// Actions
import { getData } from '../../services/actions/API-actions';

// utils
import { SERVER_URL } from '../../utils/config';

// Components
import Gallery from '../../components/gallery/gallery';
import NoPageFound from '../no-page-found/no-page-found';
import { CLEAR_SUCCESS_FLAG } from '../../services/actions/projects-actions';
import ProjectsSelector from '../../components/projects-selector/projects-selector';


export default function ProjectsPage() {
  const data = useSelector(store => store.projects.data);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
		dispatch(getData(`${SERVER_URL}/static/${params.section}/data.json`));
    return (() => {
      dispatch({type: CLEAR_SUCCESS_FLAG});
    })
	}, [dispatch, params.section]);

  switch (params.section) {
    case 'media_projects':
    case 'design': {
      return <ProjectsSelector data= {data} />
    } 

    case 'illustration':
    case 'photography': {
      return <Gallery data={data} />
    }

    default: return <NoPageFound />
  
  }
}


