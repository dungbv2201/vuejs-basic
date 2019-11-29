import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export const store = new Vuex.Store({
  state:{
    count: 0,
    name: 'vuejs'
  },
  getters:{
    upperCase(sate){
      return sate.name.toUpperCase()
    }
  },
  mutations:{
    updateCount(state,payload){
      if(payload.type === 1){
        state.count += payload.counter
      }else{
        state.count -= payload.counter
      }
    }
  },
  actions:{
    increment({commit}, type =1 ){
      return new Promise((resolve,reject )=> {
        commit('updateCount',{ type, counter:1})
        if(type === 1){
          return reject('updated fail!')
        }
        resolve('updated successfully!')
      })
    }
  }
})