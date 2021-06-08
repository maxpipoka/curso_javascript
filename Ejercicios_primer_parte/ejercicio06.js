// 6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

let total = 0;
let contador = 0;
let nTemporal = 0;

while (total <= 50) {
    nTemporal = parseInt(prompt("Introduzca numeros a sumar: "));
    if ((total + nTemporal) > 50) {
        console.log(`ATENCION! No se pueden sumar mas numeros`);
        break;
    }

    if ((total + nTemporal) < 51) {
        total += nTemporal;
        contador += 1;
        console.log(`${total}`);
    }
}
console.log(`El total guardado fue de ${total}.`);
console.log(`Y se guardaron ${contador} numeros.`);