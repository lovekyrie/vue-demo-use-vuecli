<template>
  <div>
    <current-user>
      <template #default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </current-user>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import currentUser from './current-user'
export default {
  components: {
    currentUser
  },
  data() {
    return {
      count: 0
    }
  },
  activated() {
    this.$eventBus.$on('count', c=> this.count = c)
  }
}
</script>

<style scoped>

</style>
