import React from "react";
import { 
  Link,
  useRouteMatch 
} from "react-router-dom";

// Components


export default function AdminSectionComponent(props) {
  const [isProjectEditorOpen, setIsProjectEditorOpen] = React.useState(false);
  const [currentProject, setCurrentProject] = React.useState('');
  const match = useRouteMatch();

  const onProjectNameClickHandler = (e) => {
    setIsProjectEditorOpen(true);
    setCurrentProject(e.target.textContent);
  }

  const closeModal = () => {
    setIsProjectEditorOpen(false);
  }

  return (
    <>
      <h2>{props.sectionTitle}</h2>
      <ul>
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
        <li>
          <Link to={`${match.url}/upload`}>
            <input type="button" value="Загрузить новый проект" onClick={props.setIsUpload} />
          </Link>
        </li>
      </ul>
      {/*isProjectEditorOpen && <EditProjectPageModal closeModal={closeModal} projectName={currentProject} />*/}
    </>
  );
}