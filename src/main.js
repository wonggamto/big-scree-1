import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import api from '@/api'

Vue.use(ElementUI)
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')