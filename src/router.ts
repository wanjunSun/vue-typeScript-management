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
  },
  {
    path: '/drag',
    name: 'drag',
    component: home,
    meta: { title: '组件设置', icon: 'ios-cog-outline' },
    children: [
      {
        path: '/dragpage',
        name: 'dragpage',
        component: () => import(/* webpackChunkName: "dragpage" */ '@/components/dragpage.vue'),
        meta: { title: '可拖动抽屉', icon: 'logo-buffer' },
      },
      {
        path: '/segmentation',
        name: 'segmentation',
        component: () => import(/* webpackChunkName: "segmentation" */ '@/components/segmentation.vue'),
        meta: { title: '分割窗口', icon: 'ios-browsers-outline' },
      }
    ]
  }
]
export default new Router({
  routes: constantRouterMap
});
