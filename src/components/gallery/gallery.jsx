import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MotionSlider from '../motion-slider/motion-slider';

// Styles
import galleryStyles from './gallery.module.scss';

// Components
import RouterSlider from '../router-slider/router-slider';
import BackButton from '../back-button/back-button';
import SocialMediaTab from '../soc-media-tab/soc-media-tab';

export default function Gallery({ data }) {
  const flag = useSelector((store) => store.projects.dataRequestSuccess);
  const params = useParams();
  const parentID = 'albumContent';

  if (!flag) return null;

  return (
    <RouterSlider>
      <BackButton />
      <div className={`${galleryStyles.wrapper}`}>
        <span className={`${galleryStyles.albumTitle}`} />
        <div className={`${galleryStyles.albumContent}`} id={parentID}>
          <MotionSlider parentId={parentID}>
            {
              params.section === 'photography'
                ? data[0].content.map((el, index) => <div className={`${galleryStyles.image}`} key={Math.random(index)}><img draggable={false} src={el.src} alt={el.caption} /></div>)
                : data.map((el, index) => <div className={`${galleryStyles.image}`} key={Math.random(index)}><img draggable={false} src={el.src} alt={el.caption} /></div>)
            }
          </MotionSlider>

        </div>
        {params.section !== 'photography' && <SocialMediaTab />}
        {params.section === 'photography' ? window.innerWidth < 425 ? null : <a className={`${galleryStyles.galleryLink}`} href="https://cannibalshark.tilda.ws">cannibalshark.tilda.ws</a> : <div className={`${galleryStyles.designerName}`}>@gryozart</div>}
      </div>

    </RouterSlider>

  );
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOf([
    PropTypes.shape({
      caption: PropTypes.string,
      src: PropTypes.string,
      title: PropTypes.string,
    }),
    PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        src: PropTypes.string,
        title: PropTypes.string,
      })),
      name: PropTypes.string,
    }),
  ])).isRequired,
};
