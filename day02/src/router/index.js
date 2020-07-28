import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//导入组件文件
import Header from '../components/demo/Header.vue';
import Field from '../components/demo/Field.vue';
import Navbar from '../components/demo/Navbar.vue';
import tabcontainer from '../components/demo/tabcontainer.vue';
import list from '../components/demo/list.vue'
import tabbar from '../components/demo/tabbar.vue'
import tabbar2 from '../components/demo/tabbar2.vue'

import Reg from '../views/Reg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/tabbar2',
    component:tabbar2
  },
  {
    path:'/tabbar',
    component:tabbar
  },
  {
    path:'/list',
    component:list
  },
  {
    path:'/tabcontainer',
    component:tabcontainer
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/reg',
    component:Reg
  },
  {
    path:'/field',
    component:Field
  },
  {
    path:'/header',
    component:Header
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
