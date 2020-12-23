import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './font/font.css'
import Common from '@/components/Common.vue'
import {Lazyload} from 'vant';


Vue.use(Lazyload);
Vue.use(Vant);

Vue.prototype.Common = Common;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
