import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Home from './components/Home'

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
	{path: '/', component: Home}
]

const router = new VueRouter({
	routes,
	mode: 'history',
});

new Vue({
	el: '#app',
	router,
  	render: h => h(App)
});