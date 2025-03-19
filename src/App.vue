<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { ROLE } from './config/constant';
import manageRoute from './router/dynamicRoute'
export default {
  name: 'App',
  watch: {
    $route: {
      async handler(newVal) {
        console.log('newVal', newVal)
        const role = localStorage.getItem(ROLE)
        if (role && role === "admin") {
          /* 在4.x版本中需手动调用router.replace方法重定向，
          因为动态路由页面刷新时，matched的值为空；
          在3.x版本中，刷新页面添加异步路由，matched有值，不需要再重定向 */
          this.$router.addRoute("Layout", manageRoute);
          /* 在动态路由页面刷新时,matched数组为空 */
          // if (!newVal.matched.length && newVal.fullPath === "/manage") {
          //   await this.$router.replace("/manage");
          // }
        }

      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
