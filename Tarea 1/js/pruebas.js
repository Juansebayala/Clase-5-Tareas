function comprobarCalcularSalarioMensual() {
	console.assert(calcularSalarioMensual(1200000) === 100000,
		'Calcular Salario Mensual no divide el numero recibido en 12 (meses) correctamente'
		);
}

function comprobarValidarSalario() {
	console.assert(validarSalario(0) === false,
		'Validar Salario no comprueba que el usuario no haya ingresado un salario'
		);

	console.assert(validarSalario(1000000) === true,
		'Validar Salario no comprueba que el usuario haya ingresado un salario'
		);
}

comprobarCalcularSalarioMensual();
comprobarValidarSalario();
