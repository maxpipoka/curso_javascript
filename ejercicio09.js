// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

let palabra;
let contadorCons = 0;
let contadorVoc = 0;
let vocales = ['a', 'e', 'i', 'o', 'u'];

palabra = prompt("Ingrese una palabra a evaluar: ");

for (let i = 0; i < palabra.length; i++) {
    if (vocales.find(palabra[i]) == true) {
        contadorVoc += 1;
    }
    if (vocales.find(palabra[i]) == false) {
        contadorCons += 1;
    }
}

console.log(`Lo evaluado arroja= Vocales: ${contadorVoc}, Consonantes: ${contadorCons}, y la extension de la palabra es de ${palabra.length}.`)