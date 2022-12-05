import { createApp } from 'vue'
import { marked } from 'marked';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'
import router from '@/router';


const markedMixin = {
	methods: {
		md: (input) => {
			return marked(input);
		}
	}
};


const app = createApp(App);
app.use(router);
app.mixin(markedMixin);
app.mount('#app')
