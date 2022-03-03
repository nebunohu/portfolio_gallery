
// Styles
import styles from './soc-media-tab.module.scss';

// Images
import instagramLogo from '../../images/instagram-logo.svg';
import behanceLogo from '../../images/behance-logo.svg';

const SocialMediaTab = () => {
  return (
    <div className={`${styles.socialMedia}`}>
      <a href="https://www.behance.net/gryozart">
       
        <img src={behanceLogo} alt="" />
      </a>
      <a href="https://instagram.com/gryozart/">
        <img src={instagramLogo} alt="" />  
      </a>    
      
    </div>
  )
}

export default SocialMediaTab;