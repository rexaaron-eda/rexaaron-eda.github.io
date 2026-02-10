import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'profile',
			component: () => import('@/views/profile/ProfileIndex.vue')
		},
		{
			path: '/advocacy',
			name: 'advocacy',
			component: () => import('@/views/advocacy/AdvocacyIndex.vue')
		}
	]
})

export default router
