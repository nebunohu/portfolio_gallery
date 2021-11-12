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
  }, [])

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
//import { AdminDashboard } from "./adminDashboard.jsx";

//export let APP = {} || APP;

/*APP.start = function () {
  let upButton = document.querySelector(".up") || null;  

  if (window.location.pathname === "/") {
    APP.render();
    //upButton.addEventListener("click", APP.backToTop);
  } else if (window.location.pathname === "/admin/admin.html") {
    ReactDOM.render(<AdminComponent />, document.querySelector('#root'));
    let loginForm = document.querySelector(".login-form-wrapper") || null;
    loginForm.addEventListener("submit", APP.loginHandler);
  }
};

APP.backToTop = function () {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(APP.backToTop, 0);
  }
};*/

/*APP.loginHandler = async function (event) {
  event.preventDefault();
  const login = this[0].value;
  const password = this[1].value;

  try {
    
    let body = { login: login, password: password };
    body = JSON.stringify(body);
    let headers = new Headers({ "content-type": "application/json" });
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body,
      mode: "cors",
      headers,
    });
    if (!response.ok) {
      throw new Error("Ответ сети был не ок.");
    } else {
      pasteHtmlTemplate();*/
      // Получение изображения с сервера по адресу http://localhost:3000/static/img.jpg
      /*body = { info: "image" };
      const getMethodResponse = await fetch(
        "http://localhost:3000/static/img.jpg",
        { method: "GET", mode: "cors", headers }
      )
        .then((getMethodResponse) => getMethodResponse.blob())
        .then(function (myBlob) {
          let objectURL = URL.createObjectURL(myBlob);
          let myImage = document.querySelector("img");
          myImage.src = objectURL;
        });
      if (!getMethodResponse.ok) {
        throw new Error("Ответ сети был не ок.");
      }*/
/*    }
    
  } catch (error) {
    console.log("Возникла проблема с вашим fetch запросом: ", error.message);
  }
};*/


