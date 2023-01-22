const $botonIngresar = document.querySelector('#ingresar');

$botonIngresar.onclick = function() {
	const primerNombre = document.querySelector('#primer-nombre-usuario').value;
	const segundoNombre = document.querySelector('#segundo-nombre-usuario').value;
	const apellido = document.querySelector('#apellido-usuario').value;
	const edad = document.querySelector('#edad-usuario').value;
	modificarTitulo(primerNombre);
	mostrarMensaje(primerNombre, segundoNombre, apellido, edad);
	return false;
}

function modificarTitulo(primerNombre) {
	const $titulo = document.querySelector('#titulo');
	if (primerNombre === '') {
		return false;
	}
	$titulo.innerText = `Bienvenido, ${primerNombre}!`;
}

function mostrarMensaje(primerNombre, segundoNombre, apellido, edad) {
	const $cuadroTexto = document.querySelector('#info-usuario');
	const hayNombres = validarNombresIngresados(primerNombre, segundoNombre, apellido, edad);

	if (hayNombres === 0) {
		$cuadroTexto.value = `Tiene que ingresar los valores que se le solicitan.`;
	} else if (hayNombres === 1) {
		$cuadroTexto.value = `Hola ${primerNombre} ${apellido}, tienes ${edad} años.`;
	} else {
		$cuadroTexto.value = `Hola ${primerNombre} ${segundoNombre} ${apellido}, tienes ${edad} años.`;
	}
}

function validarNombresIngresados(primerNombre, segundoNombre, apellido, edad) {
	if (primerNombre === '' || apellido === '' || edad === '') {
		return 0;
	} else if (segundoNombre === '') {
		return 1;
	} else {
		return 2;
	}
}
