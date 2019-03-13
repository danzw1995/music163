import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Hot from './views/hot.vue'
import Search from './views/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ],
  linkExactActiveClass: 'active'
})
