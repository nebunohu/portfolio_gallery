import './style.scss';
import './images/eye.png';
import './images/eye2.png';
import './images/tarot.png';
import './images/mudrost.png';
import './images/psychosomasys.png';
import './images/devka-bez-ruki.png';
import './images/phone.png';
import './images/lets_collaborate.svg';


(function () {
    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -30);
          setTimeout(backToTop, 0);
        }
      }

      /*async*/ function loginHandler(event) {
        const login = this[0].value;
        const password = this[1].value;

      event.preventDefault();
      //fetch('http://localhost:3000',{method: 'GET', mode: 'no-cors'});
      try {
        const response = /*await*/ fetch('http://localhost:3000/auth/login', {method: 'POST', body: {login: login, password: password}});
        console.log('Login: '+login+', password: '+password);
        if ( !response.ok ) {
          throw new Error ('Ответ сети был не ок.');
        } 
      } catch (error) {
        console.log( 'Возникла проблема с вашим fetch запросом: ', error.message);
      }
    }

    let upButton = document.querySelector('.up') ? document.querySelector('.up') : null;
    let submitButton = document.querySelector('.login-form-wrapper__submit-button') ? document.querySelector('.login-form-wrapper__submit-button') : null;
    let loginForm = document.querySelector('.login-form-wrapper') ? document.querySelector('.login-form-wrapper') : null;

    if ( upButton ) 
      upButton.addEventListener('click', backToTop);

    /*if ( submitButton ) {
      submitButton.addEventListener('click', loginHandler);
    }*/

    if ( loginForm ) {
      loginForm.addEventListener('submit', loginHandler);
    }
})();