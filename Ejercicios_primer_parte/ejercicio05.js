// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

// !5 = 5*4*3*2*1 = 120

let aFactorial = 0;

while (aFactorial <= 0) {
    aFactorial = parseInt(prompt("Ingrese un número entero mayor a 0 para calcular el factorial: "));
    console.log(`Numero ingresado ${aFactorial + aFactorial}`)
}

let totalfactorial = aFactorial;

for (let i = aFactorial; i > 1; i--) {
    totalfactorial = totalfactorial * (i - 1);
}

console.log(`El total del factorial de ${aFactorial} es: ${totalfactorial}`);