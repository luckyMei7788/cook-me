import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入地址联动的插件
import VueAreaLinkage from "vue-area-linkage";
import "vue-area-linkage/dist/index.css";


import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(VueAreaLinkage);
Vue.use(ElementUI);
Vue.use(MuseUI);
Vue.config.productionTip = false


import axios from "axios";
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');


//路由拦截
/* router.beforeEach((to, from, next)={
	if(localStorage.usMobile){
		alert("您已经登陆")
	}else{
		next();
	}
}) */