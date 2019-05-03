var AccountRowComponent = {
	props: {account: {type: Object, required: true}},
	methods: {
		accountColor: function(account) {
			return (account.balance >= 0? 'has-text-success': 'has-text-danger');
		}
	},
	template: `
		<div class="account columns">
			<div class="account-content column is-11">
				<div class="account-header">
					<a  href="javascript:void(0);" v-on:click="$emit('account-click', account)" class="account-alias subtitle">{{account.alias}}</a>
				</div>
				<div class="account-number has-text-grey">
					<span class="transaction-account is-size-7"><span class="icon"><i class="fas fa-credit-card"></i></span>{{account.numberMask}}</span>
				</div>
				<div class="account-type has-text-grey">
					<span class="account-type-detail is-size-7"><span class="icon"><i class="fas fa-tag"></i></span>{{account.type}}</span>
				</div>
			</div>
			<div class="account-balance column is-1"><span class="is-pulled-right" v-bind:class="accountColor(account)">{{account.currency}}{{account.balance}}</span></div>
		</div>
	`
}
