// Import libraries
import Vue from 'vue';
import Vuefire from 'vuefire';
import VueResource from 'vue-resource';
// Import App modules
import App from './App';
import router from './router';
import auth from './auth';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuefire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  auth,
  router,
  template: '<App/>',
  components: { App }
});

Vue.http.headers.common['Authorization'] = auth.getAuthHeader()['Authorization'];

if (auth.checkAuth()) {
  router.push({ name: 'home' });
}
