<template>
  <div>
    home页面
    <i-checkbox v-model="aValue" />
    <button @click="submit">
      提交
    </button>
  </div>
</template>

<script setup>
import iCheckbox from '@/components/checkbox.vue';
import API from '@/service/api';
import { ref, reactive } from 'vue';
const aValue = ref(true)

const user = reactive({
  name: '',
  password: ''
})

const submit = () => {
  console.log(user)
  API.getData('/getData')
}
</script>


<style scoped lang="less"></style>
