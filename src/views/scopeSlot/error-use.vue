<template>
  <!-- 只要出现多个插槽时，请始终为所有的插槽使用完整的基于 <template> 的语法 -->
  <current-user v-slot="slotProps">
    {{ slotProps.user.firstName }}
    <!-- <template v-slot:other="otherSlotProps">
      slotProps is NOT available here
    </template> -->
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
