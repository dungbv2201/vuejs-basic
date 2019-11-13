import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'

Vue.config.productionTip = false
// router.beforeEach((to,from,next)=>{
//   alert('1212')
//   next()
// })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
