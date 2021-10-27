/**********VARIABLES *********** */

//Array de usuarios
let usuariosRegistrados = [];


//Clase de usuarios
class Usuarios {

    constructor({
        nombre,
        mail,
        contra,
    }) {
        this.nombre = nombre;
        this.mail = mail;
        this.contra = contra;
    }
}

/**********FUNCIONES *********** */


//Función para verificar si el usuario existe
const verificarUsuario = () => {
    let usuarioIngresado = document.getElementById("mailUser").value;
    let usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.mail == usuarioIngresado)
    if (usuarioEncontrado != undefined){
        alert("El correo electrónico ya se encuentra registrado.");
    } else {
        crearUsuario();
        console.log(usuariosRegistrados);
    }
}

//Función para crear un usuario nuevo y guardarlo
const crearUsuario = () => {
    
    let usuarioNuevo = new Usuarios ({
        nombre: document.getElementById("nombreUser").value,
        mail: document.getElementById("mailUser").value,
        contra: document.getElementById("contraUser").value,
    })

    let confirmarRegistro = confirm("¿Los datos ingresados son correctos?")

    if (confirmarRegistro){
        usuariosRegistrados.push(usuarioNuevo)
        localStorage.setItem("lista de Usuarios", JSON.stringify(usuariosRegistrados))
    } 

}

//Función para verificar los usuarios ya registrados y seguir trabajando en el mismo array
const verificarStorage = () => {
    let usuariosGuardados = JSON.parse(localStorage.getItem("lista de Usuarios"))
    if (usuariosGuardados != null){
        usuariosRegistrados = usuariosGuardados
    } 
}


/**********EVENTOS *********** */

//Evento en el botón de registrarse
document.getElementById("registrar").addEventListener("click", (e) =>{
    e.preventDefault();
    verificarUsuario();
})


verificarStorage();
