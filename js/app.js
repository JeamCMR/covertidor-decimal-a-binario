/**PILAS  */

// const callStack = [
//   'a(): returns "freeCodeCamp " + b()', // por ultimo a esta funcion que retorna toda la cadena 
//   'b(): returns "is " + c()', //Luego a esta funcion 
//   'c(): returns "awesome!"' // primero se llama a esta funcion
// ];


// function a (){
//   debugger
//   return "freeCodeCamp " + b()
// }

// const b = () => {
//   debugger
//   return "is " + c();
//  }
 
//  const c = () => {
//   debugger
//    return "awesome!"
//  }

// console.log(a());

/**Variables */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//FUNCION RECURSIVA  es una función que se llama a sí misma una y otra vez.
// const countDownAndUp  = (number) =>{

//   console.log (number);
//   if (number == 0) {
//     console.log ("Reached base case");
//     return;
//   }else{
//     countDownAndUp(number - 1)
//     console.log(number);
//   }
// }
// countDownAndUp(3);

/**Covierte el valor decimal en binario */

const decimalToBinary = (input) =>{
  debugger
  if (input === 0 || input === 1){ //caso base donde se sale de la funcion
    return String(input);
  }
  else{ //caso recursivo
    console.log(input);
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
   
  }
}


const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  debugger
  result.textContent = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

/**EVENTOS */
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkUserInput();
  }
});
