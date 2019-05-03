var AccountListComponent = {
	components: {
		'account-row': AccountRowComponent
	},
	props: {accounts: {type: Array, required: true}},
	template: `
		<div class="panel">
			<p class="panel-heading"><span>Accounts</span></p>
			<div class="panel-block">
				<table class="table is-narrow is-fullwidth">
					<tbody>
						<tr v-for="acc in accounts">
							<td>
								<account-row v-bind:account="acc" v-on:account-click="$emit('account-click', acc)"></account-row>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`
}
