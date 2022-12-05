<template>
	<BannerBar title="Immersive Visualization" />

	<div class="container">

		<!-- Info box -->
		<h1>{{ myJobb.title }}</h1>
		<div class="row">
			<div class="col-md-12 col-lg-6 p-0">
				<div class="p-3">

					<table class="table">
						<tbody>
							<tr>
								<th>Location</th>
								<td>{{ myJobb.location }}</td>
							</tr>
							<tr>
								<th>Number of people</th>
								<td>{{ myJobb.students }}</td>
							</tr>
							<tr>
								<th>Contact</th>
								<td>
									<div v-for="person in myJobb.contact" :key="person.name" class="contact">
										<img :src="person.image">
										<a :href="person.url">{{ person.name }}</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
			<div class="col-md-12 col-lg-6 p-0 d-flex align-items-center image-box">
				<div class="p-3">
					<img v-if="myJobb.image" :src="myJobb.image">
					<img v-else src="https://picsum.photos/800/200">
				</div>
			</div>
		</div>

		<!-- Separator -->
		<hr class="opacity-0 my-4">

		<!-- Markdown content -->
		<div v-html="markdown"></div>

	</div>
</template>


<script>
	// import text from '../exjobb/markdowns/tracing_research_insights.md';

	import BannerBar from './BannerBar.vue'
	import ProjectList from '../exjobb/list.js'

	export default {
		name: 'ExjobbPage',
		props: [ 'jobbId' ],
		components: { BannerBar },
		data() {
			return {};
		},
		computed: {
			myJobb() {
				return ProjectList.find(jobb => jobb.id == this.jobbId);
			},
			markdown() {
				return this.md(this.myJobb.markdown);
			}
		}
	}
</script>


<style scoped>
	.jumbotron {
		background-image: url("../assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg");
		background-position: 50% 35%;
	}

	.contact {
		padding: 4px;
	}
	.contact img {
		width: 2em;
		height: 2em;
		border-radius: 100%;
		margin-right: .5em;
	}

	.image-box {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.image-box img {
		flex-shrink: 0;
		min-width: 100%;
		min-height: 100%;
		max-height: 300px;
	}
</style>
