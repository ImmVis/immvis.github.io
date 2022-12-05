<template>
	<HeaderBar />

	<router-view></router-view>

	<FooterBar />
</template>


<script>
	import HeaderBar from './components/HeaderBar.vue'
	import FooterBar from './components/FooterBar.vue'

	export default {
		name: 'App',
		components: { HeaderBar, FooterBar }
	}
</script>


<style>
	#app {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}

	.container {
		flex: auto;
	}
	@media (min-width: 1200px) {
		.container{
			max-width: 970px;
		}
	}
</style>
