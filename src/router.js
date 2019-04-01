import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('./views/home').then(module => {
    resolve(module)
  })
}
const Hot = (resolve) => {
  import('./views/hot').then(module => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('./views/search').then(module => {
    resolve(module)
  })
}

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
  ]
})
