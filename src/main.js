import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Shows from './components/Shows'
import Show from './components/Show'
import Loader from './components/layout/Loader'

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.material.registerTheme('default', {
  primary: 'amber',
  background: 'white'
})

// Components
Vue.component('spinner', Loader);

// Routes
const routes = [
	{path: '/', component: Shows},
	{path: '/show/:id', component: Show}
]

const router = new VueRouter({
	routes,
	mode: 'history',
});

// Init
new Vue({
	el: '#app',
	router,
  	render: h => h(App)
});