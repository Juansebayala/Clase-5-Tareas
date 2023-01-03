const $NUMEROS = document.querySelectorAll('li');
const $MENSAJE_PROMEDIO = document.querySelector('#mensaje-promedio');
const $MENSAJE_MAS_PEQUENIO = document.querySelector('#mensaje-mas-pequenio');
const $MENSAJE_MAS_GRANDE = document.querySelector('#mensaje-mas-grande');
const $MENSAJE_MAS_FRECUENTE = document.querySelector('#mensaje-mas-frecuente');

function agregarNumerosAArray(elementosLi) {
	let contenedor = [];
	for (let i = 0; i < elementosLi.length; i++) {
		contenedor.push(Number(elementosLi[i].innerText));
	}
	return contenedor;
}

let numeros = agregarNumerosAArray($NUMEROS);

function calcularPromedio(numeros) {
	let sumaNumeros = 0;
	for (let i = 0; i < numeros.length; i++) {
		sumaNumeros += numeros[i];
	}
	return sumaNumeros / numeros.length;
}

function calcularNumeroMasPequenio(numeros) {
	let numeroMasPequenio = numeros[0];
	for (let i = 1; i < numeros.length; i++) {
		if(numeros[i] < numeroMasPequenio) {
			numeroMasPequenio = numeros[i];
		}
	}
	return numeroMasPequenio;
}

function calcularNumeroMasGrande(numeros) {
	let numeroMasGrande = numeros[0];
	for (let i = 1; i < numeros.length; i++) {
		if (numeros[i] > numeroMasGrande) {
			numeroMasGrande = numeros[i];
		}
	}
	return numeroMasGrande;
}

function calcularNumerosRepetidos(numeros) {
	let numerosRepetidos = [];
	for (let i = 0; i < numeros.length; i++) {
		let numeroRepetido = [];
		for (let j = 0; j < numeros.length; j++) {
			if (numeros[j] === numeros[i]) {
				numeroRepetido.push(numeros[j]);
			}
		}
		numerosRepetidos.push(numeroRepetido);
	}
	return numerosRepetidos;
}

function calcularNumeroMasFrecuente(numeros) {
	let numeroMasFrecuente;
	let numerosRepetidos = calcularNumerosRepetidos(numeros);
	for (let i = 0; i < numerosRepetidos.length - 1; i++) {
		if (numerosRepetidos[i].length > numerosRepetidos[i+1].length) {
			numeroMasFrecuente = numerosRepetidos[i][0];
		} else {
			numeroMasFrecuente = numerosRepetidos[i+1][0];
		}
	}
	return numeroMasFrecuente;
}

const PROMEDIO = calcularPromedio(numeros);
const NUMERO_MAS_PEQUENIO = calcularNumeroMasPequenio(numeros);
const NUMERO_MAS_GRANDE = calcularNumeroMasGrande(numeros);
const NUMERO_MAS_FRECUENTE = calcularNumeroMasFrecuente(numeros);

$MENSAJE_PROMEDIO.innerText = `El promedio es ${PROMEDIO}`;
$MENSAJE_MAS_PEQUENIO.innerText = `El número más pequeño es ${NUMERO_MAS_PEQUENIO}`;
$MENSAJE_MAS_GRANDE.innerText = `El número más grande es ${NUMERO_MAS_GRANDE}`;
$MENSAJE_MAS_FRECUENTE.innerText = `El número más frecuente es ${NUMERO_MAS_FRECUENTE}`;