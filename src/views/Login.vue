<template>
  <div>
    <div class="h-20 mt-16 text-center">
      XXXX管理系统
    </div>
    <div class="flex justify-center">
      <el-form label-width="80px" :rules="rules" ref="form" :model="user" style="width: 460px;">
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="user.name" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="user.password" />
        </el-form-item>
        <el-button @click="submit">提交</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import API from '@/service/api';
import { ACCESS_TOKEN, ROLE, MEUNS } from '@/config/constant';
import manageRoute from '@/router/dynamicRoute';
import router from '@/router';

const user = reactive({
  name: '',
  password: ''
})
const rules = {
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const form = ref(null)
const submit = async () => {
  const res = await form.value.validate()
  if (res) {
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
  } else {
    console.log('校验不通过')
  }
}
</script>