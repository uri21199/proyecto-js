/**********CLASES *********** */

//Clase de productos agregados

class ProductoNuevo {

    constructor({
        nombre,
        url,
        id,
        precio,
    }) {
        this.nombre = nombre;
        this.url = url;
        this.id = id;
        this.precio = precio;

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

            let inputs = document.getElementById("inputs");

            //crear formulario
            let formulario = document.createElement("form");
            formulario.setAttribute("id", "formulario");
            formulario.classList.add("agregarProducto");

            //crear input nombre
            let inputNombre = document.createElement("input");
            inputNombre.setAttribute("type", "text");
            inputNombre.setAttribute("id", "nombreProducto");
            inputNombre.setAttribute("placeholder", "Nombre del producto");
            inputNombre.classList.add("inputProducto");

            //crear input url
            let inputUrl = document.createElement("input");
            inputUrl.setAttribute("type", "text");
            inputUrl.setAttribute("id", "urlProducto");
            inputUrl.setAttribute("placeholder", "URL del producto");
            inputUrl.classList.add("inputProducto");

            //crear input id
            let inputId = document.createElement("input");
            inputId.setAttribute("type", "text");
            inputId.setAttribute("id", "idProducto");
            inputId.setAttribute("placeholder", "ID del producto");
            inputId.classList.add("inputProducto");

            //crear input precio
            let inputPrecio = document.createElement("input");
            inputPrecio.setAttribute("type", "number");
            inputPrecio.setAttribute("id", "precioProducto");
            inputPrecio.setAttribute("placeholder", "Precio del producto");
            inputPrecio.classList.add("inputProducto");

            //crear boton
            let boton = document.createElement("button");
            boton.setAttribute("id", "btnAgregar");
            boton.classList.add("btnAgregar");
            boton.textContent = "Agregar producto";

            //agregar elementos al formulario
            formulario.appendChild(inputNombre);
            formulario.appendChild(inputUrl);
            formulario.appendChild(inputId);
            formulario.appendChild(inputPrecio);
            formulario.appendChild(boton);

            //agregar formulario al div
            inputs.appendChild(formulario);

            //Función para crear productos nuevos en base a lo agregado anteriormente
            const crearProducto = () => {

                let productoCreado = new ProductoNuevo({
                    nombre: document.getElementById("nombreProducto").value,
                    url: document.getElementById("urlProducto").value,
                    id: document.getElementById("idProducto").value,
                    precio: document.getElementById("precioProducto").value,
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