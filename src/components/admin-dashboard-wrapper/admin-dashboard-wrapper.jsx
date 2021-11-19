import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams
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
  const match = useRouteMatch();
  
  function projectClickHandler(e) {
    setIsEdit(true);
    setIsUpload(false);
    setCurrentProject(fetchArtData.find((el) => el.name === e.target.textContent));
  }

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
              <Link to={`${match.url}/art`}>Art</Link>
            </li>
            <li>
              <Link to={`${match.url}/photo`}>Photo</Link>
            </li>
            <li>
              <Link to={`${match.url}/illustration`}>Illustration</Link>
            </li>
            <li>
              <Link to={`${match.url}/design`}>Design</Link>
            </li>
          </ul>  
        </aside>
        
        <div className={`${dashboardStyles.center}`}>
          <Switch>
            <Route path={`${match.path}/art`}>
              <AdminSectionComponent 
                sectionTitle='Art' 
                data={fetchArtData} 
                setIsEdit={projectClickHandler}
                setIsUpload={uploadButtonClickHandler}
              />
            </Route>
            <Route path={`${match.path}/photo`}>
              <AdminSectionComponent 
                sectionTitle='Photo' 
                setIsEdit={projectClickHandler}
                setIsUpload={uploadButtonClickHandler}
              />
            </Route>
            <Route path={`${match.path}/illustration`}>
              <AdminSectionComponent 
                sectionTitle='Illustration' 
                setIsEdit={projectClickHandler}
                setIsUpload={uploadButtonClickHandler}
              />
            </Route>
            <Route path={`${match.path}/design`}>
              <AdminSectionComponent 
                sectionTitle='Design' 
                setIsEdit={projectClickHandler}
                setIsUpload={uploadButtonClickHandler}
              />
            </Route>
          </Switch>
        </div>
        <div className={`${dashboardStyles.right}`}>
          <Switch>
            <Route exact path={`${match.path}/:section/:project`}>
              {isEdit && <EditProjectPage currentProject={currentProject} projectName={props.sectionTitle} />}
              {isUpload && <UploadProjectComponent sectionTitle={props.sectionTitle} />}
            </Route>
          </Switch>
        </div>
      </div>
      
    </>
  );
  
};

