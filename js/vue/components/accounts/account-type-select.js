var AccountTypeSelectComponent = {
	props: {types: {type: Array, required: true}},
	data: function() {
		return {
			selected: ''
		}
	},
	template: `
		<div class="select is-multiple">
			<select v-model="selected" multiple size="5">
				<option disabled>Select one</option>
				<option v-for="type in types">{{type}}</option>
			</select>
		</div>
	`
}
