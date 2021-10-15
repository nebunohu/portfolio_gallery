import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form className="login-form-wrapper">
          <label className="login-form-wrapper__login-label" htmlFor="login" />Login
          <input className="login-form-wrapper__input" type="text" id="login" name="login" placeholder="Login" />
          <label className="login-form-wrapper__login-label" htmlFor="password" />Password
          <input className="login-form-wrapper__input"type="password" id="password" name="password" placeholder="Password" />
          <input className="login-form-wrapper__submit-button" type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

class AdminComponent extends Component {
  render() {
    return (
      <LoginForm />
    );
  }
};



export default AdminComponent;
//export default AdminDashboard;