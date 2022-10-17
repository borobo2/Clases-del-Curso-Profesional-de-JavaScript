/* Metodos en el objeto Document

   querySelector: Metodo del objeto document que permite tomar
   un elemento del dom a través del selector CSS
   
   querySelectorAll: Toma un conjunto de elementos con un mismo selector y los almacena en un array
   
   getElement: Metodo del objeto document que permite tomar
   un elemento del dom, el selector dependerá de la variante del metodo

    - getElementById
    - getElementByClassName
    - getElementByTagName
   
*/

const title = document.querySelector("h1");
const paragraph = document.querySelector(".parrafo-class");
const paragraphsId = document.querySelector("#parrafo-id");
const input = document.getElementById("input-id");
const parrafos = document.querySelectorAll("p");
const elementosHtml = {
    title,
    paragraph,
    paragraphsId,
    input
}

console.log(title);
console.log(parrafos);
console.log(elementosHtml); 
console.log(input.value);

/* Comportamiento de los metodos
Los elementos html guardados en variables muestran el código html 

Los elementos html guardados en objetos permiten acceder a todas sus propiedades y valores */