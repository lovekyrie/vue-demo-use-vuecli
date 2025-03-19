<template>
  <current-user>
    <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
  </current-user>
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
