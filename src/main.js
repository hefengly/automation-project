// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueSocketio from 'vue-socket.io'

// Vue.use(VueSocketio, 'http://localhost:8080')
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
const _vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default _vue
