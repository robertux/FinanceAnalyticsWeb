var LoginFormComponent = {
	components: {
		'user-name-input': UserNameComponent,
		'password-input': PasswordComponent,
		'submit-button': SubmitComponent
	},
	data: function() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		doLogin: function() {
			console.log("username: " + this.username);
			console.log("password: " + this.password);
			window.location.href = "index.html";
		}
	},
	template: `
		<div class="panel">
			<p class="panel-heading"><span>Login</span></p>
			<div class="panel-block">
				<form id="login-form">
					<user-name-input v-model="username"></user-name-input>
					<password-input v-model="password"></password-input>
					<submit-button v-on:submit="doLogin()"></submit-button>
				</form>
			</div>
		</div>
	`
}
