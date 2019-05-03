var vueApp = new Vue({
	el: '#app',
	components: {
		'transaction-list': TransactionListComponent
	},
	data: {
		transactions: [
			{title: 'Compra combustible Texaco', account: {alias: 'Credit Card', number: '****3261'}, date: '2019-04-20 10:25:40 a.m.', categoryName: 'Transporte', currency: '$', amount: -23.50},
			{title: 'Pago Recibo CAESS', account: {alias: 'Credit Card', number: '****3261'}, date: '2019-04-19 09:32:58 a.m.', categoryName: 'Utilidades', currency: '$', amount: -43.48},
			{title: 'Cena Café 4 Monkeys', account: {alias: 'Main Account', number: '****1215'}, date: '2019-04-18 08:43:12 p.m.', categoryName: 'Alimentación', currency: '$', amount: -31.76},
			{title: 'Jarabe Gammatos, Inhalador Ventidos e Inhalador Tropivent', account: {alias: 'Cash Wallet', number: '****'}, date: '2019-04-18 04:10:10 p.m.', categoryName: 'Medicamentos', currency: '$', amount: -29.35},
			{title: 'Gastos de transporte público de la semana', account: {alias: 'Cash Wallet', number: '****'}, date: '2019-04-18 10:04:12 a.m.', categoryName: 'Transporte', currency: '$', amount: -4.75},
			{title: 'Pago Renta de la casa', account: {alias: 'Budgets Account', number: '****0900'}, date: '2019-04-17 11:50:55 a.m.', categoryName: 'Cuentas por pagar', currency: '$', amount: -250.00},
			{title: 'Pago Quincena Abril', account: {alias: 'Main Account', number: '****1215'}, date: '2019-04-15 09:03:15 a.m.', categoryName: 'Salario', currency: '$', amount: 1470.47}
		]
	}
});
