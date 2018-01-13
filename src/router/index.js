import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import map from '@/components/map'
import equipment from '@/components/equipment'
import user from '@/components/user'
import company from '@/components/company'
import monitor from '@/components/monitor'
import warning from '@/components/warning'
import group from '@/components/group'
import electricBox from '@/components/electricBox'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/equipment',
      name: 'equipement',
      component: equipment
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/warning',
      name: 'warning',
      component: warning
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: monitor
    },
    {
      path: '/electricBox',
      name: 'electricBox',
      component: electricBox
    },
    {
      path: '/group',
      name: 'group',
      component: group
    }
  ]
})
