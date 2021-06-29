import validator from './validator.js';    

console.log(validator);

//Funciones para manipular el DOM en el cambio de botones - Botón de continuar 
document.addEventListener("DOMContentLoaded", function () {
    var boton1 = document.getElementById('buttonContinue');
            boton1.onclick = function(){
    document.getElementById("pag1").style.display = "none";
    document.getElementById("pag2").removeAttribute("hidden");
    document.getElementById("pag2").style.display = "block";
    }
}, false);

//Funciones para manipular el DOM en el cambio de botones - Botón de regreso a la primera página
document.addEventListener("DOMContentLoaded", function() {
    var boton2 = document.getElementById('buttonReturn');
            boton2.onclick = function(){
    document.getElementById("pag2").style.display = "none";
    document.getElementById("pag1").style.display = "block";
    }
}, false);



//Funcion para crear input en la primera página, de tipo numérico para ingresar solo números
//Revisar si necesito esta función porque no se, creo que ya tengo el imput en html 

function createInput (){
    var padre = document.getElementById("card");
    var input = document.createElement("INPUT");
    padre.appendChild(input);
}


