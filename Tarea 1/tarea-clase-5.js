const $BOTON_CALCULAR = document.querySelector('#calcular');

function calcularSalarioMensual(salarioAnual) {
	const MESES_EN_ANIO = 12;
	return salarioAnual / MESES_EN_ANIO;
}

function mostrarMensaje(salarioMensual, inputSalarioMensual) {
	const $MENSAJE_ALERTA = document.querySelector('#alerta');
	if(salarioMensual === 0) {
		inputSalarioMensual.value = '';
		$MENSAJE_ALERTA.innerText = 'No ingresaste ningún numero';
	} else {
		inputSalarioMensual.value = salarioMensual;
		$MENSAJE_ALERTA.innerText = '';
	}
}

$BOTON_CALCULAR.onclick = function() {
	const SALARIO_ANUAL = Number(document.querySelector('#ingreso-salario').value);
	const $SALARIO_MENSUAL = document.querySelector('#salario-mensual');
	let salarioMensual = calcularSalarioMensual(SALARIO_ANUAL);
	mostrarMensaje(salarioMensual, $SALARIO_MENSUAL);
	return false;
}
