//import { pasteHtmlTemplate } from "./adminDashboard.jsx";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  //Link
} from "react-router-dom";
import { 
  TransitionGroup,
  CSSTransition 
} from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';

// Components
import MainPage from "../../pages/main-page/main-page.jsx";
import ProjectsPage from "../../pages/projects-page/projects-page";
import ProjectPage from "../../pages/project-page/project-page.jsx";
import NoPageFound from '../../pages/no-page-found/no-page-found.jsx';
import AdminComponent from "../admin/admin";
import AdminSectionComponent from "../admin-section-component/admin-section-component";
import AppHeader from "../app-header/app-header.jsx";

import AppFooter from "../app-footer/app-footer.jsx";
import ArtSection from "../art-section/art-section";
import Project from "../project/project";
import ProtectedRoute from "../protected-route/protected-route";
import UploadProjectComponent from "../upload-project-component/upload-project-component";
import EditProjectPage from "../edit-project-page/edit-project-page";

// Styles
import './style.scss';





function App() {
  const [state, setState] = React.useState({isAdminPage: false});
  const [isLogined, setIsLogined] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (window.location.pathname.match(/\/admin/i)) setState({...state, isAdminPage: true});
    else setState({...state, isAdminPage: false});
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
              <Route exact path='/' element={<MainPage/>} />
              <Route path='/:section' element={<ProjectsPage/>} />
              <Route path={`/:section/:projectId`} element={<ProjectPage/>} />
              <Route exact path='/admin' element={<AdminComponent isLoggedIn={isLogined} loginFlagSetter={setIsLogined}/>} />
              <Route path='/admin/dashboard' element={<ProtectedRoute isLogined={isLogined} />} >
                <Route path={`:section`} element= {<AdminSectionComponent />} >
                  <Route path={`upload`} element={<UploadProjectComponent />} />
                  <Route path={`:project`} element={<EditProjectPage />} />
                </Route>
              </Route>
              <Route element={<NoPageFound/>} />
          </Routes>
    </AnimatePresence>
  );
}

export default App;
