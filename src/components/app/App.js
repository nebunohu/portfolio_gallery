//import { pasteHtmlTemplate } from "./adminDashboard.jsx";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

// Components
import AdminComponent from "../admin/admin";
import AdminSectionComponent from "../admin-section-component/admin-section-component";
import AppHeader from "../app-header/app-header.jsx";
import MainPage from "../main-page/main-page";
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

  React.useEffect(() => {
    if (window.location.pathname.match(/\/admin/i)) setState({...state, isAdminPage: true});
    else setState({...state, isAdminPage: false});
  }, []);

  return (
    
    <Router>
      {!state.isAdminPage && (<AppHeader />)}
      {state.isAdminPage && isLogined && <header><h1>Панель управления</h1></header>}
      <main>
        <Routes>
          <Route exact path='/' element={<MainPage/>} />
          <Route exact path='/art' element={<ArtSection/>} />
          <Route path={`/art/:projectId`} element={<Project/>} />
          <Route exact path='/photo' element={<ArtSection/>} />
          <Route path={`/photo/:projectId`} element={<Project/>} />
          <Route exact path='/illustration' element={<ArtSection/>} />
          <Route exact path='/design' element={<ArtSection/>} />
          <Route path={`/:section/:projectId`} element={<Project/>} />
          <Route exact path='/admin' element={<AdminComponent isLoggedIn={isLogined} loginFlagSetter={setIsLogined}/>} />
          <Route path='/admin/dashboard' element={<ProtectedRoute isLogined={isLogined} />} >
            <Route path={`:section`} element= {<AdminSectionComponent />} >
              <Route path={`upload`} element={<UploadProjectComponent />} />
              <Route path={`:project`} element={<EditProjectPage />} />
            </Route>
          </Route>
        </Routes>
      </main>
      <AppFooter />
    </Router>
  );
}

export default App;
