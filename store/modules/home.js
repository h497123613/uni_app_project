import request from "../../utils/request.js"
const [state,mutations,actions,getters] = [{
	// state
	indexData:{}
},{
	//mutations
	SET_INDEXDATA(state,payload){
		state.indexData = payload
	}
},{
	// actions
	async getIndexData({commit}){
			const result = await request('/getIndexData')
			// console.log(result.kingKongModule)
			commit('SET_INDEXDATA',result)
	}
},{
	//getters
	navList(state){
		return (state.indexData.kingKongModule || {}).kingKongList || []
	},
	iconList(state){
		return state.indexData.policyDescList || []
	},
	floorList(state){
		return state.indexData.categoryModule || []
	}
}]
export default {
	state,mutations,actions,getters
}