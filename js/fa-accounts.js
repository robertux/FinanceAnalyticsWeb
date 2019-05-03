var vueApp = new Vue({
	el: '#app',
	components: {
		'account-list': AccountListComponent,
		'account-type-select': AccountTypeSelectComponent
	},
	data: {
		accounts: [
			{alias: 'Main account', 	numberMask: '****1215',	type: 'Savings', 		currency: '$', balance: 223.50},
			{alias: 'Budget account', 	numberMask: '****0900',	type: 'Savings', 		currency: '$', balance: 543.10},
			{alias: 'Credit card', 		numberMask: '****3261',	type: 'Credit card', 	currency: '$', balance: 1240.35},
			{alias: 'Wallet', 			numberMask: '****', 	type: 'Cash', 			currency: '$', balance: 25.15}
		],
		accountTypes: ['Savings', 'Credit card', 'Loan', 'Cash']
	}
});
