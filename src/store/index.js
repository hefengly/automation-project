import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

let defaultState = {
  haha: 1
}

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions,
  getters
})
