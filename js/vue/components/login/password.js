var PasswordComponent = {
	props: {value: {type: String, required: true}},
	template: `
		<div class="field">
			<div class="control has-icons-left">
				<input class="input" type="password" placeholder="Password" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
				<span class="icon is-left"><i class="fas fa-lock"></i></span>
			</div>
		</div>
	`
}
