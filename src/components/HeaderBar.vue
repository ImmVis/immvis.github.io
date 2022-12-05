<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
		<div class="container-fluid">

			<!-- <router-link :to="{ name: 'Home' }" class="navbar-brand" :class="{ active: $route.name == name }"> -->
				<!-- ImmVis -->
			<!-- </router-link> -->

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-sm-0">

					<li v-for="page in pages" :key="page.route" class="nav-item">
						<router-link :to="{ name: page.route }" class="nav-link" :class="{ active: $route.name == page.route, disabled: !page.enabled }">
							{{ page.title }}
						</router-link>
					</li>
				</ul>
				<!-- <form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form> -->
			</div>
		</div>
	</nav>
</template>


<script>
	export default {
		data() {
			return {
				pages: [
					{
						route: 'Home',
						title: 'ImmVis',
						enabled: true,
					},
					{
						route: 'Staff',
						title: 'Staff',
						enabled: false,
					},
					{
						route: 'Research',
						title: 'Research',
						enabled: false,
					},
					{
						route: 'Courses',
						title: 'Courses',
						enabled: false,
					},
					{
						route: 'ExjobbList',
						title: 'Exjobb',
						enabled: true,
					},
				]
			};
		}
	}
</script>


<style scoped>
	.nav-item {
		margin-left: .75em;
		margin-right: .75em;
	}
</style>