import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index/index.vue'
import register from '@/pages/register/register.vue'
import edit from '@/pages/edit/edit.vue'
import my from '@/pages/my/my.vue'
import login from '@/pages/login/login.vue'
import detail from '@/pages/detail/detail.vue'
import  create from '@/pages/create/create.vue'


Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    
    
  ]
})
