<template>
  <!-- 独占默认插槽的缩写语法 -->
  <current-user v-slot="slotProps">
    {{ slotProps.user.firstName }}
  </current-user>
</template>

<script>
import currentUser from './current-user'
export default {
  components: {
    currentUser
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
