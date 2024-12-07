<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    const el = document.querySelector('.el-dropdown-menu')
    el.addEventListener('mouseenter', function() {
      this.$refs.dropdown.show()
    }.bind(this))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #ff0;
}
</style>
