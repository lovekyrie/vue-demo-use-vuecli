<template>
  <el-scrollbar style="height: 400px;" ref="scroll">
    <div v-for="i in 5" :key="i" class="scroll-item" style="height: 100px;"></div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'scrollEvent',
  data() {
    return {
      el: ''
    }
  },
  mounted() {
    this.el = this.$refs.scroll.wrap
    this.el.addEventListener('scroll', this.handleScroll)
    console.log('测试组件mounted执行次数')
  },
  activated() {
    console.log('测试activated生命周期执行了几次')
  },
  methods: {
    handleScroll() {
      const tHeight = this.el.scrollHeight
      const cHeight = this.el.clientHeight
      const sHeight = this.el.scrollTop
      console.log('scrollHeight', tHeight)
      console.log('clientHeight', cHeight)
      console.log('scrollTop', sHeight)
      console.log('scroll distance is touch bottom', tHeight - sHeight === cHeight)
    }
  }
}
</script>
<style scoped>
.el-scroll {
  background-color: #f99;
}

.scroll-item {
  background-color: #f33;
}
</style>