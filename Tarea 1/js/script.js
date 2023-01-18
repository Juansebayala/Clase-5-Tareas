const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(event) {
	const salarioAnual = Number(document.querySelector('#ingreso-salario').value);
	const $salarioMensual = document.querySelector('#salario-mensual');
	const salarioMensual = calcularSalarioMensual(salarioAnual);
	mostrarMensaje(salarioMensual, $salarioMensual);
	event.preventDefault();
}

function mostrarMensaje(salarioMensual, inputSalarioMensual) {
	const haySalario = validarSalario(salarioMensual);
	if (!haySalario) {
		mostrarMensajeAlerta();
		inputSalarioMensual.value = '';
	} else {
		ocultarMensajeAlerta();
		inputSalarioMensual.value = salarioMensual.toFixed(2);
	}
}

function validarSalario(salario) {
	if (salario === 0) {
		return false;
	} else {
		return true;
	}
}

function mostrarMensajeAlerta() {
	const $mensajeAlerta = document.querySelector('#alerta');
	$mensajeAlerta.className='';
}

function ocultarMensajeAlerta() {
	const $mensajeAlerta = document.querySelector('#alerta');
	$mensajeAlerta.className='oculto';
}
