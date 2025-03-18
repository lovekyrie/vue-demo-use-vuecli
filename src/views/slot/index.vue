<template>
  <base-layout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </base-layout>
</template>

<script>
import baseLayout from './base-layout.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    baseLayout
  }
}
</script>

<style scoped></style>
