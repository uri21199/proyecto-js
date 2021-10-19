
let ingreso = document.getElementById("btnLogin");

ingreso.addEventListener("click", (e) => {
    e.preventDefault()
    ingresar();
})

const ingresar = () => {
    
    let user = document.getElementById("userLogin").value;
    let pass = document.getElementById("passLogin").value;

    if (user === "uri21199" && pass === "coderhouse"){
        let deseaAgregar = confirm("¿Desea agregar productos?")
        if (deseaAgregar){
            document.getElementById("inputs").innerHTML += `
            <form id="formProducto" class="agregarProducto">
            <input type="text" placeholder="Nombre del producto" id="nombreProducto" class="inputProducto">
            <input type="text" placeholder="URL del producto" id="urlProducto" class="inputProducto">
            <input type="text" placeholder="Marca del producto" id="marcaProducto" class="inputProducto">
            <input type="number" placeholder="Precio del producto" id="precioProducto" class="inputProducto">
            <input type="number" placeholder="Stock del producto" id="stockProducto" class="inputProducto">
            <button id="btnAgregar" class="btnProducto">Agregar producto</button>
            </form>`
        }
    }
}

