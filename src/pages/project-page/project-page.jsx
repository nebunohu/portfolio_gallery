// Components
import React from 'react';
import { useParams } from 'react-router';
import BackButton from '../../components/back-button/back-button';
import RouterSlider from '../../components/router-slider/router-slider';
import NeuralTarotPage from '../neural-tarot-page/neural-tarot-page';
// Styles
// import projectPageStyles from './project-page.module.scss';

export default function ProjectPage() {
  const params = useParams();

  switch (params.projectId) {
    case 'tarot': {
      return <NeuralTarotPage />;
    }
    default: {
      return (
        <RouterSlider>
          <BackButton />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            fontSize: '10vh',
          }}
          >
            Project folder is empty now
          </div>
        </RouterSlider>
      );
    }
  }
}
