let blogs = [
	{
		titulo: 'Viajar a londres',
		imagen: 'img/imagen_1.jpg',
		contenido:`Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate 
			minima itaque necessitatibus, impedit beatae esse ipsum, dolor voluptatibus 
			veniam quibusdam odio excepturi possimus amet aliquid incidunt explicabo! 
			Et, recusandae ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Ratione nobis enim repudiandae magnam et earum blanditiis, consectetur nisi 
			tempora voluptas! Et, recusandae ex! Lorem ipsum dolor sit amet consectetur 
			adipisicing elit. Ratione nobis enim repudiandae magnam et earum blanditiis, 
			consectetur nisi tempora voluptas`
	},
	{
		titulo: 'Puente de londres',
		imagen: 'img/imagen_2.jpg',
		contenido:`Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate 
			minima itaque necessitatibus, impedit beatae esse ipsum, dolor voluptatibus 
			veniam quibusdam odio excepturi possimus amet aliquid incidunt explicabo! 
			Et, recusandae ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Ratione nobis enim repudiandae magnam et earum blanditiis, consectetur nisi 
			tempora voluptas! 
			Et, recusandae ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Ratione nobis enim repudiandae magnam et earum blanditiis, consectetur nisi 
			tempora voluptas`
	},
	{
		titulo: 'Metro de londres',
		imagen: 'img/imagen_3.jpg',
		contenido:`Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate 
			minima itaque necessitatibus, impedit beatae esse ipsum, dolor voluptatibus 
			veniam quibusdam odio excepturi possimus amet aliquid incidunt explicabo! 
			Et, recusandae ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Ratione nobis enim repudiandae magnam et earum blanditiis, consectetur nisi 
			tempora voluptas! 
			Et, recusandae ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Ratione nobis enim repudiandae magnam et earum blanditiis, consectetur nisi 
			tempora voluptas`
	}
]

let blogs__container = document.querySelector('.blogs__container');

for (let i = 0; i < blogs.length; i++){
	blogs__container.innerHTML += (
		`
		<div class="blog">
			<h2 class="blog__titulo">${blogs[i].titulo}</h2>
			<img src=${blogs[i].imagen} alt="Imagen del blog" class="blog__imagen"/>
			<p class="blog__contenido"> ${blogs[i].contenido}</p>
			<a href="/" class="blog__enlace"> leer mas</a>
		</div>
		`
	)
}