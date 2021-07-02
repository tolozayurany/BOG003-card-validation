import validator from './validator.js';

//Funcion para manipular el DOM en el cambio de botones - Botón de continuar

document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById('buttonContinue');

    button1.onclick = function showPage() {
        document.getElementById("pag1").style.display = "none";
        document.getElementById("pag2").removeAttribute("hidden");
        document.getElementById("pag2").style.display = "block";
    }

}, false);

/* FUNCION QUE NO PERMITE INGRESAR CAMPO VACÍO- FALTA HACER QUE LA EJECUTE PRIMERO QUE CAMBIAR DE PÁGINA
function isNumber (creditCardNumber){
    let creditCardNumber = document.getElementById("numbers").value;
    if (creditCardNumber = " "){
        document.getElementById("alert").innerHTML = "No puedes ingresar un campo vacío";        
   }
   else showPage();
}
*/

//Funciones para manipular el DOM en el cambio de botones - Botón de regreso a la primera página
document.addEventListener("DOMContentLoaded", function () {
    let button2 = document.getElementById('buttonReturn');
    button2.onclick = function () {
        document.getElementById("pag2").style.display = "none";
        document.getElementById("pag1").style.display = "block";
       
    }
}, false);


//Asignar el valor global de la variable
let creditCardNumber = "";

//Función para mostrar si la tarjeta es válida o no
let button3 = document.getElementById('buttonValidate'); //Se declara variable de boton
button3.addEventListener("click", function () {
    let validation = validator.isValid(getValue());
    
    console.log("creditCardNumber", creditCardNumber);
    if (validation == true) {

        return document.getElementById('adIsValid').innerHTML = '<section id ="isValid" >Número de tarjeta correcto</section>';
    }
    else return document.getElementById('adIsValid').innerHTML = '<section id ="notValid">Número de tarjeta incorrecto</section>';
})

 //Función que trae el valor ingresado al nuevo imput(cardNumber2) en la página de validación
function getValue(){
    document.getElementById("cardNumber2").value = document.getElementById("cardNumber").value;
    let creditCardNumber = document.getElementById("cardNumber").value; 
    console.log (creditCardNumber)
    return creditCardNumber;
}
