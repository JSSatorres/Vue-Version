import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CounterView from '../views/CounterView.vue'
import Destinatiny from '../components/Destinatiny.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/counter',
    name:'Counter',
    component:CounterView
  },
  {
    path: '/destination/:id',
    name:'Destinatiny',
    component:()=>import('../components/Destinatiny.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // here add a class active
  linkActiveClass: "link-active-class"
});


export default router;