import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
export default createStore({
  state,
  mutations,
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city)
      try {
        localStorage.city = city 
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  },
  getters: { 
    doubleCity: (state) => {
      return state.city + ' ' + state.city
    }
  }
})
