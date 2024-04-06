import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import '@/plugins/vee-validate';
import '@/plugins/axios';

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
