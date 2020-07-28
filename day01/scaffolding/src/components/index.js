import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//导入组件文件
import Header from '../components/demo/Header.vue';
import field from '../components/demo/field.vue';

Vue.use(VueRouter)

const routes = [
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
