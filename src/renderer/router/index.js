/*
 * @Author: along
 * @Description:
 * @Date: 2023-10-10 17:46:59
 * @LastEditors: along
 * @LastEditTime: 2023-10-11 09:45:12
 * @FilePath: /cxy-electron/src/renderer/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@renderer/views/login/login.vue'
import Home from '@renderer/views/home/home.vue'
import Index from '@renderer/views/index.vue'

const routes = [
    { path: '/', component: Index, exact: true },
    { path: '/home', component: Home, exact: true },
    { path: '/login', component: Login, exact: true },
    // 未匹配，则跳转至Login页面
    { path: '/:pathMatch(.*)', redirect: 'login' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
