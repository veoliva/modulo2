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
  
  




 