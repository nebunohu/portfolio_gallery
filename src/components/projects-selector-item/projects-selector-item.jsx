import { Link, useLocation } from "react-router-dom";

// Styles
import styles from './projects-selector-item.module.scss';

const ProjectsSelectorItem = ({ el, setProjectsSelectorState }) => {
  const location = useLocation();

  return (
    <div 
      className={`${styles.projectContainer}`} 
       
    >
      <Link className={`${styles.link}`} to={`${el.url}`} state={{from: location.pathname}}>
          <div 
            className={`${styles.projectName}`}
            onMouseEnter={() => {setProjectsSelectorState(el.name)}}
            onMouseLeave={() => {setProjectsSelectorState('')}} 
          >
            {el.name}
          </div>
      </Link>
    </div>
  )
}

export default ProjectsSelectorItem;