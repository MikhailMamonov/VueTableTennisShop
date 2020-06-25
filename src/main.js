import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'

import { createStore } from './store'

Vue.config.productionTip = false


const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
