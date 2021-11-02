/**********CLASES *********** */

//Clase de productos agregados

class ProductoNuevo {

    constructor({
        nombre,
        url,
        id,
        precio,
        stock,
    }) {
        this.nombre = nombre;
        this.url = url;
        this.id = id;
        this.precio = precio;
        this.stock = stock;

    }
}


/**********VARIABLES *********** */

//Ingresar usuario

let ingreso = document.getElementById("btnLogin");

//Array de productos agregados
let listaDeProductos = [];


/**********FUNCIONES *********** */

//Función al ingresar
const ingresar = () => {

    let usuarioLogueado = document.getElementById("usuarioLogueado").value;
    let contraLogueada = document.getElementById("contraLogueada").value;

    if (usuarioLogueado === "uri21199" && contraLogueada === "coderhouse") {

        let deseaAgregar = confirm("¿Desea agregar productos?")

        if (deseaAgregar) {

            document.getElementById("inputs").innerHTML += `
            <form id="formProducto" class="agregarProducto">
            <input type="text" placeholder="Nombre del producto" id="nombreProducto" class="inputProducto">
            <input type="text" placeholder="URL del producto" id="urlProducto" class="inputProducto">
            <input type="text" placeholder="id del producto" id="idProducto" class="inputProducto">
            <input type="number" placeholder="Precio del producto" id="precioProducto" class="inputProducto">
            <input type="number" placeholder="Stock del producto" id="stockProducto" class="inputProducto">
            <button id="btnAgregar" class="btnProducto">Agregar producto</button>
            </form>`

            //Función para crear productos nuevos en base a lo agregado anteriormente
            const crearProducto = () => {
                
                let productoCreado = new ProductoNuevo({
                    nombre: document.getElementById("nombreProducto").value,
                    url: document.getElementById("urlProducto").value,
                    id: document.getElementById("idProducto").value,
                    precio: document.getElementById("precioProducto").value,
                    stock: document.getElementById("stockProducto").value,
                })

                if (verificarProducto(productoCreado.nombre, productoCreado.id) === undefined) {
                    listaDeProductos.push(productoCreado)
                    alert("Producto agregado")
                } else {
                    alert("Producto ya existente")
                }

                localStorage.setItem("Productos", JSON.stringify(listaDeProductos))
            }
            

            let botonDeAgregar = document.getElementById("btnAgregar");

            //Evento para agregar el producto en base al botón que se agrego a traves de innerHTML
            botonDeAgregar.addEventListener("click", (e) => {
                e.preventDefault();
                crearProducto();
            })



        }
    } else {
        alert("Bienvenido a la tienda.")
    }

}

//Funcion para verificar deposito
const verificarDeposito = () => {
    if (localStorage.getItem("Productos") === null) {
        localStorage.setItem("Productos", JSON.stringify(listaDeProductos))
    } else {
        listaDeProductos = JSON.parse(localStorage.getItem("Productos"))
    }  
}

//Funcion para verificar si ya existe el producto
const verificarProducto = (nombre, id) => {
    let producto = listaDeProductos.find(producto => producto.nombre === nombre && producto.id === id)
    return producto
}


/**********EVENTOS *********** */

//Evento al ingresar
ingreso.addEventListener("click", (e) => {
    e.preventDefault();
    ingresar();
})

verificarDeposito();