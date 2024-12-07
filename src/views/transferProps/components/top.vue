<template>
  <section>
    <centers name="name" :age="18" gender="666" sdf="asd" @isClick="isClick" @asd="asd">
    </centers>
  </section>
</template>
<script>
import centers from './centers.vue';
export default {
  name: 'topC',
  components: { centers },
  methods: {
    asd() {
      console.log(999)
    },
    isClick() {
      console.log(666)
    }
  }
}
</script>