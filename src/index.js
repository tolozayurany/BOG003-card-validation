import validator from './validator.js';

//Función para dar cambio de página del inicio a la primera página
let buttonStart = document.getElementById('buttonStart');
buttonStart.addEventListener("click", function () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("pag1").removeAttribute("hidden");
    document.getElementById("pag1").style.display = "block";

});

//Funcion para manipular el DOM en el cambio de botones - Botón de continuar

let button1 = document.getElementById('buttonContinue');
button1.addEventListener("click", function () {
    let creditCardNumber = document.getElementById("cardNumber").value;
    if (creditCardNumber.length == 0 || /^\s+$/.test(creditCardNumber)) {
        alert("No puedes ingresar un campo vacío");
        return false;
    }
    else {
        document.getElementById("pag1").style.display = "none";
        document.getElementById("pag2").removeAttribute("hidden");
        document.getElementById("pag2").style.display = "block";
    }
}
);

//Funciones para manipular el DOM en el cambio de botones - Botón de regreso a la página de ingreso de datos

let button2 = document.getElementById('buttonReturn');
button2.addEventListener("click", function () {
    document.getElementById("pag2").style.display = "none";
    document.getElementById("pag1").style.display = "block";
    //Las siguientes indicaciones borran los valores escritos anteriormente
    document.getElementById("cardNumber").value = "";
    document.getElementById("cardNumber2").value = "";
    document.getElementById("adIsValid").innerHTML = " ";

}, false);

let creditCardNumber = "";

//Función del botón para mostrar si la tarjeta es válida o no

let button3 = document.getElementById('buttonValidate'); //Se declara variable de boton Validar
button3.addEventListener("click", function () {
    let creditCardNumber = document.getElementById("cardNumber").value; //trae el valor de la variable para ejecutar el algoritmo
    maskifyNumber(creditCardNumber); //Llamamos la función que muestra el número de tarjeta oculto
    let validation = validator.isValid(creditCardNumber); //Se trae el objeto validator y isValid para que tome el algoritmo Luhn
    if (validation == true) {
        return pageConfirmation();
    }
    else return document.getElementById('adIsValid').innerHTML = '<section id ="notValid">Número de tarjeta no válido ❌ </section>';
})

//Función que trae el valor ingresado, al nuevo imput(cardNumber2) en la página de validación mostrando ultimos 4 digitos
function maskifyNumber(creditCardNumber) {
    //muestra en el imput el valor de la variable
    document.getElementById('cardNumber2').value = validator.maskify(creditCardNumber);
}

//Función que muestra página de confirmación si la tarjeta es válida
function pageConfirmation() {
    document.getElementById("pag2").style.display = "none";
    document.getElementById("cardValid").removeAttribute("hidden");
    document.getElementById("cardValid").style.display = "block";
    cardNumberValid();
}

//Función que permite visualizar el número válido de la tarjeta de crédito en la última página
function cardNumberValid() {
    let creditCardNumber = document.getElementById("cardNumber").value;
    document.getElementById('cardValidNumber').innerHTML = validator.maskify(creditCardNumber);
}

//Función para que la opción INICIO en el menú, me envíe a la página de inicio
let menuStart = document.getElementById('linkStart');
menuStart.addEventListener('click', function () {
    document.getElementById("cardValid").style.display = "none";
    document.getElementById("pag2").style.display = "none";
    document.getElementById("pag1").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    //Las siguientes indicaciones borran los valores escritos anteriormente
    document.getElementById("cardNumber").value = " ";
    document.getElementById("cardNumber2").value = " ";
    document.getElementById("adIsValid").innerHTML = " ";
}
);




