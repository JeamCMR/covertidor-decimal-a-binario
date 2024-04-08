/**Variables */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/**Covierte el valor decimal en binario */

function decimalToBinary(input) {
  const inputs = [];
  const quotients = [];
  const remainders = [];

    if (input == 0) {
        result.innerText = "0";
        return
    }

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2; //Los retos de la division vienen siendo la conversion al numero decimal

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    input = quotient; //Variable de control
  }
  console.log ("Inputs: ",  inputs);
  console.log("Quotients: ",quotients);
  console.log("Remainders: ",remainders);
  result.innerText = remainders.reverse().join("");
}

/**valida el valor en la entrada numérica */

const checkUserInput = () => {
  // null,undefined,0 son valores false
  /*
    La funcion isNaN() toma una cadena o numero como parametro y evalua si es un NaN y devuelve True o false
    */
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    window.alert("Ingrese un valor decimal");
    result.innerText= "";
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

/**EVENTOS */
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkUserInput();
  }
});
