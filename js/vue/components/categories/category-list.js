var CategoryListComponent = {
	components: {
		'category-row': CategoryRowComponent
	},
	props: ['categories'],
	template: `
		<div class="panel">
			<p class="panel-heading"><span>Categories</span></p>
			<div class="panel-block">
		
				<table class="table is-narrow is-fullwidth">
					<tbody>
						<category-row v-for="category in categories" v-bind:categoryname="category" v-on:category-row-click="$emit('category-click', category)"></category-row>
					</tbody>
				</table>

			</div>
		</div>
	`
}
