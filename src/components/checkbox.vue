<template>
  <label>
    <span>
      <input type="checkbox" :disabled="disabled" :checked="current" @change="change">
    </span>
  </label>
</template>
<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['input', 'on-change'])
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number, Boolean],
    default: false
  },
  trueValue: {
    type: [String, Number, Boolean],
    default: true
  },
  falseValue: {
    type: [String, Number, Boolean],
    default: false
  }
})

const current = ref(props.value)
function change(event) {
  if (props.disabled) {
    return
  }

  const checked = event.target.checked
  current.value = checked

  const value = checked ? props.trueValue : props.falseValue
  emit('input', value)
  emit('on-change', value)
}

watch(props.value, (val) => {
  if (val) {
    updateModel()
  } else {
    throw new Error('Value should be trueValue or falseValue')
  }
})

function updateModel() {
  current.value = props.value === props.trueValue
}
</script>
<script>
export default {
  name: 'iCheckbox',
}
</script>