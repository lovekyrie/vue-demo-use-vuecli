<template>
  <section>
    <div>
      <p>
        从$attrs取值gender：{{ $attrs['gender'] }}
      </p>
      <p>
        从$attrs取值sdf：{{ $attrs['sdf'] }}
      </p>
      <p>
        从props属性取值：{{ gender }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'bottomC',
  props: {
    gender: {
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log(this.$attrs)
    console.log(this.$listeners)
    this.$listeners.isClick()
    this.$listeners.asd()
  }
}
</script>