// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)

let figura;

while (figura != "A" && figura != "B" && figura != "C") {
    figura = prompt("De que figura quieres calcular el área? A-Triángulo, B-Rectángulo y C-Círculo");
}

if (figura == "A") {
    let ancho = prompt("Ingrese el ancho del triángulo:");
    let alto = prompt("Ingrese el alto del triángulo");
    console.log(`El área del triángulo con ancho de ${ancho} y altura de ${alto} propuesto es ${ (ancho * alto) / 2}`);
}

if (figura == "B") {
    let ancho = prompt("Ingrese el ancho del rectángulo:");
    let alto = prompt("Ingrese el alto del rectángulo");
    console.log(`El área del rect+angulo con ancho de ${ancho} y altura de ${alto} propuesto es ${ (ancho * alto)}`);
}

if (figura == "C") {
    let diametro = prompt("Ingrese el diámetro del circulo:");
    console.log(`El área del circulo propuesto con un diámetro de ${diametro} es ${ Math.PI * (((diametro / 2) * (diametro / 2)))}`);
}