import Vue from 'vue'
import Router from 'vue-router'
// import index from "../pages/index"
import nav from "../pages/nav"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    }
  ]
})
