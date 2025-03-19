<template>
  <!-- 作用域插槽的内部工作原理是将你的插槽内容包裹在一个单个参数的函数里 -->
  <!-- 这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式 -->
  <div>
    <current-user v-slot="{user}">{{ user.firstName }}</current-user>
    <!-- abbreviations 不能省略default 否则报错 -->
    <current-user #default="{user}">{{ user.firstName }}</current-user>
    <!-- rename-user -->
    <current-user v-slot="{user: person}">{{ person.firstName }}</current-user>
    <!-- default-user -->
    <current-user v-slot="{user = {firstName: 'Guest'}}">{{ user.firstName }}</current-user>
  </div>
</template>

<script>
import currentUser from './current-user'
export default {
  data() {
    return {

    }
  },
  components: {
    currentUser
  }
}
</script>

<style scoped>

</style>
