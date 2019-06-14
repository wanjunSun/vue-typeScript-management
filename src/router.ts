import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
      children:[
        {
          path:'/pagehome',
          name:'pagehome',
          component:() => import(/* webpackChunkName: "home" */ '@/components/dashboard/index.vue'),
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // meta: { title: 'LUBI交易管理', icon: 'el-icon-tickets' }
    // },
  ],
});
