import './style.scss';
import './images/eye.png';
import './images/eye2.png';
import './images/tarot.png';
import './images/mudrost.png';
import './images/psychosomasys.png';
import './images/devka-bez-ruki.png';
import './images/phone.png';
import './images/lets_collaborate.svg';

//fetch('http://localhost:3000')

(function () {
    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -30);
          setTimeout(backToTop, 0);
        }
      }

    let upButton = document.querySelector('.up');

    upButton.addEventListener('click', backToTop);
})();