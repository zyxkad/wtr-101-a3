import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
	],
	scrollBehavior(to, from, savedPos) {
		if (savedPos) {
			return savedPos
		}
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		}
		return { top: 0 }
	},
})

export default router
