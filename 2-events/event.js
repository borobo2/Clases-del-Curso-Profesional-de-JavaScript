/* onclick y onchange 
    son atributos de html que actuan como eventos, permiten agregar código javascript ejecutable en el caso de que el usaurio realiza cierta acción sobre la etiqueta (la acción cambia según la etiqueta).
    Como valor se suelen invocar funciones. Se suelen utilizar para documentos pequeños, en proyectos grandes es mejor utilizad addEventListener
*/

const titulo = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#resultado");
const parrafo = document.querySelector("#mostrar-resultado");

const escucharBoton = () => {
    let valorUno = parseInt(input1.value);
    let valorDos = parseInt(input2.value);
    let resultado = valorUno + valorDos;
    parrafo.innerText = resultado;
}