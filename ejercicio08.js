// 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = 0;
while ((dni.length != 8) || (dni <= 0)) {
    console.log(dni);
    console.log(dni.length);
    dni = parseInt(prompt("Ingrese el dni, 8 digitos, mayor que 0: "));
}
letra = letras[(dni % 23)];

console.log(`La letra para el dni ${dni} es ${letra}.`);