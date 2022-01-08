import Vue from "vue"
import Vuex from 'vuex'
import home from "./modules/home.js"
Vue.use(Vuex)

const [state,mutations,actions,getters] = [{},{},{},{}]
export default new Vuex.Store({
	state,mutations,actions,getters,modules:{
		home
	}
})
