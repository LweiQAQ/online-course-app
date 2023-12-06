import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from 'uview-ui';

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})

require('api/request.js')(app)

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
Vue.use(uView)
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif