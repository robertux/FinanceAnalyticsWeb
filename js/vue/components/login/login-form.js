var LoginFormComponent = {
	props: ['username', 'password'],
	components: {
		'user-name-input': UserNameComponent,
		'password-input': PasswordComponent,
		'submit-button': SubmitComponent
	},
	methods: {
		doLogin: function() {
			window.location.href = "index.html";
		}
	},
	template: `
		<div class="panel">
			<p class="panel-heading"><span>Login</span></p>
			<div class="panel-block">
				<form id="login-form">
					<user-name-input v-bind:val="username"></user-name-input>
					<password-input v-bind:val="password"></password-input>
					<submit-button v-on:submit="doLogin()"></submit-button>
				</form>
			</div>
		</div>
	`
}
