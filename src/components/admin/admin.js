import React from "react";

function LoginForm(props) {
  const loginHandler = async function (event) {
    event.preventDefault();
    const login = event.target[0].value;
    const password = event.target[1].value;
  
    try {
      
      let body = { login: login, password: password };
      body = JSON.stringify(body);
      let headers = new Headers({ "content-type": "application/json" });
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        body,
        mode: "cors",
        headers,
      });
      if (!response.ok) {
        throw new Error("Ответ сети был не ок.");
      } else {
        props.loginFlagSetter(true);
        //pasteHtmlTemplate();
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
      }
      
    } catch (error) {
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  };
  
  return (
    <div>
      <form className="login-form-wrapper" onSubmit={loginHandler}>
        <label className="login-form-wrapper__login-label" htmlFor="login" />Login
        <input className="login-form-wrapper__input" type="text" id="login" name="login" placeholder="Login" />
        <label className="login-form-wrapper__login-label" htmlFor="password" />Password
        <input className="login-form-wrapper__input"type="password" id="password" name="password" placeholder="Password" />
        <input className="login-form-wrapper__submit-button" type="submit" value="Sign in" />
      </form>
    </div>
  );
  
}

class AdminComponent extends React.Component {
  render() {
    return (
      <LoginForm loginFlagSetter={this.props.loginFlagSetter} />
    );
  }
};

export default AdminComponent;
//export default AdminDashboard;