import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);


import axios from "axios";
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
