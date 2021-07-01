const validator = {

  isValid: function (creditCardNumber) {
    //Empezamos llamando el valor la variable escrita en el imput con Id numbers

    let numberSum = 0;
    let validate = false;
    //Se crea el for empezando desde el último número y continuando hacia atrás con el siguiente número hasta llegar a posición 0
    for (let i = creditCardNumber.lenght - 1; i >= 0; i--) {
            let stringDigit = creditCardNumber.charAt(i);  //Extrae el caracter en la posición n del string
            let numberDigit = parseInt(stringDigit, 10); //Se asigna el valor del número en base 10 para convertir string en número entero

      //Si la posición de este valor es par, entonces se multiplica el valor por 2

        if (validate && (numberDigit *= 2) > 9) {
          numberDigit -= 9; //Así se halla la suma de los dos digitos de cualquier numero mayor que 9
        }
      
      numberSum += numberDigit; //Sumar todos los valores de la tarjeta
      validate = !validate;
    }
    return (numberSum % 10) == 0; //Finaliza y da el valor boolean del residuo de la suma divivido en 10 igual a 0

  }

};
export default validator;
