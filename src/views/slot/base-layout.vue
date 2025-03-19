<template>
  <div class="container">
    <header>
      <slot name="header" />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  components: {

  },
  inject: ['info'],
  data() {
    return {

    }
  },
  activated() {
    console.log(this.info.count)
  }
}
</script>

<style scoped></style>
