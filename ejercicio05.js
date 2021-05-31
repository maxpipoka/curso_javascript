// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

// !5 = 5*4*3*2*1 = 120

let aFactorial = 0;

let totalfactorial = 0;

while (aFactorial <= 0) {
    aFactorial = parseInt(prompt("Ingrese un número entero mayor a 0 para calcular el factorial: "));
    console.log(`Numero ingresado ${aFactorial + aFactorial}`)
}

for (let i = aFactorial; i > 0; i--) {

}