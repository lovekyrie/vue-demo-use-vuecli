<template>
  <span>
    <slot :user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      user: {
        firstName: 'kevin',
        lastName: 'durant'
      }
    }
  }
}
</script>

<style scoped>

</style>
