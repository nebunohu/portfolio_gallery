import { Link, useLocation } from "react-router-dom";

// Components
import RouterSlider from "../router-slider/router-slider";
import BackButton from "../back-button/back-button";

// Styles
import pageSelectorStyles from './page-selector.module.scss'

export default function ProjectsSelector({data}) {
  const location = useLocation();
  return (
    <RouterSlider>
      <BackButton />
      <section className={`${pageSelectorStyles.wrapper}`}>
        {
          !!data && data.map((el, index) => {
            return (
              <div className={`${pageSelectorStyles.projectContainer}`} key={index}>
                <Link className={`${pageSelectorStyles.link}`} to={`${el.url}`} state={{from: location.pathname}}>
                    <div className="projects__name">{el.name}</div>
                </Link>
              </div>
            );
          })
        }
      </section>
    </RouterSlider>
  )
}