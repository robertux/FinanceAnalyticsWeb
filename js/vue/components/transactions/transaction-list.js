var TransactionListComponent = {
	components: {
		'transaction-row': TransactionRowComponent
	},
	props: { 
		transactions: {type: Array, required: true}
	},
	template: `
		<div class="panel">
			<p class="panel-heading"><span>Transactions</span></p>
			<div class="panel-block">
		
				<table class="table is-narrow is-fullwidth">
					<tbody>
						<tr v-for="transaction in transactions">
							<td>
								<transaction-row v-bind:transaction="transaction" v-on:transaction-click="$emit('transaction-click', transaction)"></transaction-row>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`
}
