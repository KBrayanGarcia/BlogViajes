import { enlaces } from '../navBar/navBar';
let footer__nav = document.querySelector('.footer-seccion-1__nav');

for (let i = 0; i < enlaces.length; i++) {
	footer__nav.innerHTML += (`<a href="/" class="footer-seccion-1__enlace" > ${enlaces[i]}</a>`)
}