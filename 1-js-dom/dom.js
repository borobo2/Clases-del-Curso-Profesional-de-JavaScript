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

let title = document.querySelector("h1");
let paragraph = document.querySelector(".parrafo-class");
let paragraphsId = document.querySelector("#parrafo-id");
let input = document.getElementById("input-id");
let parrafos = document.querySelectorAll("p");
const elementosHtml = {
    title,
    paragraph,
    paragraphsId,
    input
}

console.log(title); // mostrar código html
console.log(parrafos); // almacenar elementos en array
console.log(elementosHtml); // mostrar elementos como objetos 

// modificar etiqueta del elemento (contenido, etiquetas, atributos)
title.innerHTML = "DOMCITO <br /> DOMDOM";

// modificar texto del documento
title.innerText = "DOMCITO DOMDOM";

// obtener el valor del atributo
let paragraphAtribute = paragraph.getAttribute("class");
console.log(paragraphAtribute);

// establecer el valor del atributo
paragraphAtribute = paragraph.setAttribute("class", "hol");
console.log(paragraphAtribute);

// agregar valores al atributo class
title.classList.add("main__title");
paragraph.classList.add("main__paragraph");

// quitar valores al atributo class
paragraph.classList.remove("caca");
input.value = "Hola";

/* Crear elemento html: */

// Paso 1: Crear el elemento
const etiquetaSpan = document.createElement("span");
etiquetaSpan.innerText = "Buen día mono";

// Paso 2: Agregarlo tomando como referencia la ubicación de una etiqueta especifica
paragraphsId.append(etiquetaSpan);


