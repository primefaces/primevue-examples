
import { createRouter, createWebHistory, type RouteRecordRaw,  } from 'vue-router'
import { useAuthStore } from '../store/auth.store'

const  routes: Array<RouteRecordRaw> =[
    {
        path: '/',
        component:()=>import('../components/HelloWorld.vue')
    }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const auth = useAuthStore()
//   next()
// })

export default router
