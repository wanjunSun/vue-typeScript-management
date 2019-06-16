import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import home from '@/views/home.vue';
const constantRouterMap = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: home,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/components/dashboard/index.vue'),
        meta: { title: "首页" }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: home,
    meta: { title: '系统管理', icon: 'ios-cog-outline' },
    children: [
      {
        path: '/systemsettings',
        name: 'systemsettings',
        component: () => import(/* webpackChunkName: "home" */ '@/views/systemsettings.vue'),
        meta: { title: '系统设置', icon: 'ios-build-outline' },
      }
    ]
  }
]
export default new Router({
  routes: constantRouterMap
});
