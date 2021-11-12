//import { pasteHtmlTemplate } from "./adminDashboard.jsx";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import AdminComponent from "../admin/admin";
import AppHeader from "../app-header/app-header.jsx";
import MainPage from "../main-page/main-page";
import AppFooter from "../app-footer/app-footer.jsx";
import ArtSection from "../art-section/art-section";

// Styles
import './style.scss';

function App() {
  const [state, setState] = React.useState({isAdminPage: false})

  React.useEffect(() => {
    if (window.location.pathname === "/admin") setState({...state, isAdminPage: true});
    else setState({...state, isAdminPage: false});
  }, []);

  return (
    
    <Router>
      {!state.isAdminPage && (<AppHeader />)}
      <main>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/art' component={ArtSection} />
          <Route path='/admin' component={AdminComponent} />
        </Switch>
      </main>
      <AppFooter />
    </Router>
  );
}

export default App;
