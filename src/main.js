import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore } from './store'

Vue.config.productionTip = false


const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
