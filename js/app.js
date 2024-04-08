/**Variables */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");


/**verifica el valor en la entrada numérica */

const checkUserInput = ( ) => {
    // null,undefined,0 son valores false
    /*
    La funcion isNaN() toma una cadena o numero como parametro y evalua si es un NaN y devuelve True o false
    */
    if(!numberInput.value || isNaN(parseInt(numberInput.value))){ 
        window.alert("Ingrese un valor decimal")
    }
    // console.log(numberInput.value);
}


/**EVENTOS */
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        checkUserInput();
    }
})