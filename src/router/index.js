import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'
import HomeView from '@/components/HomeView';
import DetailView from '@/components/DetailView';
import NewKegView from '@/components/NewKegView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/keg',
      name: 'keg',
      component: NewKegView
    },
    {
      path: '/keg/:id',
      name: 'kegdetail',
      component: DetailView
    }
  ]
});
