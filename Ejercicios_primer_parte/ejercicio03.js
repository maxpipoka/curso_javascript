// 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar

let numerofinal = parseInt(prompt("Ingrese el numero final: "));
console.log(numerofinal);
console.log(numerofinal + numerofinal);

for (let i = 1; i <= numerofinal; i++) {
    if (i % 2 == 0) {
        console.log(`El numero ${i} es par.`)
    }
    if (i % 2 != 0) {
        console.log(`El numero ${i} es impar.`)
    }
}