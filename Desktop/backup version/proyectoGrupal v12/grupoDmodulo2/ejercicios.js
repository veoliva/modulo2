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
*/

//ejercicio 4

let numeroAleatorio = parseInt(prompt("Ingrese un número aleatorio:"));

let esPar = numeroAleatorio % 2 === 0;

if (esPar) {
    console.log(`${numeroAleatorio} es un número par.`);

  } else {
    console.log(`${numeroAleatorio} es un número impar.`);
  }

 