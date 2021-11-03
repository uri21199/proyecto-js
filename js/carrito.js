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
        <td class="cantidad">${producto.cantidad}</td>
        <td>$${producto.precio}</td>
        <td>$${producto.cantidad * producto.precio} (${producto.cantidad })</td>
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
        <td><button class="btn-danger vaciar">Vaciar carrito</button></td>
        <td><button class ="btn-primary completar">Completar compra</button></td>
        <td>Total: $${total}</td>`;

        document.querySelector('.vaciar').addEventListener('click', () =>{
            localStorage.removeItem('carrito');
            location.reload();
        })

        document.querySelector('.completar').addEventListener('click', () =>{
            localStorage.removeItem('carrito');
            location.reload();
        })
    };
}


/**********EVENTOS *********** */

document.addEventListener('DOMContentLoaded', pintarCarrito);