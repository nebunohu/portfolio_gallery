import { useEffect } from 'react';

// Styles 
import galleryStyles from './gallery.module.scss';

import MotionSlider from '../motion-slider/motion-slider';
import { useDispatch } from 'react-redux';
import { getData } from '../../services/actions/API-actions';
import { SERVER_URL } from '../../utils/config';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Gallery() {
  const dispatch = useDispatch();
  const params = useParams();
  const data = useSelector(store => store.projects.data);

  useEffect(() => {
    dispatch(getData(`${SERVER_URL}/static/${params.section}/data.json`));
  }, []);

  if(typeof data === 'undefined') return null;

  return (
    <div className={`${galleryStyles.wrapper}`}>
      <span className={`${galleryStyles.albumTitle}`}>{data[0].name}</span>
      <div className={`${galleryStyles.albumContent}`}>
        <MotionSlider>
          {
            params.section === "photography" ?
              data[0].content.map((el, index) => <img src={el.src} alt={el.caption} key={index} />) :
              data.map((el, index) => <img src={el.src} alt={el.caption} key={index} />)  
          }
        </MotionSlider>
        
      </div>
    </div>
  )
}