import Vue from 'vue'
import Router from 'vue-router'
import monitor from '../components/monitor/monitor.vue'
import menu from '../components/menu/menu.vue'
import user from '../components/user/user.vue'
import equipment from '../components/equipment/equipment.vue'
import warnning from '../components/warnning/warnning.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/monitor',
      name: 'monitor',
      component: monitor
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu,
      children: [
        {
          path: 'user',
          name: 'user',
          component: user
        },
        {
          path: 'equipment/:id',
          name: 'equipment',
          component: equipment
        },
        {
          path: 'warnning',
          name: 'warnning',
          component: warnning
        }
      ]
    }
  ]
})
