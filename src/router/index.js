import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import types from '@/store/constants/types'

Vue.use(Router)
const router = new Router({
    // mode: 'history',
    base: '',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/login',
            name: 'login', // 登录
            component: () => import('@/page/login/Index.vue')
        },
        {
            path: '/home',
            name: 'home', // 首页
            component: () => import('@/page/home/Index.vue')
        },
        {
            path: '*',
            redirect: { name: 'login' }
        }
    ]
})

router.beforeEach((to, from, next) => {
    store.commit({
        type: types.SET_CURR_ROUTER,
        from: from.name,
        to: to.name,
        query: to.query,
        instance: router
    })
    if (to.name && to.name !== from.name) {
        store.commit(types.LOADING, true)
    }
    next(true)
})

export default router
