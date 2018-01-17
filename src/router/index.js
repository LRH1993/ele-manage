import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '../page/login.vue'
import manage from '../page/manage.vue'
import home from '../page/home.vue'

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      name: '',
      children: [{
        path: '',
        component: home,
        meta: [],
      }]
    }
  ]
})
