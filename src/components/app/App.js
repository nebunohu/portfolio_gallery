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
import Intro from "../intro/intro.jsx";
import Sections from "../sections/sections.jsx";
import Cv from "../cv/cv.jsx";
import Info from "../info/info.jsx";
import Up from "../up/up.jsx";
import AppFooter from "../app-footer/app-footer.jsx";

import './style.scss';
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

function App() {
  

  return (
    
    <Router>
      <div>
      <AppHeader />
      <main>
        <Switch>
          <Route exact path='/'>
            <Intro />
            <Sections />
            <Cv />
            <Info />
            <Up />
          </Route>
          <Route path='/admin'>
            <AdminComponent />
          </Route>
        </Switch>
        
        
      </main>
      <AppFooter />
      </div>
    </Router>
  );
}

export default App;
