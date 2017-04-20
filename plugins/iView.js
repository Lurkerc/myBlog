import Vue from 'vue'
if (process.BROWSER_BUILD) {
  let iView = require('iview')
  Vue.use(iView)
}
