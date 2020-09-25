import $store from  '@/store/index.js'
export default{
	// 全局配置
	common:{
		baseUrl:"http://www.baomabaodian.com/gravidawiki",
		header:{
			'Content-Type':'application/x-www-form-urlencoded'
		},
		data:{},
		method:'GET',
		dataType:'json'
	},
	//请求返回pormise
	request(options={}){
		options.url=this.common.baseUrl+options.url,
		options.header=options.header ||  this.common.header
		options.data=options.data ||  this.common.data
		options.method=options.method ||  this.method
		Option.dataType=options.dataType ||  this.common.dataType
		//token
		if(options.token){
			options.header.AuthToken= $store.state.user.token
			//二次验证 
			if(options.checkToken && !options.header.AuthToken){
                    uni.showToast({
                    	title:'请先登录',
						icon:'none'
                    })
					return uni.navigateTo({
						url: '/pages/index/index.vue',
					});
			}
		}
		//请求
		return  new Promise((res,rej)=>{
			//请求中...
			uni.request({
				...options,
				success: (result)=> {
					// 服务端失败
					console.log(result);
					if(result.statusCode!==200){
						if(options.toast!==false){
							uni.showToast({
								title:result.data.msg||'服务端失败',
								icon:'none'
							})
						}
						return rej(result.data)
					}
					//成功
					let data=result.data
					res(data)
				},
				fail: (error) => {
					console.log(error);
					uni.showToast({
						title:error.errMsg || '请求失败',
						icon:'none'
					})
					return  rej()
				}
			})
		})
	},
	//get请求
	get(url,data={},options={}){
		options.url=url
		options.data=data
		options.method='GET'
		return this.request(options)
	},
	//post请求
	post(url,data={},options={}){
		options.url=url
		options.data=data
		options.method='POST'
		return this.request(options)
	}
	
}