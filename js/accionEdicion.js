// edicion
if(window.location.href.indexOf('edicion') > -1){
	var filaSeleccionada = window.location.href.substring(window.location.href.length - 1)
	console.log(filaSeleccionada)

	var btnGuardar = document.getElementById('btn-guardar');
	btnGuardar.addEventListener('click', function(e){
		e.preventDefault()
		window.location.href = window.location.origin + '/folio.html#' + filaSeleccionada;
	})

}else{
	// lista
	if(window.location.href.indexOf('#') > -1){
		 var idFila = window.location.href.substring(window.location.href.length - 1)
		 document.getElementById(idFila).innerHTML = 'Actualiza edición';
	}
}
