import React from "react";
import { 
  Link,
  useRouteMatch 
} from "react-router-dom";

// Components

// Styles
import admSecCompStyles from './admin-section-component.module.css';


export default function AdminSectionComponent(props) {
  const match = useRouteMatch();

  return (
    <>
      <h2>{props.sectionTitle}</h2>
      <ul className={admSecCompStyles.list}>
        {!!props.data &&
          props.data.map((el, index) => {
            return (
              <li key={index} onClick={props.setIsEdit}>
                {/*<Link to={`${match.url}/${el.url}`}>{el.name}</Link>*/}
                <Link to={`${match.url}/${el.url}`}>{el.name}</Link>
              </li>
            );
          })
        }
        
      </ul>
      <Link to={`${match.url}/upload`}>
        <input className={admSecCompStyles.uploadPrjBtn} type="button" value="Загрузить новый проект" onClick={props.setIsUpload} />
      </Link>
      {/*isProjectEditorOpen && <EditProjectPageModal closeModal={closeModal} projectName={currentProject} />*/}
    </>
  );
}