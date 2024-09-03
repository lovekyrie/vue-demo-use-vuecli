<template>
  <div class="test">
    <el-button @click="handleBtnClick">
      我是一个按钮
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SetTimeout',
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      window.alert('我执行了setTimeout里面的方法了')
    }, 3000)
  },
  methods: {
    handleBtnClick() {
      clearTimeout(this.timer)
    },
  },
}
</script>

<style scoped></style>
