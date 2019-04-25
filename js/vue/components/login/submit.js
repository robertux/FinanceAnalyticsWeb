var SubmitComponent = {
	props: [],
	template: `
		<div class="field">
			<div class="control">
				<button class="button" type="button" v-on:click="$emit('submit')">Login</button>
			</div>
		</div>
	`
}
