var UserNameComponent = {
	props: ['value'],
	template: `
		<div class="field">
			<div class="control has-icons-left">
				<input class="input" type="text" placeholder="User name" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
				<span class="icon is-left"><i class="fas fa-user"></i></span>
			</div>
		</div>
	`
}
