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
const mayorDeEdad = true;
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
        c. los parametros de una función son las variables que se declaran dentro, mientras que los argumentos son los valores
           que reciben los parametros al invocarla
*/

// parte A

const nombreYSobreNombre = function (name, lastname, nickname) {
    console.log(`mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}`)
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

let tipoDeSuscripcion;

tipoDeSuscripcion = "Free"

if(tipoDeSuscripcion == "Free"){
    console.log("Solo podes tomar los cursos gratis");
}

tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Basic"){
    console.log("Podes tomar casi todos los cursos de Platzi durante un mes");
}

tipoDeSuscripcion = "Expert";

if(tipoDeSuscripcion == "Expert"){
    console.log("podes tomar casi todos los cursos de Platzi durante un año");
}

tipoDeSuscripcion = "ExpertPlus";

if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Vos y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}