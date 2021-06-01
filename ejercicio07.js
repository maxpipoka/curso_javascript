// 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares

let cincoNumeros = [8, 5, 10, 11, 3];
let pares = [];
let impares = [];

console.log(Math.floor(Math.random() * (1 - 11)) + 11);

for (let i of cincoNumeros) {
    let multiplo = Math.floor(Math.random() * (1 - 11)) + 11;
    let multiplicado = i * multiplo;
    console.log(`Multiplicacion: ${i} X ${multiplo} = ${multiplicado}`);
    if (multiplicado % 2 == 0) {
        pares.push(multiplicado);
        console.log(`Se agrega a pares`);
    }
    if (multiplicado % 2 != 0) {
        impares.push(multiplicado);
        console.log(`Se agrega a impares`);
    }
}
console.log(`Array de pares: [${pares}]`);
console.log(`Array de impares: [${impares}]`);