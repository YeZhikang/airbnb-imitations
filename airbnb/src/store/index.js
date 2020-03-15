import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      email: null,
      phoneNumber: null
    }
  },
  mutations: {
    updateUserInfo(state,user){
      console.log(user)
      state.userInfo = {phoneNumber: user['phoneNumber'], email: user['email']}
    }
  },
  actions: {
  },
  modules: {
  }
})
