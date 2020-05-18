import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import './style/custom.scss'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
