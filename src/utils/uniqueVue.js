import Vue from 'vue'

const generateVue = (function() {
  let _vue
  return function() {
    if(_vue) {
      return _vue
    }
    _vue = new Vue()
    return _vue
  }
})()

export default generateVue()