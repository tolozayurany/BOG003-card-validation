const validator = {

  isValid: function (creditCardNumber) {
    //Empezamos llamando el valor la variable escrita en el imput con Id numbers

    let numberSum = 0;
    let validate = false;
    //Se crea el for empezando desde el último número y continuando hacia atrás con el siguiente número hasta llegar a posición 0
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let stringDigit = creditCardNumber.charAt(i);  //Extrae el caracter en la posición n del string
      let numberDigit = parseInt(stringDigit, 10); //Se asigna el valor del número en base 10 para convertir string en número entero

      //Si la posición de este valor es par, entonces se multiplica el valor por 2

      if (validate && (numberDigit *= 2) > 9) {
        numberDigit -= 9; //Así se halla la suma de los dos digitos de cualquier numero mayor que 9
      }

      numberSum += numberDigit; //Sumar todos los valores de la tarjeta
      validate = !validate;
    }
    console.log(numberSum % 10);
    return (numberSum % 10) == 0; //Finaliza y da el valor boolean del residuo de la suma divivido en 10 igual a 0

  },

  maskify: function (creditCardNumber) {
    let cardLength = creditCardNumber.length; //Definir la variable y el largo de creditCardNumber
    let hiddenNumber = ''; //Asigna valor vacío a la variable hiddenNumber
    //En el for se comienza en el punto -4 del atrás hacia adelante del largo del número y se aumenta 1
    //Se repetirá siempre que i sea menor al largo del número menos los últimos 4 dígitos
    for (let i = 0; i < cardLength - 4; i++) {
      hiddenNumber += '•'; //se remplaza cada valor por el .
    }
    //se retorna el valor de cada . encontrado en el for más el substring de  los últimos 4 números de creditCardNumber
    return hiddenNumber + creditCardNumber.substring(cardLength - 4, cardLength);
  }

};
export default validator;

