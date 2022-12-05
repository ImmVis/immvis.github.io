<template>
	<BannerBar title="Immersive Visualization" />

	<div class="container">
		
		<h1>Exjobb</h1>

		<table class="table">
			<thead>
				<tr>
					<th scope="col">Title</th>
					<th scope="col">Location</th>
					<th scope="col">Students</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(jobb, index) in projectList" :key="index">
					<td>
						<router-link :to="{ name: 'Exjobb', params: { jobbId: jobb.id } }">
							{{ jobb.title }}
						</router-link>
					</td>
					<td>
						{{ jobb.location }}
					</td>
					<td>
						{{ jobb.students }}
					</td>
				</tr>
			</tbody>
		</table>

	</div>
</template>


<script>
	import BannerBar from './BannerBar.vue'
	import ProjectList from '../exjobb/list.js'

	export default {
		name: 'ExjobbListPage',
		components: { BannerBar },
		data() {
			return {
				projectList: ProjectList,
			};
		},
	}
</script>


<style scoped>
	.jumbotron {
		background-image: url("https://picsum.photos/2000/500");
	}
</style>
