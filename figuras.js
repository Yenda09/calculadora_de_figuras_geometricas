// Codigo del Cuadrado

console.group("Cuadrado");

const ladoDelCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoDelCuadrado + "cm");

function perimetroDelCuadrado(lado) {
    return lado * 4;
}

function areaDelCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del Triángulo

console.group("Triangulo");

const lado1DelTriangulo = 6;
const lado2DelTriangulo = 6;
const baseDelTriangulo = 4;
console.log("Los lados del triángulo son: " + lado1DelTriangulo + "cm," + lado2DelTriangulo + "cm," + baseDelTriangulo + "cm.");

const alturaDelTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaDelTriangulo + "cm");

function perimetroDelTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base; 
}


function areaDelTriangulo(base, altura) {
    return (base * altura)/2;
}

console.groupEnd();

//Triángulo Isósceles

console.group("Triángulo Isósceles");

const lado1Isosceles = 5;
const lado2Isosceles = 5;
const baseIsoceles = 4;

function alturaIsosceles(lado1, lado2, base) {
    if (lado1 != lado2) {
        alert("Creo que no es un Triángulo Isósceles, verfica que los lados midan lo mismo")
    }
    else {
        const primerPaso = (lado1 * lado2) - (base**2)/4;
        const segundoPaso = Math.sqrt(primerPaso);

        return segundoPaso;
    }
}

console.groupEnd();

// Codigo del Circulo

console.group("Circulo");

const radioDelCirculo = 4;
console.log("El radio del círculo es: " + radioDelCirculo + "cm");

function diametroDelCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es " + PI);


function perimetroDelCirculo(radio) {
    const diametro = diametroDelCirculo(radio)
    return diametro * PI;
}


function areaDelCirculo(radio) {
    return radio * radio * PI
}

console.groupEnd();

// Interacción con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroDelCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaDelCuadrado(value);
    alert(area);
}

//Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroDelTriangulo(value1,value2,valueBase);
    alert(perimetro);
 }

 function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    const area = areaDelTriangulo(valueBase,valueAltura);
    alert(area);
 }

// Triángulo Isósceles

function calcularAlturaIsosceles() {
    const input1 = document.getElementById("inputIsosceles1");
    const value1 = Number(input1.value);
    const inputBase = document.getElementById("inputIsoscelesBase");
    const valueBase = Number(inputBase.value);

    const altura = alturaIsosceles(value1, value1, valueBase);
    alert (altura);
}

//Círculo

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = Number(inputRadio.value);

    const perimetro = perimetroDelCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = Number(inputRadio.value);

    const area = areaDelCirculo(valueRadio);
    alert(area);
}