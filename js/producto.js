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

        galeria.innerHTML +=
            `<div class="content col-md-3 mx-5 mt-3">
        <img src="${producto.url}">
        <h3 id="${producto.nombre}">${producto.nombre}</h3>
        <h6 id= "${producto.precio}">${producto.precio}</h6>
        <p>Stock disponible:${producto.stock}</p>
        <button class="comprar" data-id="${producto.id}">Comprar</button>
        </div>
    `
    });
}


//Funcion para imprimir productos agregados por el admin en login.html
const mostrarProductos = () => {

    if (productosAgregados.length > 0) {
        productosAgregados.forEach(producto => {
            let galeria = document.getElementById('productosAgregados');
            galeria.innerHTML +=
            `<div class="content col-md-3 mx-5 mt-3">
            <img src="${producto.url}">
            <h3 id="${producto.nombre}">${producto.nombre}</h3>
            <h6 id= "${producto.precio}">${producto.precio}</h6>
            <p>Stock disponible:${producto.stock}</p>
            <button class="comprar" data-id="${producto.id}">Comprar</button>
            </div>`

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
        precio: objeto.querySelector('h6').textContent,
        stock: objeto.querySelector('p').textContent,
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