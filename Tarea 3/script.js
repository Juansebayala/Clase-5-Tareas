const $BOTON_AGREGAR = document.querySelector('#boton-agregar');
const $BOTON_CALCULAR = document.querySelector('#boton-calcular');

let listaVideosAgregados = [];

function agregarVideos(horas, minutos, segundos, contenedorVideos) {
	//comprueba si ya hay horarios agregados para sumarle los nuevos horarios que se agregan
	if (contenedorVideos.length === 3) {
		contenedorVideos = [contenedorVideos[0] += horas, contenedorVideos[1] += minutos, contenedorVideos[2] += segundos];
	} else {
		contenedorVideos.push(horas, minutos, segundos);
	}
}

function calcularDuracionTotal(contenedorVideos) {
	let minutosAgregados;
	const MAXIMO_MINUTOS_SEGUNDOS = 60;
	//Calcula segundos y agrega minutos correspondientes
	if (contenedorVideos[2] >= MAXIMO_MINUTOS_SEGUNDOS) {
		minutosAgregados = parseInt(contenedorVideos[2] / MAXIMO_MINUTOS_SEGUNDOS);
		contenedorVideos[1] += minutosAgregados;
		contenedorVideos[2] -= (minutosAgregados * MAXIMO_MINUTOS_SEGUNDOS);
	}
	//Calcula minutos y agrega horas correspondientes
	if (contenedorVideos[1] >= MAXIMO_MINUTOS_SEGUNDOS) {
		minutosAgregados = parseInt(contenedorVideos[1] / MAXIMO_MINUTOS_SEGUNDOS);
		contenedorVideos[0] += minutosAgregados;
		contenedorVideos[1] -= (minutosAgregados * MAXIMO_MINUTOS_SEGUNDOS);
	}
}

$BOTON_AGREGAR.onclick = function(e, videosAgregados = listaVideosAgregados) {
	const $HORAS_INPUT = document.querySelector('#horas');
	const $MINUTOS_INPUT = document.querySelector('#minutos');
	const $SEGUNDOS_INPUT = document.querySelector('#segundos');
	const $MENSAJE_ALERTA = document.querySelector('#mensaje-alerta');
	const HORAS_INPUT = Number($HORAS_INPUT.value);
	const MINUTOS_INPUT = Number($MINUTOS_INPUT.value);
	const SEGUNDOS_INPUT = Number($SEGUNDOS_INPUT.value);
	if (HORAS_INPUT === 0 && MINUTOS_INPUT === 0) {
		$MENSAJE_ALERTA.innerText = 'Debes agregar una duración de una clase válida';
	} else if (MINUTOS_INPUT >= 59 || SEGUNDOS_INPUT >= 59) {
		$MENSAJE_ALERTA.innerText = 'Los minutos o segundos no deben ser mayor a 59';
	} else {
		$MENSAJE_ALERTA.innerText = '';
		agregarVideos(HORAS_INPUT, MINUTOS_INPUT, SEGUNDOS_INPUT, videosAgregados);
		$HORAS_INPUT.value = '';
		$MINUTOS_INPUT.value = '';
		$SEGUNDOS_INPUT.value = '';
	}
	return false;
}

$BOTON_CALCULAR.onclick = function(e, videosAgregados=listaVideosAgregados) {
	const $MENSAJE_FINAL = document.querySelector('#mensaje-final');
	calcularDuracionTotal(videosAgregados);
	$MENSAJE_FINAL.innerText = `La duración total de los videos agregados es: ${videosAgregados[0]} horas, ${videosAgregados[1]} minutos y ${videosAgregados[2]} segundos.`;
	return false;
}
