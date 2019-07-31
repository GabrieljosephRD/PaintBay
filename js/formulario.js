$(document).ready(function(){
    
    var inputs = document.getElementsByClassName("frmInput"); // declaracion de variables
        for (var i = 0; i < inputs.length; i++){
            inputs[i].addEventListener("keyup", function(){ // animacion de la letra
                if(this.value.length>=1){
                    this.nextElementSibling.classList.add("fijar");
                }
                else{
                    this.nextElementSibling.classList.remove("fijar");
                }
            })
        }
});

function validarF(){ // apuntar a cada casilla del formulario
    if(document.getElementsByClassName("frmInput").txtNombre.value.length==0) // nombre
    {
        document.getElementsByClassName("frmInput").txtNombre.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtApellido.value.length==0) // apellido
    {
        document.getElementsByClassName("frmInput").txtApellido.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtCorreo.value.length==0)// correo
    {
        document.getElementsByClassName("frmInput").txtCorreo.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtContraseña.value.length==0)// contraseña
    {
        document.getElementsByClassName("frmInput").txtContraseña.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtCiudad.value.length==0)// ciudad
    {
        document.getElementsByClassName("frmInput").txtCiudad.focus()
        return false
    }
}

function validarF(){ // apuntar a cada casilla del formulario
    if(document.getElementsByClassName("frmInput").txtCiudad.value.length==0)// ciudad
    {
        document.getElementsByClassName("frmInput").txtCiudad.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtEstado.value.length==0)// estado
    {
        document.getElementsByClassName("frmInput").txtEstado.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtCdgPostal.value.length==0)// codigo postal
    {
        document.getElementsByClassName("frmInput").txtCdgPostal.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtCorreo.value.length==0)// correo
    {
        document.getElementsByClassName("frmInput").txtCorreo.focus()
        return false
    }
    if(document.getElementsByClassName("frmInput").txtTelefono.value.length==0)// telefono
    {
        document.getElementsByClassName("frmInput").txtTelefono.focus()
        return false
    }
}