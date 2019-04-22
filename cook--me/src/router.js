import Vue from 'vue'
import Router from 'vue-router'
import home from './components/page/home'
import shipu from './components/page/shipu'
import cai from './components/page/cai'
import people from './components/page/people'
import login from './components/page/login'
import register from './components/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/shipu',
      name: 'shipu',
      component: shipu
    },
    {
      path:'/cai',
      name:'cai',
      component: cai
    },
    {
      path:'/people',
      name:'people',
      component: people
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function () {
      //   return import(/* webpackChunkName: "about" */ './views/About.vue')
      // }

  ]
})
