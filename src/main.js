import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bulma/css/bulma.css'
import 'animate.css/animate.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
