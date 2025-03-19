<template>
  <base-layout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </base-layout>
</template>

<script>
import baseLayout from './base-layout.vue';
export default {
  components: {
    baseLayout
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped></style>
