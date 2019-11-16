import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './routes/index'

Vue.config.productionTip = false;

Vue.filter('saleOff',(value,price)=>{
  return (100- value)*price/100
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
