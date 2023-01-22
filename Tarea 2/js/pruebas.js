function probarModificarTitulo() {
	console.assert(modificarTitulo('') === false,
		'Modificar Titulo no verifica que el primer nombre ingresado esté vacio'
		);
}

function probarValidarNombresIngresados() {
	console.assert(validarNombresIngresados('', 'Sebastián', 'Ayala', 21) === 0,
		'Validar Nombres Ingresados no valida que el usuario haya ingresado su primer nombre'
		);

	console.assert(validarNombresIngresados('Juan', 'Sebastián', '', 21) === 0,
		'Validar Nombres Ingresados no valida que el usuario haya ingresado su apellido'
		);

	console.assert(validarNombresIngresados('Juan', 'Sebastian', '') === 0,
		'Validar Nombres Ingresados no valida que el usuario haya ingresado su edad'
		);

	console.assert(validarNombresIngresados('Juan', '', 'Ayala', 21) === 1,
		'Validar Nombres Ingresados no valida que el usuario haya ingresado su segundo nombre'
		);

	console.assert(validarNombresIngresados('Juan', 'Sebastian', 'Ayala', 21) === 2,
		'Validar Nombres Ingresados no valida que el usuario haya ingresado todos sus datos'
		);
}

probarModificarTitulo()
probarValidarNombresIngresados()
