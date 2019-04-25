var PasswordComponent = {
	props: ['val'],
	template: `
		<div class="field">
			<div class="control has-icons-left">
				<input class="input" type="password" placeholder="Password" v-model="val" />
				<span class="icon is-left"><i class="fas fa-lock"></i></span>
			</div>
		</div>
	`
}
