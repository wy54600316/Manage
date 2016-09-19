/**
 * 程序入口
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './route-config'
// import App from './App'

Vue.use(VueRouter)
const router = new VueRouter()

routerConfig(router)
// router.map({
//   '/': {
//     component: require('./components/Hello.vue')
//   }
// })

// const Enter = new Vue({
//   el: 'body',
//   components: { App }
// })

Vue.config.debug = true

const App = Vue.extend(require('./App.vue'))

router.start(App, '#app')
