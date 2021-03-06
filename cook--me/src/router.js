import Vue from 'vue'
import Router from 'vue-router'
import home from './components/page/home'
import shipu from './components/page/shipu'
import cai from './components/page/cai'
import people from './components/page/people'
import topTab from './components/page/people/topTab'
import guanzhu from './components/page/people/guanzhu'
import fensi from './components/page/people/fensi'
import anotherPerson from './components/another/anotherPerson'
import anotherFans from "./components/another/anotherFans"
import anotherAttention from "./components/another/anotherAttention"

import information from './components/personal/information'
import personlRouter from './router/personal/personlRouter'

import passwordLogin from './components/login/passwordLogin'
import reg from './components/login/reg'
import green from './components/shopping/component-greens-shopping'
import loginRouter from "./router/login/loginRouter";
import shoppingRouter from "./router/shopping/shoppingRouter";
import caiRouter from "./router/cai/caiRouter";

import menuRouter from './router/menu/menuRouter';


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
      component:people,
      redirect:'/topTab',
      children:[
        {
          path:"/topTab",
          component:topTab,
          name:"topTab"
        },
        {
          path:"/guanzhu",
          component:guanzhu,
          name:"guanzhu"
        },
        {
          path:"/fensi",
          component:fensi,
          name:'fensi'
        },
      ]
    },
    {
      path:"/information",
      name:'information',
      component:information
    },
    {
      path:'/passwordLogin',
      name:'passwordLogin',
      component:passwordLogin,
			/* meta : {
				isAuthorization : true;
			} */
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
		{
			path:"/anotherPerson",
			name:'anotherPerson',
			component:anotherPerson,
			children:[
				{
					alias : "/",
				  path: '/anotherFans',
				  name: 'anotherFans',
				  component: anotherFans
				},
				{
				  path: '/anotherAttention',
				  name: 'anotherAttention',
				  component: anotherAttention
				}
			]
			  
		}
    
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function () {
      //   return import(/* webpackChunkName: "about" */ './views/About.vue')
      // }

  ].concat(loginRouter,shoppingRouter, personlRouter,caiRouter,menuRouter)
})
