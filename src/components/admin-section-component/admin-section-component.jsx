import React from "react";
import { 
  Link,
  useRouteMatch 
} from "react-router-dom";

// Components
import UploadProjectComponent from "../upload-project-component/upload-project-component";

export default function AdminSectionComponent(props) {
  const match = useRouteMatch();

  return (
    <li>
          {props.sectionTitle}
          
      {!!props.data && 
        <ul>
          {props.data.map((el, index) => {
            return (
              <li key={index}>
                <Link to={`${match.url}/${el.url}`}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      }
      <UploadProjectComponent />
    </li>
  );
}