

//Ingresar usuario

let ingreso = document.getElementById("btnLogin");

//Clase de productos nuevos

class ProductoNuevo {

    constructor({
        nombre,
        url,
        marca,
        precio,
        stock,
    }) {
        this.nombre = nombre;
        this.url = url;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;

    }
}

//Array de productos agregados
let listaDeProductos = [];


//Función al ingresar
const ingresar = () => {

    let user = document.getElementById("userLogin").value;
    let pass = document.getElementById("passLogin").value;

    if (user === "uri21199" && pass === "coderhouse") {

        let deseaAgregar = confirm("¿Desea agregar productos?")

        if (deseaAgregar) {
            document.getElementById("inputs").innerHTML += `
            <form id="formProducto" class="agregarProducto">
            <input type="text" placeholder="Nombre del producto" id="nombreProducto" class="inputProducto">
            <input type="text" placeholder="URL del producto" id="urlProducto" class="inputProducto">
            <input type="text" placeholder="Marca del producto" id="marcaProducto" class="inputProducto">
            <input type="number" placeholder="Precio del producto" id="precioProducto" class="inputProducto">
            <input type="number" placeholder="Stock del producto" id="stockProducto" class="inputProducto">
            <button id="btnAgregar" class="btnProducto" data-bs-toggle="modal" data-bs-target="#modal">Agregar producto</button>
            </form>`

            //Función para crear productos nuevos en base a lo agregado anteriormente
            const crearProducto = () => {

                let productoCreado = new ProductoNuevo({
                    nombre: document.getElementById("nombreProducto").value,
                    url: document.getElementById("urlProducto").value,
                    marca: document.getElementById("marcaProducto").value,
                    precio: document.getElementById("precioProducto").value,
                    stock: document.getElementById("stockProducto").value,
                })

                listaDeProductos.push(productoCreado)
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

//Evento al ingresar
ingreso.addEventListener("click", (e) => {
    e.preventDefault()
    ingresar();
})
