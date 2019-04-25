import Vue from 'vue'
import Router from 'vue-router'
import home from './components/page/home'
import shipu from './components/page/shipu'
import cai from './components/page/cai'
import people from './components/page/people'
import gexin from './components/page/gexin'
import guanzhu from './components/page/guanzhu'
import passwordLogin from './components/login/passwordLogin'
import reg from './components/login/reg'
import green from './components/shopping/component-greens-shopping'


import loginRouter from "./router/login/loginRouter";
import shoppingRouter from "./router/shopping/shoppingRouter";

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
      component:people
    },
    {
      path:"/gexin",
      name:'gexin',
      component:gexin
    },
    {
      path:"/guanzhu",
      name:'guanzhu',
      component:guanzhu
    },
    {
      path:'/passwordLogin',
      name:'passwordLogin',
      component:passwordLogin
    },
    {
      path:'/reg',
      name:'reg',
      component:reg
    },
    {
      path:'/green',
      name:'green',
      component:green,
    },
    
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function () {
      //   return import(/* webpackChunkName: "about" */ './views/About.vue')
      // }

  ].concat(loginRouter,shoppingRouter)
})
