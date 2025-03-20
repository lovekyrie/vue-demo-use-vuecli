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
    <button @click="click">
      You clicked me {{ count }} times.
    </button>
  </div>
</template>

<script>
export default {
  components: {

  },
  inject: ['info'],
  data() {
    return {
      count: 0
    }
  },
  activated() {
    console.log(this.info.count)
  },
  mounted() {
    this.$eventBus.$on('count', c=> this.count = c)
  },
  methods: {
    click() {
      this.$eventBus.$emit('count', this.count +1)
    }
  }
}
</script>

<style scoped></style>
