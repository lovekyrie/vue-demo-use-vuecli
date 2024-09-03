<template>
  <top>
    <centers>
      <bottom></bottom>
    </centers>
  </top>
</template>
<script>
import Top from './components/top.vue'
import Centers from './components/centers.vue'
import Bottom from './components/bottom.vue';
export default {
  name: 'TransferProps',
  components: {
    Top, Centers, Bottom
  }
}
</script>