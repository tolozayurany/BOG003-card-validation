const validator = {
  // ...
};

export default validator;

//Con documentContentLoaded le damos la función al botón de ejecutar la función de checkLuhn
document.addEventListener("DOMContentLoaded", function() {
  var boton2 = document.getElementById('buttonValidate');
          boton2.onclick = function checkLuhn(value) {
 
//Empezamos llamando el valor la variable escrita en el imput con Id numbers
  let creditCardNumber = document.getElementById("numbers").value;
  let sum = 0;
  
  //Se crea el for empezando desde el último número y continuando hacia atrás con el siguiente número hasta llegar a posición 0
  for(var i = value.lenght-1; i>=0; n--){
      var digit = value.charAt(n);  
      var  nDigit = paraseInt(digit,10); //Se asigna el valor del número en base 10 para .....????

      //Si la posición de este valor es par, entonces se multiplica el valor por 2
      if (i % 2 == 0){
        nDigit *= 2 ;
        if (nDigit > 9){
          1 + (nDigit % 10); //MSumo 1 más el residuo de la división entre 10, así da la suma de los dos dígitos(ndigit-9)

            
        }

      }    


        }



   }
} ,false );
