import Vue from 'vue'
import Router from 'vue-router'
/*
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Create from '@/pages/Create/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue'
*/




import store from '../pages/store'

Vue.use(Router)

const router= new Router({
  routes: [
   
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/pages/index/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/pages/register/register.vue')
    },
    {
      path: '/edit:blogId',
      name: 'edit',
      component: ()=>import('@/pages/edit/edit.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/my',
   
      component: ()=>import('@/pages/my/my.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/pages/login/login.vue')
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: ()=>import('@/pages/detail/detail.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: ()=>import('@/pages/create/create.vue')
    },
    {
      path: '/user:userId',
      name: 'user',
      component: ()=>import('@/pages/user/user.vue'),//代码懒加载，在进入对应的页面在加载对应的代码
      meta:{requiresAuth:true}
    },
    
  ]
})
//遍历路由判断是否登录。
router.beforeEach((to, from, next) => {
 
  if (to.matched.some(record => record.meta.requiresAuth)) {

    store.dispatch('checkLogin').then(isLogin=>{
      // console.log(isLogin)
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router

