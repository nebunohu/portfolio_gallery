// import { pasteHtmlTemplate } from "./adminDashboard.jsx";
import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import MainPage from '../../pages/main-page/main-page';
import ProjectsPage from '../../pages/projects-page/projects-page';
import ProjectPage from '../../pages/project-page/project-page';
import AboutPage from '../../pages/about-page/about-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import NoPageFound from '../../pages/no-page-found/no-page-found';
import AdminComponent from '../admin/admin';
import AdminSectionComponent from '../admin-section-component/admin-section-component';

import ProtectedRoute from '../protected-route/protected-route';
import UploadProjectComponent from '../upload-project-component/upload-project-component';
import EditProjectPage from '../edit-project-page/edit-project-page';

// Styles
import './style.scss';

function App() {
  const [state, setState] = useState({ isAdminPage: false });
  const [isLogined, setIsLogined] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname.match(/\/admin/i)) setState({ ...state, isAdminPage: true });
    else setState({ ...state, isAdminPage: false });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contacts" element={<ContactsPage />} />
        <Route path="/:section" element={<ProjectsPage />} />
        <Route path="/:section/:projectId" element={<ProjectPage />} />
        <Route exact path="/admin" element={<AdminComponent isLoggedIn={isLogined} loginFlagSetter={setIsLogined} />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute isLogined={isLogined} />}>
          <Route path=":section" element={<AdminSectionComponent />}>
            <Route path="upload" element={<UploadProjectComponent />} />
            <Route path=":project" element={<EditProjectPage />} />
          </Route>
        </Route>
        <Route element={<NoPageFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
