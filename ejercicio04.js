// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad

let numeroAEvaluar = parseInt(prompt("Ingrese el valor a evaluar si es primo o no: "));

let esPrimo = true;
let dividendos = [2, 3, 4, 5, 6, 7, 8, 9]

for (let i of dividendos) {
    if ((numeroAEvaluar % i == 0) && (i != numeroAEvaluar)) {
        console.log(`Div evaluado ${i}`);
        esPrimo = false;
        break;
    }
}

if (esPrimo === true) {
    console.log(`El numero ${numeroAEvaluar} es un numero primo.`);
}

if (esPrimo === false) {
    console.log(`El numero ${numeroAEvaluar} NO es un numero primo.`);
}