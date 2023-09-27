 //clase14 ejercicios
 
 //ejercicio 1

/*let nombre = "veronica";
let apellido = "oliva";
let edad = 36;
let pasatiempos = ["pesca", "lettering", "diseño"];
let pareja = true;
let soltera = false;

//ejercicio 2

let primerNumero = 10;
let segundoNumero = 20;
let suma = primerNumero + segundoNumero;

console.log(suma);


//ejercicio 3

let botellaReutilizable = {
    marca: "Contigo",
    modelo: "botella deportiva",
    año: 2023,
    precio: 17000,
    oferta: true,
    publicidad: function (){
        console.log("la mejor botella reutilizable termica del mercado")

    }
}

console.log (botellaReutilizable.marca)
console.log (botellaReutilizable) */



//clase 15

//ejercicio 1
/*let nombre = prompt ("ingrese su nombre ");
let edad = prompt ("ingrese su edad ");

alert ("su nombre es" + nombre + "y tiene" + edad + "años");
console.log("ingrese su nombre y edad" + nombre + edad);

//ejercicio 2
let nombre1 = prompt ("ingrese su nombre")
let colorPreferido = prompt ("ingrese su color favorito")
let comidaFavorita = prompt ("ingrese su comida favorita")
let mejorPelicula = prompt ("ingrese su pelicula favorita")
let trabajoActual = prompt ("ingrese su trabajo actual")

let presentacion = `Hola, mi nombre es ${nombre1}. Mi color preferido es ${colorPreferido},
mi comida favorita es ${comidaFavorita}, y considero que la mejor película es ${mejorPelicula}.
Actualmente, trabajo como ${trabajoActual}.`;

console.log (presentacion)

//ejercicio 3

alert(`Bienvenido/a a la web, ${nombre1}`); 


//ejercicio 4

let numeroAleatorio = parseInt(prompt("Ingrese un número aleatorio:"));

let esPar = numeroAleatorio % 2 === 0;

if (esPar) {
    console.log(`${numeroAleatorio} es un número par.`);

  } else {
    console.log(`${numeroAleatorio} es un número impar.`);
  }
*/

//CLASE 16 ejercicios
// ejercicio 1
 /*Declarar la variable finDeSemana y asignarle como valor un 
día de la semana.
Luego implementar un condicional que compare la igualdad de 
finDeSemana con los días "Sábado" y "Domingo", y si es 
verdadero que muestre por consola "¡Hoy no se trabaja!". Si es 
falso, que muestre "Aún falta para el finde"*/

/*

let finDeSemana = prompt("Ingresar dia de la semana")
if (finDeSemana == "sabado" || finDeSemana == "domingo"){
  console.log ("¡Hoy no se trabaja!");
 }else{
  console.log("Aún falta para el finde");
 }

 */

 //ejercicio2
/* Utilizando el if ternario:
Declarar la variable masCaro y asignarle el servicio del spa que 
tenga el valor más grande. 
Para esto se necesita comparar dos variables que contengan los 
precios de Peluquería y Manicuría, asignar a masCaro el nombre 
del servicio y mostrar por consola: masCaro + " es el servicio 
más costoso de este spa"*/

/*
let precioPeluqueria = 5000;
let precioManicuria = 1000;

let masCaro = precioPeluqueria > precioManicuria ? "Peluquería" : "Manicuría";
console.log(masCaro + " es el servicio más costoso de este spa");

*/
//ejercicio3

/*Pedir al usuario que indique su destino de viaje preferido a través del 
número correspondiente, de la siguiente lista de lugares:
1- Canadá
2- España
3- Bariloche
4- Japón
Para esto, utilizar prompt y la estructura condicional switch.
Para cada número, mostrar por consola lo siguiente:
1- "Un excelente destino para aprender a esquiar"
2- "Hermoso destino para recorrer calles con adoquines"
3- "Muy buen destino para realizar excursiones en el hielo!"
4- "Precioso destino para conocer cientos de tiendas, una al lado de la 
otra"
Si el usuario no elige un número dentro de los indicados, que el mensaje 
sea "Debes elegir un número entre el 1 y el 4".
Tip: la función prompt almacena un dato de tipo string. Usando 
Number() podemos pasar a número un dato*/
/*
let destinoTuristico =   Number( prompt ("Elige tu destino preferido:\n1- Canadá\n2- España\n3- Bariloche\n4- Japón"));

switch (destinoTuristico) {
  case 1:
      console.log("Un excelente destino para aprender a esquiar");
      break;
      case 2:
        console.log("Hermoso destino para recorrer calles con adoquines");
        break;
    case 3:
        console.log("Muy buen destino para realizar excursiones en el hielo!");
        break;
    case 4:
        console.log("Precioso destino para conocer cientos de tiendas, una al lado de la otra");
        break;
        default:
          console.log("Debes elegir un número entre el 1 y el 4");
  }
  
  */

//CLASE 17 ejercicios
//ejercicio1
/*Escribir dos funciones, una que devuelva el doble de 
cualquier número que le pasemos, y la otra el triple*/

/*
function duplicar(numero) {
  return numero * 2;
}
function triplicar(numero) {
  return numero * 3;
}
let numero = prompt("Introduce un número: ");
console.log(duplicar(numero));
console.log("el triple es" + " " + triplicar(numero));

*/

//ejercicio2
/*
Escribir una función que devuelva el perímetro de un 
círculo cuando le damos el radio como parámetro.*/

/*
function perimetro (radio) {
  return Math.PI * radio * 2;
}
let radio = prompt("Introduce un número de radio: ");
console.log(perimetro(radio));

*/

//ejercicio3
/*Escribir una función que devuelva el área de un círculo 
cuando recibe el radio como parámetro.*/
/*
function area (radio) {
    return Math.PI * radio * radio;
  }
  let radio = prompt("Introduce un número de radio: ");
  console.log(area(radio));
  
*/
//ejercicio4
/*Escribir una función que nos retorne true si un número es mayor a 
10, o false en caso contrario.*/

/*
function esMayorQue10(numero) {
  return numero > 10;
}
let numero = prompt("Introduce un número: ");
let esMayor = esMayorQue10(numero);

if (esMayor) {
  console.log("El número es mayor que 10");
} else {
  console.log("El número no es mayor que 10");
}

*/
//ejercicio5
/*Convertir la siguiente función declarada en una arrow function:
function saludar(nombre, apellido) {
return 'Hola, ' + nombre + ' ' + apellido + '!';
}
*/


//ejercicio6


/*
//resolucion profe vero
//1
let doble = (num) => num * 2 ;
console.log(doble(4))

let triple = (num) => num * 3;
console.log(triple(3))

//2
function perimetro(radio){
    return 3.14 * radio * 2;
}
console.log(perimetro(5))
//3
function area(radio){
    return  radio * radio * 3.14 ;
}
console.log(area(5))

//4

function esMayor(unNumero) {
    if ( unNumero > 10){
        return true;
    } else {
        return false;
    }
}
console.log(esMayor(15))

//5 
// function saludar(nombre, apellido) {
//     return 'Hola, ' + nombre + ' ' + apellido + '!';
// }

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

console.log(saludar('Peter', 'Parker'));

//6

let aplicarCallback = (numero, callback)=> callback(numero);

console.log(aplicarCallback(5, doble))
// doble(5)
console.log(aplicarCallback(5, triple))
*/

/*ejercicios clase 19

ejercicio 1
Dado un array existente de palabras sueltas, que juntas forman una gran frase, realizar lo 
siguiente:
Utilizar un método de array sobre la variable dada, para que se convierta en una oración 
entera, y almacenar ese string en una variable nueva. Mostrar por consola el resultado.
let palabras = 
["Cada","minuto","que","pasa","es","otra","oportunidad","de","seguir","cambiando."];
*/
/*

let palabras = ["Cada", "minuto", "que", "pasa", "es", "otra", "oportunidad", "de", "seguir", "cambiando."];
let frase = palabras.join(" ");
console.log(frase);

*/
/* ejercicio 2
Dado un array con tareas a realizar, eliminar la última, ya que fue realizada.
Crear una nueva variable, donde se almacene las tareas que se van cumpliendo.
Mostrar por consola la tarea cumplida.*//*

let tareas = [
  {
    nombre: "Regar",
    lugar: "Patio",
    tiempo: 20,
  },
  {
    nombre: "Compras",
    lugar: "Supermercado",
    tiempo: 60,
  },
  {
    nombre: "Hacer pastafrola",
    lugar: "Cocina",
    tiempo: 60,
  },
];


let tareaCumplida = tareas.pop();
let tareasCumplidas = [];
console.log(tareaCumplida.nombre);

*/

/*ejercicio 3
Teniendo en cuenta el ejercicio anterior, ahora se necesita agregar dos tareas 
nuevas.
Mostrar por consola la lista completa con las incorporaciones.*//*

tareas.push({
  nombre: "Limpiar la casa",
  lugar: "Toda la casa",
  tiempo: 120,
});
tareas.push({
  nombre: "Lavar la ropa",
  lugar: "Lavandería",
  tiempo: 60,
});

console.log(tareas);


*/
/*ejercicio 4
 Ahora es necesario sacar la primera tarea de la lista.*//*
 
 let tareaSacada = tareas.shift();
 console.log(tareas);

/*
/*ejercicio 5
Crear una variable que almacene una frase, y mostrar por consola la cantidad 
de caracteres que contiene*/ /*

let frase2 = "Hola grupo D";
let total = frase2.length;
console.log(total);


*/

//clase 20 ejercicios
//ciclo for
/*
  for (let i = 0; i <= 7; i++) {
    console.log("hola");
  }
*/

/* while

let vuelta = 0 ;
while (vuelta <=4){
  console.log(vuelta);
  vuelta++
}

*/

//do while
/*

let i = 4;
do{
  console.log(i);
  i++
}while(i<=5)

*/


/*1) Crear una función que muestre por consola el texto ('Pasando la 
vuelta ' + número de vuelta), y llegue hasta la vuelta n° 5.
Ejecutar la función.*/

/*
for (let i = 0; i <= 5; i++) {
  console.log("vuelta n°" +i);
}

*/
/*2) Crear una función que reciba por parámetro un número y cuente la 
cantidad de números impares que hay desde el 0 hasta número 
recibido.
Pista: Se necesitará usar for e if. Recordar cómo podemos saber si un 
número es par o impar.
*/
/*
function contarImpares(numero) {
  let contador = 0
  for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
      contador++;
    }
  }
  return contador;
}

console.log(contarImpares(10)); // 5
console.log(contarImpares(20)); // 10

*/
/*
3) Crear una función que reciba por parámetro un número, y muestre 
por consola la tabla de multiplicar del 1 al 10 del número que reciba.
El mensaje podría verse de la siguiente manera: 
console.log(numero + ' * ' + i + ' = ' + numero * i);*/
/*
function TablaMultiplicar(numero) {
  for (let i = 0; i <= 10; i++){
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
}

TablaMultiplicar(5);
*/

//clase 21 ejercicios 
/*
Ejercicio 1
1) Necesitamos escribir una función la cual 
recibiendo un array con importes, nos devuelva el 
resultado final de la suma de los importes de todos 
los meses que tienen ganancia, a excepción de los 
que superen un importe de $1.000.*/

/*
function sumaImportesGanancia(importes) {
    let suma = 0;
  
    for (let i = 0; i < importes.length; i++) {
      const importe = importes[i];
  
      if (importe > 0 && importe <= 1000) {
        suma += importe;
      }
    }
  
    return suma;
  }
  
  let importes = [100, 200, 1100, 500, 600];
  
  let suma = sumaImportesGanancia(importes);
  
  console.log(suma);
  
*/

/*Ejercicio 3
Ahora es el turno de una empresa de trenes la cual nos enfrenta a la siguiente situación:
Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber
cuántos pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes
somos responsables de generar un programa que lo resuelva.
Debemos escribir una función, la cual cuando reciba la cantidad de estaciones que avanzó el tren, nos
devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren.
La empresa nos dió los siguientes datos:
-El tren sale de la estación Uno siempre con 200 pasajeros.
-En cada estación el tren sube 50 pasajeros y bajan 30.
-En la estación Olimpo (la estación número 5), como es una estación central es la única donde bajan 80
personas y suben 120. */

/* Función para calcular la cantidad de pasajeros en cada estación
function pasajerosEnEstaciones(cantidadEstaciones) {
  // Inicializamos la cantidad de pasajeros en el tren
  let pasajeros = 200;

  // Recorremos las estaciones
  for (let i = 1; i <= cantidadEstaciones; i++) {
    // Si la estación es Olimpo, bajan 80 pasajeros y suben 120
    if (i === 5) {
      pasajeros -= 80;
      pasajeros += 120;
    } else {
      // En las demás estaciones, suben 50 pasajeros y bajan 30
      pasajeros += 50;
      pasajeros -= 30;
    }

    // Imprimimos el reporte de la estación
    console.log(`En la estación ${i}, hay ${pasajeros} pasajeros`);
  }

  // Devolvemos la cantidad de pasajeros en el tren
  return pasajeros;
}

// Ejemplo de uso
pasajerosEnEstaciones(5); */

/*Ejercicio 2
Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:
Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera, debemos verificar si el
asiento que buscamos está disponible.
Nos piden que escribamos una función, que tome como parámetro un conjunto de asientos disponibles y el
asiento que quiere ocupar la persona. La función deberá verificar si el asiento solicitado se encuentra
disponible y devolverle un mensaje claro y prolijo al cliente como: "Felicitaciones, el asiento número X está
disponible" o "Lo sentimos, el asiento número X está ocupado, pero aún quedan X asientos disponibles".
Ayuda:
asientos([15, 28, 44, 45, 70], 15); */
/*function asientosDisponibles(asientos, asiento) {
  // Verificamos si el asiento solicitado está en el arreglo de asientos disponibles
  if (asientos.includes(asiento)) {
    // Si está disponible, devolvemos un mensaje de éxito
    return `Felicitaciones, el asiento número ${asiento} está disponible`;
  } else {
    // Si no está disponible, devolvemos un mensaje de error
    return `Lo sentimos, el asiento número ${asiento} está ocupado, pero aún quedan ${asientos.length - 1} asientos disponibles`;
  }
}

// Función para comprobar el funcionamiento de la función `asientosDisponibles()`
function comprobar() {
  let asientos = [15, 28, 44, 45, 70];
// Asiento disponible
  console.log(asientosDisponibles(asientos, 15)); // Devuelve "Felicitaciones, el asiento número 15 está disponible"

  // Asiento no disponible
  console.log(asientosDisponibles(asientos, 71)); // Devuelve "Lo sentimos, el asiento número 71 está ocupado, pero aún quedan 4 asientos disponibles"

}

comprobar();*/


/* clase 22 ejercicio 

1) Crear un objeto "perro". La variable debe tener 3 
propiedades: 
nombre, con valor de tipo string.
edad, con valor de tipo number.
género, con valor de tipo string.
vacunado, con valor de tipo boolean.
entrenado, con valor de tipo boolean.
Mostrar por consola el nombre, género y si está 
entrenado*/
/*
const perro = {
  nombre: "firulais",
  edad: 2,
  genero: "hembra",
  vacunado: true,
  entrenado: false,
};
 let oracion =`el nombre del perro es  ${perro.nombre}, su genero es ${perro.genero} y esta entrenado:  ${perro.entrenado}`
console.log(oracion);

*/
/*
2) Dado el siguiente objeto "pokemon", al mismo, hay que 
pedirle que entrene. Para esto, hay que crear una función con 3 
características:
1- Recibe por parámetro la cantidad de horas.
2- Resta a su energía (this.energia) la cantidad de horas x5.
3- Incrementa su experiencia (this.experiencia) la cantidad de 
horas x2.
Una vez definida la función, ejecutar el código y mostrar cómo 
va variando la energía y experiencia del pokemon por consola. */

/*
let pokemon = {
 energia: 100,
 experiencia: 10,
 nombre: "Pikachu",
 entrenar:function (horas){
  this.energia -= horas * 5;
  this.experiencia += horas * 2;
  console.log (`energia del pokemon ${this.energia}, `);
  console.log (`experiencia del pokemon ${this.experiencia}, `);
}
};

pokemon.entrenar (5)

*/

/*clase 23 ejercicios*/
/*
let formulario = [
  {
    nombre: "guadalupe",
    apellido: "semprum",
    ciudad: "la plata",
    edad: 32
  }
];

guardarInformacion(formulario);

function guardarInformacion(formulario) {
  let jsonFormulario = JSON.stringify(formulario);

  localStorage.setItem("formulario", jsonFormulario);

  console.log(localStorage.getItem("formulario"));
}

*/


/* clase 24 ejercicio*/
/*Crear archivo .js y linkearlo al HTML.
-Crear una variable y almacenar el h3 del artículo.
-Cambiar el nombre del curso a través de la 
propiedad necesaria. 
-Agregar texto a algún elemento HTML del index.
-Crear una variable y almacenar todos los enlaces 
existentes*/

//let muestraH3 = document.querySelector("h3")
//console.log(muestraH3);

//document.getElementById ("pruebah3").innerHTML = "Pasos para el reciclaje"
//console.log(muestraH3);
/*
 
let agregarH3 = document.querySelector("h3").innerHTML += "Agregado al h3";
                   
console.log(agregarH3); 

let todosLosEnlaces = document.querySelectorAll ("a")
console.log(todosLosEnlaces);
*/

//clase 25 ejercicio

/*Utilizando el mismo proyecto con el que trabajamos 
la clase anterior:
-Agregar un artículo nuevo a la web desde js, 
mediante los métodos aprendidos hoy.
-Agregar links a redes sociales en el footer.
-Crear una sección nueva, como la de "productos", 
pero de otra índole, y agregarle contenido a gusto.*/

let elementoPrueba = document.createElement("div")
let parrafo = document.createElement("p")

parrafo.innerText = "prueba agregando parrafo clase 25 "
elementoPrueba.appendChild(parrafo)
document.querySelector("main").appendChild(elementoPrueba)

let arrayRedesSociales = [
  {
      redSocial: "Linkedin",
      link: "https://ar.linkedin.com/"
  },

  {
    redSocial: "Pinterest",
    link: "https://ar.pinterest.com/"
},
]

for (let i = 0; i < arrayRedesSociales.length; i++){
  let redSocial = document.createElement("redSocial")
  let link = document.createElement("link")
  
  redSocial.innerText = arrayRedesSociales[i].redSocial
  link.innerText = arrayRedesSociales[i].link

  footer.appendChild(redSocial)
  footer.appendChild(link)
 

 // document.querySelector("a.").appendChild(footer)
 //falta completar esta parte revisar con video de la clase
}
  



