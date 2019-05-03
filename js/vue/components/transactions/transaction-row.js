var TransactionRowComponent = {
	props: {
		transaction: {type: Object, required: true}
	},
	methods: {
		transactionColor: function(transaction) {
			return (transaction.amount >= 0? 'has-text-success': 'has-text-danger');
		}
	},
	template: `
		<div class="transaction columns">
			<div class="transaction-content column is-11">
				<div class="transaction-header">
					<a  href="javascript:void(0);" v-on:click="$emit('transaction-click', transaction)" class="transaction-title subtitle">{{transaction.title}}</a>
				</div>
				<div class="transaction-source has-text-grey">
					<span class="transaction-account is-size-7"><span class="icon"><i class="fas fa-credit-card"></i></span><a href="#">{{transaction.account.alias}} ({{transaction.account.number}})</a></span>
					<span class="transaction-text is-size-7"><span class="icon"><i class="fas fa-file-alt"></i></span>{{transaction.description}}</span>
				</div>
				<div class="transaction-details has-text-grey">
					<span class="transaction-date is-size-7"><span class="icon"><i class="fas fa-clock"></i></span>{{transaction.date}}</span>
					<span class="transaction-category is-size-7"><span class="icon"><i class="fas fa-tag"></i></span>{{transaction.categoryName}}</span>
			</div>
			</div>
			<div class="transaction-price column is-1"><span class="is-pulled-right" v-bind:class="transactionColor(transaction)">{{transaction.currency}}{{transaction.amount}}</span></div>
		</div>
	`
}
