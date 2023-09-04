import suma from "./suma.js"
import resta from "./resta.js"
import divi from "./divi.js"
import multi from "./multi.js"

function calculadora() {
    let numA = Number(prompt("ingrese un numero"))
    let numB = Number(prompt("ingrese otro numero"))
    let operacion = prompt("Ingrese suma, divi, multi o resta")
    operacion.toLowerCase();

switch (operacion) {
    case "suma":
        suma(numA, numB)
        break;
    case "resta":
        resta(numA, numB)
        break;
    case "multi":
        multi(numA, numB)
        break;
    case "divi":
        divi(numA, numB)
        break;
    default:
        console.log("Ingrese una opcion correcta");
        break;
}
}