
var main = new Vue({
	el : '#main',

	data: {
		folio: '3455',
		destino: 'Laboratorio Fotoquimico - CLAF'
	},

})

var modal = new Vue({
	el : '#modal',

	data: {
		titulo: 'RANCHO "LA JOYA"',
		caracteristicas: '35 NNOBN SS, Desconocido, MEX, 1940'
	},

})

var edicion = new Vue({
	el : '#edicion',

	data: {
		titulo: 'Colegio Militar',
		realizador: 'Desconocido',
		anio: '1932',
		pais: 'MEX'
	},
})

var edicion2 = new Vue({
	el : '#edicion2',

	data: {
		formato: '35',
		soporte: 'N',
		emulsion: 'No',
		color: 'BN',
		rollos: '9 COMP',
		audio: 'D-ITA SUBT SPA'
	},
})

var edicion3 = new Vue({
	el : '#edicion3',

	data: {
		rollos: '9 COMP',
		audio: 'D-ITA SUBT SPA'
	},
})

var resumen = new Vue({
	el : '#resumen',

	data: {
		procedencia: 'DONATIVO SR. SALVADOR BARBABOSA',
		contacto: 'Subdirección de Acervo',
		nat_ingreso: 'DONATIVO'
	},
})