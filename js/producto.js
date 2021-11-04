/**********VARIABLES *********** */

let productosAgregados = JSON.parse(localStorage.getItem('productosAgregados')) || [];

let carrito = JSON.parse(localStorage.getItem('carrito')) || {}; 


/**********FUNCIONES *********** */


//Funcion para traer los productos agregados desde el archivo JSON
const fetchData = async () => {
    try {
        let data = await fetch('./js/api.json');
        let dataJSON = await data.json();
        crear(dataJSON);
    } catch (error) {
        console.log(error);
    }
}

//Funcion para crear los productos en el archivo HTML desde el archivo JSON
const crear = dataJSON => {
    dataJSON.forEach(producto => {

        let galeria = document.getElementById('productosAgregados');

        //crear div
        let div = document.createElement('div');
        div.classList.add('content', 'col-md-3', 'mx-5', 'mt-3', 'producto');

        //crear imagen
        let img = document.createElement('img');
        img.src = producto.url;

        //crear h3
        let h3 = document.createElement('h3');
        h3.classList.add('productoNombre');
        h3.textContent = producto.nombre;

        //crear h6
        let h6 = document.createElement('h6');
        h6.classList.add('productoPrecio');
        h6.textContent = `$${producto.precio}`;

        //crear boton
        let button = document.createElement('button');
        button.classList.add('comprar');
        button.dataset.id = producto.id;
        button.textContent = 'Comprar';

        //agregar a div
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(h6);
        div.appendChild(button);

        //agregar a galeria
        galeria.appendChild(div);
    });
}


//Funcion para imprimir productos agregados por el admin en login.html
const mostrarProductos = () => {

    if (productosAgregados.length > 0) {
        productosAgregados.forEach(producto => {
            let galeria = document.getElementById('productosAgregados');

            //crear div
            let div = document.createElement('div');
            div.classList.add('content', 'col-md-3', 'mx-5', 'mt-3', 'producto');

            //crear imagen
            let img = document.createElement('img');
            img.src = producto.url;

            //crear h3
            let h3 = document.createElement('h3');
            h3.classList.add('productoNombre');
            h3.textContent = producto.nombre;

            //crear h6
            let h6 = document.createElement('h6');
            h6.classList.add('productoPrecio');
            h6.textContent = `$${producto.precio}`;

            //crear boton
            let button = document.createElement('button');
            button.classList.add('comprar');
            button.dataset.id = producto.id;
            button.textContent = 'Comprar';

            //agregar a div
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(h6);
            div.appendChild(button);

            //agregar a galeria
            galeria.appendChild(div);
        });
    } else {
        console.log('El administrador no ha agregado otros productos.');
    }


}

//Funcion para agregar al carrito
const agregarCarrito = (e) =>{
    if (e.target.classList.contains('comprar')) {
        administrarCarrito(e.target.parentElement);
    }
}

const administrarCarrito = (objeto) =>{
    const productoComprado ={
        id: objeto.querySelector('.comprar').dataset.id,
        nombre: objeto.querySelector('h3').textContent,
        precio: parseInt(objeto.querySelector('h6').textContent.replace('$', '')),
        url: objeto.querySelector('img').src,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(productoComprado.id)){
        productoComprado.cantidad = carrito[productoComprado.id].cantidad + 1;
    }

    carrito[productoComprado.id] = {...productoComprado};

    localStorage.setItem('carrito', JSON.stringify(carrito));
    

}



/**********EVENTOS *********** */

//Evento al cargar el sitio
document.addEventListener("DOMContentLoaded", fetchData());

//Evento para agregar al carrito
document.addEventListener("click", agregarCarrito);

mostrarProductos();