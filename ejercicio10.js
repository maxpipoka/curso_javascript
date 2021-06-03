// 10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let colorBuscar = prompt("Ingrese el color a buscar:");

let encontrada = "no encontrado";
for (let i of colores) {
    if (colorBuscar == i) {
        encontrada = "encontrado";
    }
}

console.log(`El color ingresado ha sido ${encontrada} en el array.`)