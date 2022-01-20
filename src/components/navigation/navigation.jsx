
// Styles
import { Link, useLocation } from 'react-router-dom';
import navigationStyles from './navigation.module.scss';

export default function Navigation() {
  const location = useLocation();
  return (
    <div className={`${navigationStyles.navigationWrapper}`}>
      <nav>
        <div className={`${navigationStyles.name}`}>julia gryoza</div>
        <ul className={`${navigationStyles.navUl}`}>
          <Link className={`${navigationStyles.navLink}`} to='media_projects' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.media}`}>MEDIA PROJECTS</li>
          </Link>
          <Link className={`${navigationStyles.navLink}`} to='illustration' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.illustration}`}>ILLUSTRATION</li>
          </Link>
          <Link className={`${navigationStyles.navLink}`} to='design' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.design}`}>DESIGN</li>
          </Link>
          <Link className={`${navigationStyles.navLink}`} to='photography' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.photography}`}>PHOTOGRAPHY</li>
          </Link>
          <Link className={`${navigationStyles.navLink}`} to='fine_art' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.fineArt}`}>FINE ART (SOON)</li>
            </Link>
        </ul>
        <ul className={`${navigationStyles.infoBlock}`}>
          <Link className={`${navigationStyles.navLink}`} to='about' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.about}`}>ABOUT & <br/> CONTACTS</li>
          </Link>
          {/*<Link className={`${navigationStyles.navLink}`} to='contacts' state={{from: location.pathname}}>
            <li className={`${navigationStyles.navLi} ${navigationStyles.contacts}`}>CONTACTS</li>
          </Link>*/}
        </ul>
        <div className={`${navigationStyles.email}`}>gryozart@gmail.com</div>
      </nav>
    </div>
  )
}