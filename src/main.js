import Vue from 'vue'
import App from './App.vue'

import plugin from './lib'
Vue.use(plugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
