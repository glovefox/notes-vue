import Vue from 'vue'
import marked from 'marked'
import store from './vuex/store'
import App from './App'

/* eslint-disable no-new */
new Vue({
  store, // 注入到所有子组件
  el: 'body',
  components: { App }
})

Vue.filter('marked',marked)
