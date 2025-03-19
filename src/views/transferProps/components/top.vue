<template>
  <section>
    <centers
      name="name"
      :age="18"
      gender="666"
      sdf="asd"
      @isClick="isClick"
      @asd="asd"
    />
  </section>
</template>
<script>
import centers from './centers.vue';
export default {
  name: 'TopC',
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