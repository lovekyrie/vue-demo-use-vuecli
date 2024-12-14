<template>
  <div>
    <div class="h-20 mt-16 text-center">
      XXXX管理系统
    </div>
    <div class="text-center">
      姓名：<input v-model="user.name" />
      <br>
      密码：<input v-model="user.password" />
      <br>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import API from '@/service/api';
import { ACCESS_TOKEN, ROLE, MEUNS } from '@/config/constant';
import manageRoute from '@/router/dynamicRoute';
import router from '@/router';

const user = reactive({
  name: '',
  password: ''
})
const submit = () => {
  API.getLogin(user).then(res => {
    const { accessToken, role, menus } = res.data
    localStorage.setItem(ACCESS_TOKEN, accessToken)
    localStorage.setItem(ROLE, role)
    localStorage.setItem(MEUNS, JSON.stringify(menus))
    console.log('router before', router)
    if (role === 'admin') {
      router.addRoute('Layout', manageRoute)
    }
    console.log('router after', router)
    router.push('/home')
  })
}
</script>