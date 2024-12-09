import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'

import router from './router/router'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
