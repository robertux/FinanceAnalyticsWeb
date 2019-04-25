var UserNameComponent = {
	props: ['val'],
	template: `
		<div class="field">
			<div class="control has-icons-left">
				<input class="input" type="text" placeholder="User name" v-model="val" />
				<span class="icon is-left"><i class="fas fa-user"></i></span>
			</div>
		</div>
	`
}
