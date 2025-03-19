
<template>
  <!-- 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 # -->
  <base-layout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </base-layout>
</template>

<script>
import baseLayout from './base-layout.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    baseLayout
  }
}
</script>

<style scoped></style>
