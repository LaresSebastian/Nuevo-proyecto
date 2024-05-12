function entrar() {
    var u ="Usuario1";
    var c ="123456";
    if (document.form.Usuario.value == u && document.form.contraseña.value == c){
        window.location.href = "./internos/principal_usuarios.html";
    } else {
        alert("Usuario o contraseña incorrecta");
    }
}