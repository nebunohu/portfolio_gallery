import React from "react";
import {
  Routes,
  Route,
  useMatch,
  Link,
  useParams,
  Outlet
} from 'react-router-dom';

// Components
import AdminSectionComponent from "../admin-section-component/admin-section-component";
import UploadProjectComponent from "../upload-project-component/upload-project-component";
import EditProjectPage from "../edit-project-page/edit-project-page";

// Styles
import dashboardStyles from "./admin-dashboard-wrapper.module.scss"

// Utils
import { SERVER_URL } from "../../utils/config";

export default function AdminDashboardWrapper(props) {
  
  const [fetchArtData, setFechArtData] = React.useState([]);
  const [isUpload, setIsUpload] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [currentProject, setCurrentProject] = React.useState();
//  const match = useMatch();
  
  

  function uploadButtonClickHandler() {
    setIsUpload(true);
    setIsEdit(false);
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/static/art/data.json`);
        if(res.ok) {
          const data = await res.json();
          setFechArtData(data.data);
        } else {
          throw new Error('Fetch error - Status is not ok');
        }
      } catch {
        console.log(Error.message);
      }
    }

    getData();
  }, []);

  return (
    <>
      {/*<header>
        <h1 style={{alignSelf: 'start'}}>Панель администрирования</h1>
      </header>*/}
      <div className={`${dashboardStyles.dashboardWrapper}`} >
        <aside>
          <ul>
          <li>
              <Link to={`art`}>Art</Link>
            </li>
            <li>
              <Link to={`photo`}>Photo</Link>
            </li>
            <li>
              <Link to={`illustration`}>Illustration</Link>
            </li>
            <li>
              <Link to={`design`}>Design</Link>
            </li>
          </ul>  
        </aside>

        <div className={`${dashboardStyles.center}`}>
          <Outlet />
        </div>
        
      </div>
      
    </>
  );
  
};

