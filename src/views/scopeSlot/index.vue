<template>
  <current-user>
    <template #default="slotProps">
      {{ slotProps.user.firstName }}
    </template>
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
