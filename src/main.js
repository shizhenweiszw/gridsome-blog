// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './store'
import util from './utils/util'
export default function (Vue, {appOptions, router,head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(ElementUI)
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store(store)
  Vue.prototype.$util = util
}
