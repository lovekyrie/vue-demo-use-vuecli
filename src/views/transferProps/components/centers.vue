<template>
  <section>
    <div class="mt-10">
      <bottom v-bind="$attrs" v-on="$listeners"></bottom>
    </div>
  </section>
</template>
<script>
import bottom from './bottom.vue';
export default {
  name: 'centerC',
  components: { bottom },
  props: {
    name: {
      type: String,
      default: 'default'
    },
    age: {
      type: Number,
      default: 18
    }
  }
}
</script>