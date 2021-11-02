/**********VARIABLES *********** */

let carrito = JSON.parse(localStorage.getItem('carrito')) || {};


/**********FUNCIONES *********** */

const pintarCarrito = () => {
    console.log(carrito);

    Object.values(carrito).forEach(producto => {

        let tabla = document.getElementById('tabla');

        tabla.innerHTML += `
        <tr class="${producto.id}">
        <td class="productoInfo">
        <img src="${producto.url}" alt="${producto.nombre}">
        ${producto.nombre}
        </td>
        <td class="cantidad">
        <button class="menos btn-danger">-</button>
        ${producto.cantidad}
        <button class="mas btn-primary">+</button>
        </td>
        <td>$${producto.precio}</td>
        <td>$${producto.cantidad * producto.precio}</td>
    </tr> 
        `
    });

    cambiarPie();
}

//Funcion para cambiar el pie de la tabla

const cambiarPie = () => {
    let total = 0;
    let pie = document.querySelector('tfoot');

    Object.values(carrito).forEach(producto => {
        total += producto.cantidad * producto.precio;
    });

    if (Object.keys(carrito).length === 0) {
        pie.textContent = "No hay productos en el carrito";
    } else {
        pie.innerHTML += `                
        <td>Compra final</td>
        <td><button class="btn-danger">Vaciar carrito</button></td>
        <td><button class ="btn-primary">Completar compra</button></td>
        <td>Total: $${total}</td>`;
    };
}

/**********EVENTOS *********** */

document.addEventListener('DOMContentLoaded', pintarCarrito);