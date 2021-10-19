
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

let usuariosRegistrados = [];

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

document.getElementById("registrar").addEventListener("click", (e) =>{
    console.log(usuariosRegistrados)
    e.preventDefault();
    crearUsuario();
})