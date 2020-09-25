export default {
	state: {
		//登录状态
		loginStatus: false,
		//token
		token: null,
		//用户信息
		userInfo: {},
		//孕育状态
		PregnantState:""
	},
	mutations: {
		//初始化登录状态
		initUser(state) {
			let userInfo = uni.getStorageSync('userInfo')
			let PregnantState=uni.getStorageSync('PregnantState');
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				state.userInfo = userInfo
				state.token = userInfo.token
				state.loginStatus = true
			}
			if(PregnantState){
				state.PregnantState=PregnantState
			}
		},
		//登录
		login(state, userInfo) {
			state.loginStatus = true
			state.token = userInfo.token
			uni.setStorageSync('userInfo', JSON.stringify(userInfo)) // 持久化存储
		},
       //孕育状态
	   Pregnant(state,PregnantState){
		   console.log(PregnantState);
		   state.PregnantState=PregnantState
		   uni.setStorageSync('PregnantState',PregnantState)
	   },
		// // 退出登录
		// logout(state) {
		// 	state.userInfo = {}
		// 	state.loginStatus = false
		// 	state.token = null
		// 	uni.removeStorageSync('userInfo')
		// }
	}
}
