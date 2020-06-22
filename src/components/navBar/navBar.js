let enlaces = ['Inicio', 'Nosotros', 'Blog', 'Tienda', 'Contacto'];
let navBar__enlaces = document.querySelector('.navBar__enlaces');
let navBar__burguer = document.querySelector('.navBar__burguer');

navBar__burguer.addEventListener('click', hideShow);


function hideShow() {
	if (navBar__enlaces.classList.contains('mostrar')) {
		navBar__enlaces.classList.remove('mostrar');
	} else {
		navBar__enlaces.classList.add('mostrar');	
	}
}

for (let i = 0; i < enlaces.length; i++){
	navBar__enlaces.innerHTML += (
		`<a href="/" class="navBar__enlace">${enlaces[i]}</a>`);
}
