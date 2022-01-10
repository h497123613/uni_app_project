import request from "../../utils/request.js"
const [state,mutations,actions,getters] = [{
	// state
	categoryList:[]
},{
	//mutations
	SET_CATEGORYLIST(state,payload){
		state.categoryList = payload
	}
},{
	// actions
	async getCategoryList({commit}){
		const result = await request('/getCateGoryData')
		commit('SET_CATEGORYLIST',result)
	}
},{
	//getters
}]
export default {
	state,mutations,actions,getters
}