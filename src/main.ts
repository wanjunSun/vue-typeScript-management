import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
import axios from '@/utils/axios';

Vue.config.productionTip = false;
Vue.use(iView);

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');