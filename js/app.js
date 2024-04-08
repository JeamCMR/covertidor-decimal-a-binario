/**PILAS  */

const callStack = [
  'a(): returns "freeCodeCamp " + b()', // por ultimo a esta funcion que retorna toda la cadena 
  'b(): returns "is " + c()', //Luego a esta funcion 
  'c(): returns "awesome!"' // primero se llama a esta funcion
];


function a (){
  debugger
  return "freeCodeCamp " + b()
}

const b = () => {
  debugger
  return "is " + c();
 }
 
 const c = () => {
  debugger
   return "awesome!"
 }

console.log(a());

/**Variables */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/**Covierte el valor decimal en binario */

function decimalToBinary(input) {
  let binary = "";
  if (input == 0) {
    binary = "0";
  }
  while (input > 0) {
    input = Math.floor(input / 2);
    binary = (input % 2) + binary;
  }
  result.innerText = binary;
}


const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
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
