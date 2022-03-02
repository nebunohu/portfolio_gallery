

// Styles 
import galleryStyles from './gallery.module.scss';

import MotionSlider from '../motion-slider/motion-slider';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import RouterSlider from '../router-slider/router-slider';
import BackButton from '../back-button/back-button';

export default function Gallery({data}) {
  const flag = useSelector(store => store.projects.dataRequestSuccess);
  const params = useParams();
  

  if(!flag) return null;

  return (
    <RouterSlider>
      <BackButton />
      <div className={`${galleryStyles.wrapper}`}>
        <span className={`${galleryStyles.albumTitle}`}></span>
        <div className={`${galleryStyles.albumContent}`}>
          <MotionSlider>
            {
              params.section === "photography" ?
                data[0].content.map((el, index) => <img draggable={false} src={el.src} alt={el.caption} key={index} />)  :
                data.map((el, index) => <div className={`${galleryStyles.image}`}><img  draggable={false} src={el.src} alt={el.caption} key={index} /></div>)  
            }
          </MotionSlider>
          
        </div>
      </div>
    </RouterSlider>
    
  )
}