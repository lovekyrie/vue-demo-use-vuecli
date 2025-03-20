import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'

import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import uniqueVue from './utils/uniqueVue'

import has from '@/directives/has'
Vue.directive('has', has)

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.$eventBus = uniqueVue

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
