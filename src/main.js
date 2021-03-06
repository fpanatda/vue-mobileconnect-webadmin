import Vue from 'vue'
import './plugins/vuetify'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@utils/registerServiceWorker'
import '@components/_globals'

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

