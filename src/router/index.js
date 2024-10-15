import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/Home.vue'),
      children: [
        {
          name: 'getlist',
          path: '',
          component: () => import('@/components/GetList.vue')
        },
      ]

    },

  ]
})

export default router
