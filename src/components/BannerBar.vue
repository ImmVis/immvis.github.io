<template>
	<div class="jumbotron p-4 mb-5">
		<div class="container py-5">
			<h1 class="display-5 text-white">{{ title }}</h1>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'BannerBar',
		props: [ 'title' ],
	}
</script>


<style scoped>
	.jumbotron {
		background: var(--bs-dark);
		background-size: cover;
		background-position: bottom;
		text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
	}
</style>