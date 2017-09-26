// Import libraries
import Vue from 'vue';
import Vuefire from 'vuefire';
import VueResource from 'vue-resource';
// Import App modules
import App from './App';
import router from './router';
import firebase from './service/firebase';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuefire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    keg: firebase.database.ref('keg').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
});
