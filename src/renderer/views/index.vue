<!--
 * @Author: along
 * @Description:
 * @Date: 2023-10-10 17:46:59
 * @LastEditors: along
 * @LastEditTime: 2023-10-11 10:58:30
 * @FilePath: /cxy-electron/src/renderer/views/index.vue
-->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const w = ref()
const h = ref()

onMounted(() => {
    w.value = window.innerWidth
    h.value = window.innerHeight
    window.onresize = () => {
        w.value = window.innerWidth
        h.value = window.innerHeight
    }

    const iframe = document.querySelector('#iframe')
})
</script>

<template>
    <div class="IndexPage">
        <iframe id="iframe" src="http://www.alongweb.top" :width="w" :height="h"></iframe>
    </div>
</template>

<style scoped lang="scss">
.iframe {
    border: none;
}
</style>
