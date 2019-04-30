new Vue({
	el: '#app',
	components: {
		'category-list': CategoryListComponent
	},
	data: {
		categories: ['General', 'Transporte', 'Medicamentos', 'Utilidades', 'Alimentación', 'Vestuario', 'Entretenimiento', 'Salario', 'Cuentas por pagar', 'Supermercado']
	}
});
