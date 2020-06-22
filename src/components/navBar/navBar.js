let enlaces = ['Inicio', 'Contacto', 'Cursos'];
let navBar__container = document.querySelector('.navBar__container');

for (let i = 0; i < enlaces.length; i++){
	navBar__container.innerHTML += (
		`
		<a href="/" class="navBar__enlace">${enlaces[i]}</a>
		`);
}
export { enlaces };
