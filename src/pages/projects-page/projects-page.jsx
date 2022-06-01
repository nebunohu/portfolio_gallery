import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Styles

// Actions
import { getData } from '../../services/actions/API-actions';

// utils
import { FIREBASE_URL } from '../../utils/config';

// Components
import Gallery from '../../components/gallery/gallery';
import NoPageFound from '../no-page-found/no-page-found';
import { CLEAR_SUCCESS_FLAG } from '../../services/actions/projects-actions';
import ProjectsSelector from '../../components/projects-selector/projects-selector';

// Utils
import addJsonEnding from '../../utils/addJsonEnding';

export default function ProjectsPage() {
  const data = useSelector((store) => store.projects.data);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getData(`${FIREBASE_URL}/${addJsonEnding(params.section)}`));
    return (() => {
      dispatch({ type: CLEAR_SUCCESS_FLAG });
    });
  }, [dispatch, params.section]);

  switch (params.section) {
    case 'media_projects':
    case 'design': {
      return <ProjectsSelector data={data} />;
    }

    case 'illustration':
    case 'photography': {
      return <Gallery data={data} />;
    }

    default: return <NoPageFound />;
  }
}
