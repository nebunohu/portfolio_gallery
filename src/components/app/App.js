//import { pasteHtmlTemplate } from "./adminDashboard.jsx";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  //Link
} from "react-router-dom";

// Components
import AdminComponent from "../admin/admin";
import AdminDashboardWrapper from "../admin-dashboard-wrapper/admin-dashboard-wrapper";
import AppHeader from "../app-header/app-header.jsx";
import MainPage from "../main-page/main-page";
import AppFooter from "../app-footer/app-footer.jsx";
import ArtSection from "../art-section/art-section";
import Project from "../project/project";

// Styles
import './style.scss';

function App() {
  const [state, setState] = React.useState({isAdminPage: false});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname.match(/\/admin/i)) setState({...state, isAdminPage: true});
    else setState({...state, isAdminPage: false});
  }, []);



  return (
    
    <Router>
      {!state.isAdminPage && (<AppHeader />)}
      {state.isAdminPage && isLoggedIn && <header><h1>Панель управления</h1></header>}
      <main>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/art' component={ArtSection} />
          <Route path={`/art/:projectId`} component={Project} />
          <Route exact path='/photo' component={ArtSection} />
          <Route path={`/photo/:projectId`} component={Project} />
          <Route exact path='/illustration' component={ArtSection} />
          <Route path={`/illustration/:projectId`} component={Project} />
          <Route exact path='/design' component={ArtSection} />
          <Route path={`/design/:projectId`} component={Project} />
          <Route exact path='/admin'>
            {isLoggedIn ? <Redirect to='/admin/dashboard' /> : <AdminComponent isLoggedIn={isLoggedIn} loginFlagSetter={setIsLoggedIn}/>}
          </Route>
          <Route path='/admin/dashboard'>
            {!isLoggedIn && (<h1>Please login!</h1>)}
            {isLoggedIn && <AdminDashboardWrapper />}
          </Route>
          
        </Switch>
      </main>
      <AppFooter />
    </Router>
  );
}

export default App;
