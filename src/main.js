import Vue from 'vue'
import App from './App.vue'

import router from './router'
import TodosApi from './todos/api'

Vue.prototype.$api = TodosApi

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.config.ignoredElements = [/^ion-/]