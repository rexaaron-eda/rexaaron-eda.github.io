import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'profile',
			component: () => import('@/views/profile/ProfileIndex.vue'),
			meta: {title: 'Rex Aaron Eda - Portfolio'}
		},
		{
			path: '/advocacy',
			name: 'advocacy',
			component: () => import('@/views/advocacy/AdvocacyIndex.vue')
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.path !== from.path) {
			return {top: 0, behavior: 'smooth'}
		}

		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			}
		}
		if (savedPosition) {
			return savedPosition
		}

		// Default scroll to top
		return {top: 0, behavior: 'smooth'}
	}
})

router.beforeEach((to, from, next) => {
	const pageTitle = to.meta.title as string || 'Heartbeat Harmony'
	document.title = pageTitle

	if (to.path !== from.path) {
		next()
	} else {
		next()
	}
})

export default router
