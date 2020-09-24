$(document).ready(function() {


    var botonmecanicas = document.querySelector('#cerraduras-mecanicas');

    botonmecanicas.addEventListener('click', function() {
        location.href = "html/Cerraduras-mecanicas.html";
    });

    var botonelectronicas = document.querySelector('#cerraduras-electronicas');

    botonelectronicas.addEventListener('click', function() {
        location.href = "html/Cerraduras-electronicas.html";
    });

    var vermasserviciosbancarios = document.querySelector('#ver-mas-servicio-bancario');

    vermasserviciosbancarios.addEventListener('click', function() {
        location.href = "html/Servicio-bancario.html";
    });


    var vermaslineabancaria = document.querySelector('#linea-bancario-boton');

    vermaslineabancaria.addEventListener('click', function() {
        location.href = "html/Linea-bancaria.html";
    });

}); //Cuando el documento este listo