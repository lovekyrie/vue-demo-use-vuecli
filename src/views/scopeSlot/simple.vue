<template>
  <!-- 独占默认插槽的缩写语法 -->
  <current-user v-slot:default="slotProps">{{ slotProps.user.firstName }}</current-user>
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
