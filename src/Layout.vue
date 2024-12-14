<template>
  <div class="flex flex-col m-0 h-screen">
    <header class="flex-initial h-20 leading-20">
      <button @click="exit">退出</button>
    </header>
    <main class="flex-1 flex">
      <aside>
        <ul style="list-style: none;">
          <li v-for="(item, index) in newMeuns" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </aside>
      <article class="flex-1">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </article>
    </main>
  </div>
</template>
<script setup>
import menus from './config/menus';
import { MEUNS } from './config/constant';
import { ref } from 'vue'
import router from './router';

const newMeuns = ref([])
const meunsKeys = JSON.parse(localStorage.getItem(MEUNS))
menus.forEach(item => {
  if (item.key && meunsKeys.includes(item.key)) newMeuns.value.push(item)
})

const exit = () => {
  router.push('/login')
  // 清除动态路由缓存
  location.reload()
}
</script>