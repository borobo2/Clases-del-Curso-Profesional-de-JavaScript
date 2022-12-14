/* 
    1. Variables y operaciones
        a. una variable es un espacio en memoria dentro del programa, principalmente sirve para guardar un dato
        b. Declarar una variable es crear el espacio en memoria e inicializarla es asignarle un valor
        c. Si bien el operador de suma y de concatenación es el mismo (+), en el primer caso se realiza una operación 
           matemática entre números, mientras que en el segundo se agrupan dos o más valores tipo strings
        d. el operador es: +
*/

// Ejercicio 1

// b.

let miNombre; // declaración
miNombre = "Nicolás"; //Inicialización

// c.

let suma = 1 + 2; // opearación de suma
let string = "sumo 1" + " sumo 2"; //concatenación

console.log(suma);
console.log(string);

// Ejercicio 2

// parte A

const nombre = "Nicolás";
const apellido = "Bossi";
const userPlatzi = "Borobo2";
const mayorDeEdad = true; // variables con valor booleanos pueden empezar con is: isMayorDeEdad
let edad = 27;
let correo = "nbossi@hotmail.com";
let dineroAhorrado = 5000;
let deudas = 4000;

// parte B

let imprimirNombre = console.log(`Nombre completo: ${nombre} ${apellido}`);
let imprimirDinero = console.log(`Dinero Real: ${dineroAhorrado - deudas}`);


/*
    Funciones:
        a. Es un bloque de código que se declara e invoca 
        b. Cuando hay un bloque de código específico que se repite a lo largo del programa, sirve para dividir en partes
           el código. Además, el nombre que se le coloca sirve para entender la tarea que cumple dicho bloque en el programa. 
        c. los parametros de una función son variables que recibe una función, mientras que los argumentos son los valores
           que se envían a los parametros al invocarla
*/

// parte A

const nombreYSobreNombre = (name, lastname, nickname) => {  // Imprimir nombre, apellido y sobrenombre en consola
    let completeName = name + " " + lastname;
    console.log (`mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`)
};
nombreYSobreNombre("Nicolás", "Fernando", "Chubi");

/*
    Condicionales:
        a. Un condicional es una bifurcación dentro del programa. Es un bloque de código que se puede ejecutar o no
           dependiendo de sí una condición se cumple o no.
        b. Condicional if, else if y else: 
            - if: Se ejecuta sí una condición se cumple o no
            - else if: se realizará la comparación de condiciones solo sí el condicional if no se cumple, 
            - else: Condicional que se ejecuta solo sí todas las condiciones previas no son cumplidas (if y else if).
            - switch: Condicional de JavaScript que funciona a través de casos.
        c. Se puede combinar funciones con condicionales.
*/

// Parte A

const tipoDeSuscripcion = (suscripcion) => { // Seleccionar el tipo de suscripción del usuario 

    if (suscripcion === "Free") {
        console.log("Solo podes tomar los cursos gratis");
    }
    else if (suscripcion === "Basic") {
        console.log("Podes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (suscripcion === "Expert") {
        console.log("podes tomar casi todos los cursos de Platzi durante un año");
    }
    else if (suscripcion === "ExpertPlus") {
        console.log("Vos y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    else {
        console.log("Se ha vencido la fecha de pago");
    }
}

tipoDeSuscripcion("Basic");

// Parte B

const mostrarSuscripciones = () => { // Mostrar todas las opciones de suscripción del usuario
    const suscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
    const mensajeDeSuscripcion = [
    "Solo podes tomar los cursos gratis",
    "Podes tomar casi todos los cursos de Platzi durante un mes",
    "Podes tomar casi todos los cursos de Platzi durante un año",
    "Vos y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

    for (let i = 0; 
        i < suscripcion.length; 
        i++) {
        console.log(`Tu suscripción es ${suscripcion[i]}, por ende ${mensajeDeSuscripcion[i]}`);
    }
}

mostrarSuscripciones();

/*
    Ciclos:
        a. Un ciclo es un bloque de código que se ejecuta una determinada cantidad de veces meintras se cumpla
           una condición, se deja de ejecutar cuando la condición no se cumple.
        b. Ciclo for, while y do while. Los ciclos for in y for of son para recorrer objetos tipo array
        c. Un bucle infito es un estado del bucle en el que nunca deja de iterar ya que no tiene una condición definida o está nunca
           se cumple.
        d. Se pueden mezclar ciclos y condicionales.
*/

// Parte A

const contarHastaCuatro = () => {

    let i = 1;

    while (i <= 4) {
        console.log(`El valor de i es: ${i}`);
        i++;
    }
}

const cuentaRegresiva = () => {

    let i = 10;

    while (i >= 2) {
        console.log(`El valor de i es: ${i}`);
        i--;
    }
}

contarHastaCuatro();
cuentaRegresiva();

// Parte B

const respuestaDelAcertijo = () => { // Enviarle un acertijo al usuario
    let acertijo = prompt("¿Cuanto es 2 + 2?");
    let respuestaUsuario = parseInt(acertijo);
    switch (respuestaUsuario) {
        case 4:
            alert("Respuesta Correcta");
            break;
        default:
            alert("Respuesta Incorrecta");
            respuestaDelAcertijo();
            break;
    }
}

/*
    Listas:
        a. Es una variable tipo objeto en donde se pueden guardar más de un valor en propiedades. 
        Los valores son ordenados a través de posiciones númericas (index), los cuales son propiedades que se acceden con []
        b. Un objeto es un espacio en memoria donde se utilizan propiedades para guardar valores. A diferencia de los arrays, las 
           propiedades no son posiciones, sino palabras claves definidas por el programador.
        c. Los arrays son más útiles en el caso de que los valores no necesiten guardarse en propiedades a definir, o en el caso de que
           los valores deban organizarse en orden. Mientras que las variables tipo objeto son más útiles en el caso de que los valores a necesitan guardaese en propiedades especificas.
        d. Sí, los arrays pueden gaurdar variables tipo objeto y viseversa.
*/

// Parte A

let numerosNaturales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let diezNumeros = numerosNaturales.length;
let camisaTascani = {
    color: "Celeste",
    talle: "XL",
    modelo: "Vintage",
    tela: "Jean"
}

const imprimirElemento = (contarElemento) => {
    console.log(contarElemento);
}

// Parte B

const imprimirNumeros = () => {
    for (let i = 0;
        i < diezNumeros;
        i++) {
        imprimirElemento(numerosNaturales[i]);
    }
}

imprimirNumeros();

// Parte C

const imprimirRopa = (obj) => {
    for (ropa in obj) {
        imprimirElemento(ropa + ": " + obj[ropa]);
    }
}

imprimirRopa(camisaTascani);


