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





 




 