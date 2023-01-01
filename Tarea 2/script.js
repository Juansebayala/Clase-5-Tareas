const $BOTON_INGRESAR = document.querySelector('#ingresar');

function mostrarMensaje(primerNombre, segundoNombre, apellido, edad) {
	const $CUADRO_TEXTO = document.querySelector('#info-usuario');
	let segundoNombreMensaje;
	if (primerNombre === '' || apellido === '' || edad === '') {
		$CUADRO_TEXTO.value = `Tiene que ingresar los valores que se le solicitan.`;
	} else if (segundoNombre === '') {
		$CUADRO_TEXTO.value = `Hola ${primerNombre} ${apellido}, tienes ${edad} años.`;
	} else {
		$CUADRO_TEXTO.value = `Hola ${primerNombre} ${segundoNombre} ${apellido}, tienes ${edad} años.`;
	}
}

function modificarTitulo(primerNombre) {
	const $TITULO = document.querySelector('#titulo');
	if (primerNombre === '') {
		return false;
	}
	$TITULO.innerText = `Bienvenido, ${primerNombre}!`
}

$BOTON_INGRESAR.onclick = function() {
	const PRIMER_NOMBRE = document.querySelector('#primer-nombre-usuario').value;
	const SEGUNDO_NOMBRE = document.querySelector('#segundo-nombre-usuario').value;
	const APELIIDO = document.querySelector('#apellido-usuario').value;
	const EDAD = document.querySelector('#edad-usuario').value;
	modificarTitulo(PRIMER_NOMBRE);
	mostrarMensaje(PRIMER_NOMBRE, SEGUNDO_NOMBRE, APELIIDO, EDAD);
	return false;
}