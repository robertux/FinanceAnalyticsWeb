var vueApp = new Vue({
	el: '#app',
	components: {
		'category-list': CategoryListComponent
	},
	data: {
		categories: [{name: 'General'}, 
			{name: 'Transporte'}, 
			{name: 'Medicamentos'}, 
			{name: 'Utilidades'}, 
			{name: 'Alimentación'}, 
			{name: 'Vestuario'}, 
			{name: 'Entretenimiento'}, 
			{name: 'Salario'}, 
			{name: 'Cuentas por pagar'}, 
			{name: 'Supermercado'}]
	}
});
