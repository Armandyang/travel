import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/home'
import City from '../city/city'
import Detail from '../detail/detail'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
				{
					path: '/',
					name: 'Home',
					component: Home
				},
				{
					path: '/city',
					name: 'City',
					component: City
				},
				{
					path: '/detail/:id',
					name: 'Detail',
					component: Detail
				}
						
	]
})
