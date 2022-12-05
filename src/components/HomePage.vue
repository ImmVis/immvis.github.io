<template>
	<BannerBar title="Immersive Visualization" />

	<div class="container">

		<h1>ImmVis</h1>
		<p>Under construction</p>
		<hr>

		<router-link :to="{ name: 'ExjobbList' }" class="">
			Click here for to view all listed exjobbs.
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
		background-image: url("https://picsum.photos/2000/600");
	}
</style>
