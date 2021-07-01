import validator from './validator.js';

//Funciones para manipular el DOM en el cambio de botones - Botón de continuar 

document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById('buttonContinue');
    button1.onclick = function () {
        document.getElementById("pag1").style.display = "none";
        document.getElementById("pag2").removeAttribute("hidden");
        document.getElementById("pag2").style.display = "block";
    }
}, false);

//Funciones para manipular el DOM en el cambio de botones - Botón de regreso a la primera página
document.addEventListener("DOMContentLoaded", function () {
    let button2 = document.getElementById('buttonReturn');
    button2.onclick = function () {
        document.getElementById("pag2").style.display = "none";
        document.getElementById("pag1").style.display = "block";
    }
}, false);

//Funcion para crear input en la primera página, de tipo numérico para ingresar solo números
//Revisar si necesito esta función porque no se, creo que ya tengo el imput en html 

function createInput() {
    var padre = document.getElementById("card");
    var input = document.createElement("INPUT");
    padre.appendChild(input);
    (createInput)
};

//función para llamar la variable de los números creada en el imput
let creditCardNumber = document.getElementById("numbers").value;
creditCardNumber;

//Función para mostrar si la tarjeta es válida o no
//Primero llamamos el evento del botón para que cuando se oprima el botón se ejecute la función
 
document.addEventListener("click", function () {
    let button3 = document.getElementById('buttonValidate'); //Nos llama el botón 
    button3.onclick = function () {

        let validation = validator.isValid(creditCardNumber);
        if (validation == true) {
            return document.getElementById('adIsValid').innerHTML = '<section id ="isValid" >Número de tarjeta correcto</section>';
        }
        else return document.getElementById('adIsValid').innerHTML = '<section id ="notValid">Número de tarjeta incorrecto</section>';
    }
}
    , false);