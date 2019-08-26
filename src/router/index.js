import Vue from 'vue'
import Router from 'vue-router'

import defaultRouters from './default'
import adminRouters from './admin'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
			meta: {
				index: 0,
				title: "首页"
			}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( '@/views/About.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => import( '@/views/board/index.vue')
    }
  ].concat(defaultRouters, adminRouters)
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})


export default router
