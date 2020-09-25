import Vue from 'vue'
import App from './App'
import store from './store'



Vue.config.productionTip = false

Vue.prototype.$store = store
// 引入请求库
import $H from 'common/lib/request.js';
Vue.prototype.$H = $H
// 助手函数
import $U from "./common/util.js"
Vue.prototype.$U =$U

App.mpType = 'app'


const app = new Vue({
	store,
    ...App
})
app.$mount()
