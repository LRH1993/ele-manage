import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '../page/login.vue'

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    }
  ]
})
