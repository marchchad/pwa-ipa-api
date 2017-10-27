// Library imports
import Vue from 'vue';
import Router from 'vue-router';

// App imports
import HomeView from '@/components/HomeView';
import DetailView from '@/components/DetailView';
import NewKegView from '@/components/NewKegView';
import ListView from '@/components/ListView';
import LoginView from '@/components/LoginView';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kegs',
      name: 'kegs',
      component: ListView,
      beforeEnter: (to, from, next) => {
        router.app.$options.auth.checkAuth();
        if (!router.app.$options.auth.user.authenticated) {
          router.push({ 'name': 'login' });
          return;
        }
        next();
      }
    },
    {
      path: '/keg',
      name: 'keg',
      component: NewKegView,
      beforeEnter: (to, from, next) => {
        router.app.$options.auth.checkAuth();
        if (!router.app.$options.auth.user.authenticated) {
          router.push({ 'name': 'login' });
          return;
        }
        next();
      }
    },
    {
      path: '/keg/:id',
      name: 'kegdetail',
      component: DetailView,
      beforeEnter: (to, from, next) => {
        router.app.$options.auth.checkAuth();
        if (!router.app.$options.auth.user.authenticated) {
          router.push({ 'name': 'login' });
          return;
        }
        next();
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        router.app.$options.auth.checkAuth();
        if (router.app.$options.auth.user.authenticated) {
          router.push({ 'name': 'home' });
          return;
        }
        next();
      }
    }
  ]
});

export default router;
