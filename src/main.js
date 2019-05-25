// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueLazyload from 'vue-lazyload' 


Vue.config.productionTip = false

Vue.use(VueLazyload, {
  	preLoad: 1.3,
  	error: '/static/default.jpg',
  	loading: '/static/loadding.gif',
  	attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
