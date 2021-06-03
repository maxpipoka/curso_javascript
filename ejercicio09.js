// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

let palabra;
let contadorCons = 0;
let contadorVoc = 0;
let vocales = ['a', 'e', 'i', 'o', 'u'];

palabra = prompt("Ingrese una palabra a evaluar: ");

for (let i = 0; i < palabra.length; i++) {
    let encontrada = false;
    for (let x of vocales) {
        if (x == palabra[i]) {
            encontrada = true;
        }
    }
    if (encontrada == true) {
        contadorVoc += 1;
    }
    if (encontrada == false) {
        contadorCons += 1;
    }
}

console.log(`Lo evaluado arroja= Vocales: ${contadorVoc}, Consonantes: ${contadorCons}, y la extension de la palabra es de ${palabra.length}.`)