var CategoryRowComponent = {
	props: {category: {type: String, required: true}},
	template: `
		<div class="category columns">
			<div class="category-content column is-11">
				<div class="category-header">
					<a  href="javascript:void(0);" v-on:click="$emit('category-row-click')" class="category-name subtitle">{{category.name}}</a>
				</div>
			</div>
		</div>
	`
}
