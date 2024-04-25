document.getElementById("clientForm").addEventListener("submit", function(event) {
    event.preventDefault();
    guardarDatos();
});

function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    
    // Aquí puedes realizar cualquier acción con los datos ingresados, como enviarlos a un servidor

    var responseMessage = document.getElementById("responseMessage");
    responseMessage.innerText = "Datos guardados:\nNombre: " + nombre + "\nEmail: " + email + "\nTeléfono: " + telefono + "\nDirección: " + direccion + "\nFecha de Nacimiento: " + fechaNacimiento;
}
