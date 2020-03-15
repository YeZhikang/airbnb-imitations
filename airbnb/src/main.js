import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {getUserInfo} from "./api/location";
import './static/css/normal.css'
Vue.config.productionTip = false

const getUserInfoFunc = () => {
  return new Promise((resolve, reject) => {
    getUserInfo().then(res => {
      store.commit('updateUserInfo',{email: res.data.email,phoneNumber: res.data.phoneNumber})
      resolve(res)
    }).catch(error => reject(error))
  })
}

(async function start() {
  await getUserInfoFunc()
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})()




