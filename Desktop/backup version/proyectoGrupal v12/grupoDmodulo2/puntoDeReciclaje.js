//crear el array

let puntosReciclaje = document.querySelectorAll('.puntosreciclaje');
let puntosReciclajeArray = [];

puntosReciclaje.forEach((puntoReciclaje) => {
  let tipoReciclaje = puntoReciclaje.querySelector('.atextopdereciclaje').textContent;
  puntosReciclajeArray.push({
    "tipoReciclaje": tipoReciclaje
  });
});


/* Este código creará un objeto JSON llamado puntosReciclajeJson con una propiedad llamada tipoReciclaje que contiene el array de tipos de reciclaje*/

let puntosReciclajeJson = puntosReciclajeArray;

console.log(puntosReciclajeJson);

// Importar el archivo JS que contiene la base de datos.
const puntosReciclajeJson = require('/Documents and Settings');

// Imprimir la base de datos.
console.log(puntosReciclajeJson);

/*// Agregar nuevos elementos.
function agregarNuevoElemento(baseDatos, nuevoElemento) {
    // Validar que el nuevo elemento tenga la misma estructura que los elementos anteriores.
    if (!nuevoElemento.hasOwnProperty("tipoReciclaje")) {
      throw new Error("El nuevo elemento debe tener una propiedad llamada 'tipoReciclaje'.");
    }
  
    // Agregar el nuevo elemento a la base de datos.
    baseDatos.push(nuevoElemento);
  
    return baseDatos;
  }

  // Leer la base de datos desde el archivo JS.
const puntosReciclajeJson = require('baseDatos.js');

// Agregar un nuevo elemento a la base de datos.
const nuevoElemento = {
  "tipoReciclaje": "Cartón"
};
const baseDatos = agregarNuevoElemento(puntosReciclajeJson, nuevoElemento);

// Imprimir la base de datos actualizada.
console.log(baseDatos); */
