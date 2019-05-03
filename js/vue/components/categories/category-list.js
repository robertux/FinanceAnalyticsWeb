var CategoryListComponent = {
	components: {
		'category-row': CategoryRowComponent
	},
	props: {categories: {type: Array, required: true}},
	template: `
		<div class="panel">
			<p class="panel-heading"><span>Categories</span></p>
			<div class="panel-block">
		
				<table class="table is-narrow is-fullwidth">
					<tbody>
						<tr v-for="category in categories" v-bind:key="category.name">
							<td>
								<category-row v-bind:category="category" v-on:category-row-click="$emit('category-click', category)"></category-row>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
		</div>
	`
}
