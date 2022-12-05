<template>
	<BannerBar title="Immersive Visualization" />

	<div class="container">

		<h1>ImmVis</h1>
		<p>Under construction</p>
		<hr>

		<router-link :to="{ name: 'ExjobbList' }" class="">
			Click here to view all available exjobbs.
		</router-link>
	</div>
</template>


<script>
	import BannerBar from './BannerBar.vue'

	export default {
		name: 'HomePage',
		components: { BannerBar },
		props: {
			msg: String
		}
	}
</script>


<style scoped>
	.jumbotron {
		background-image: url("../assets/joel-filipe-_AjqGGafofE-unsplash.jpg");
		background-position: 50% 35%;
	}
</style>
