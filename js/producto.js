/**********VARIABLES *********** */

let productosAgregados = JSON.parse(localStorage.getItem('Productos'));

/**********FUNCIONES *********** */

//Funcion para imprimir productos agregados por el admin en login.html
const mostrarProductos = () => {
    let galeria = document.getElementById('productosAgregados');
    productosAgregados.forEach(producto => {
        galeria.innerHTML +=
            `
        <div class="content col-md-3 mx-5 mt-3">
        <img src="${producto.url}">
        <h3>${producto.nombre}</h3>
        <h6>${producto.precio}</h6>
        <button class="comprar">Comprar</button>
    </div>
    `
    });
}


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
    dataJSON.forEach(element => {

        let galeria = document.getElementById('productosAgregados');
        galeria.innerHTML +=
        `<div class="content col-md-3 mx-5 mt-3">
        <img src="${element.url}">
        <h3>${element.nombre}</h3>
        <h6>${element.precio}</h6>
        <button class="comprar">Comprar</button>
        </div>
    `
    });
}


/**********EVENTOS *********** */

//Evento al cargar el sitio
document.addEventListener("DOMContentLoaded", fetchData());


mostrarProductos();