import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function LoginForm(props) {
  const navigate = useNavigate();
  const loginHandler = async function (event) {
    event.preventDefault();
    const login = event.target[0].value;
    const password = event.target[1].value;

    try {
      let body = { email: login, password, returnSecureToken: true };
      body = JSON.stringify(body);
      const headers = new Headers({ 'content-type': 'application/json' });
      const apiKey = 'AIzaSyCE57uRhFTLICxSFJbxaE3XTdZadaXvcm8';
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body,
        headers,
      });
      if (!response.ok) {
        throw new Error('Ответ сети был не ок.');
      } else {
        props.loginFlagSetter(true);
        const data = await response.json();
        localStorage.setItem('token', data.idToken);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
  };

  return (
    <div>
      <form className="login-form-wrapper" onSubmit={loginHandler}>
        <label className="login-form-wrapper__login-label" htmlFor="login" />
        Login
        <input className="login-form-wrapper__input" type="text" id="login" name="login" placeholder="Login" />
        <label className="login-form-wrapper__login-label" htmlFor="password" />
        Password
        <input className="login-form-wrapper__input" type="password" id="password" name="password" placeholder="Password" />
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
}

export default AdminComponent;
// export default AdminDashboard;
