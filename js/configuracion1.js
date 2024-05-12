document.getElementById("botonIngresar").addEventListener("click", function() {
    let u ="Usuario1";
    let c ="123456";
    if (document.form.Usuario.value === u && document.form.contraseña.value === c) {
        window.location.href = "./internos/principal_usuarios.html";
    } else {
        alert("Usuario o contraseña incorrecta");
    }
});
