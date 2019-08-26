import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/util/request.js'
import course from './course'

Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    changeLoading:(state, b)  => {
      state.loading = b !=null ? b : !state.loading
    }
  },
  actions: {
    GET_ALL_GRADES({ commit }, { data, cb }) {
      request.$get('/api/admin/allGrades', data, (response) => {
        cb && cb(response)
      })
    }
  },
  modules: {
    course
  }
})
