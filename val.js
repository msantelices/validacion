$('#formulario').on('submit', function(){

	var nombre = $('#nombre').val()
	var email = $('#email').val()
	var telefono = $('#telefono').val()

	if( nombre.length < 3 ) {
		alert('Nombre invalido')
		return false;
	}


	// Validar correos
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
	if( !regex.test(email) ) {
		alert('Correo invalido')
		return false;
	}


	/*--- Validar telefonos ---*/

	// Elimina espacios en blanco
	var spaces = /\s/g
	if( spaces.test(telefono) ) {
		telefono = telefono.replace(/\s/g, '')
	}

	// Largo
	if( telefono.length < 9 || telefono.length > 12 ) {
		alert('Telefono invalido')
		return false;
	}

	// Solo numeros o simbolo +
	var telRegex = /[^0-9\+]/g
	if( telRegex.test(telefono) ) {
		alert('Telefono invalido')
	}

	// Con o sin codigo +569
	var codigo = '+569';
	let compare = telefono.slice(0, 4)

	if( telefono.length == 9 && telefono.charAt(0) == '9') {
		console.log('Correcto')
	} else if( telefono.length == 12 && compare == codigo) {
		console.log('Correcto')
	} else {
		console.log('Error')
	}


	return false;


})