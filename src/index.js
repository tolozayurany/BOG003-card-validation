import validator from './validator.js';

let btnValidationPage = document.getElementById('btn-validate-page');
btnValidationPage.addEventListener('click', () => {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('validationPage').style.display = 'block';
}, false);

/* Mostrar en el texto el número ingresado en el input */
document.getElementById('input-number').addEventListener('blur', () => {
    const cardNumber = document.getElementById('input-number').value;
    document.getElementById('card-number').textContent = cardNumber;
});

/* Click para cambiar de pantalla y mostrar si es válida o no la tarjeta */
document.getElementById('validate').addEventListener('click', () => {
    const cardNumber = document.getElementById('input-number').value;
    const sumCard = cardNumber.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
    /* Comprobar si el campo está vacío y es diferente a 0 */
    if ((cardNumber.length == 0 || /^\s+$/.test(cardNumber) || sumCard == 0)) {
        document.getElementById('input-number').style.borderColor = '#c93c3ce1';
        document.getElementById('input-number').placeholder = 'Ingresa un número válido';
        return false;
    }
    else {
        document.getElementById('validationPage').style.display = 'none';
        document.getElementById('resultValidatePage').style.display = 'block';
        document.getElementById('card-number-result').textContent = cardNumber;
        validateCard();
    }
});

/* Click para regresar a la pantalla de ingreso de datos */
document.getElementById('validate-other').addEventListener('click', () => {
    document.getElementById('resultValidatePage').style.display = 'none'
    document.getElementById('validationPage').style.display = 'block';
    document.getElementById('card-number').textContent = '•••• •••• •••• ••••';
    document.getElementById('input-number').value = ' ';
    document.getElementById('input-number').placeholder = 'Escribe aquí tu número de tarjeta';
    document.getElementById('input-number').style.borderColor = 'gray';
});

/* Función del botón para mostrar si la tarjeta es válida o no */
const validateCard = () => {
    const cardNumber = document.getElementById('input-number').value;
    maskifyNumber(cardNumber); // Llamamos la función que muestra el número de tarjeta oculto
    const validation = validator.isValid(cardNumber); // Se trae el objeto validator y isValid para que tome el algoritmo Luhn
    if (validation) {
        return document.getElementById('msj-validate').textContent = 'VÁLIDA';
    }
    else return document.getElementById('msj-validate').textContent = 'NO VÁLIDA';
}

/* Función que trae el valor ingresado mostrando solo los últimos 4 digitos */
const maskifyNumber = (creditCardNumber) => {
    /* imprime el valor del input en el h3 card-number-result */
    document.getElementById('card-number-result').textContent = validator.maskify(creditCardNumber);
}

/* Función para que la opción INICIO en el menú envíe a la página de inicio */
let menuStart = document.getElementById('linkStart');
menuStart.addEventListener('click', () => {
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('validationPage').style.display = 'none';
    document.getElementById('resultValidatePage').style.display = 'none';
    document.getElementById('card-number').textContent = '•••• •••• •••• ••••';
    document.getElementById('input-number').value = ' ';
}
);




