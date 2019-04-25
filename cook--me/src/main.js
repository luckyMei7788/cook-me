import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(ElementUI);
Vue.use(MuseUI);
Vue.config.productionTip = false


import axios from "axios";
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
