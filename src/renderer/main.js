/*
 * @Author: along
 * @Description:
 * @Date: 2023-10-10 17:46:59
 * @LastEditors: along
 * @LastEditTime: 2023-10-11 10:39:26
 * @FilePath: /cxy-electron/src/renderer/main.js
 */
import { createApp } from 'vue'
// 全局样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// M
import App from '@renderer/App.vue'
// +
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
// +
app.use(router)
app.mount('#app')
