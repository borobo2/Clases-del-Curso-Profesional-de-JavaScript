/* Etiqueta Form

1. Por defecto, la etiqueta form interpreta el último botón hijo como un botón tipo submit, por eso al utilizar el botón se recarga la página y se envían los datos. Para evitarlo se
debe utilizar el metodo preventDefault() sobre el argumento
que envía el evento por defecto.

2. En el método addEventListener, no se colocan los parentesis en la función porque el metodo se encarga de hacer la invocación por defecto, sí se agregan, el bloque de la función se ejecutará por dos

3. 
*/

let titulo = document.querySelector("h1");
let formulario = document.querySelector("#formulario");
let input1 = document.querySelector("#valor1");
let input2 = document.querySelector("#valor2");
let boton = document.querySelector("#resultado");
let parrafo = document.querySelector("#mostrar-resultado");

const sumarValoresInputs = (event) => {
    event.preventDefault();
    console.log(event)
    let valorUno = parseInt(input1.value);
    let valorDos = parseInt(input2.value);
    let suma = valorUno + valorDos;
    parrafo.innerText = suma;
}

formulario.addEventListener("click", sumarValoresInputs);