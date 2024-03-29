//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// Vue.prototype.x = {a:1,b:2}

// const demo = Vue.extend({})
// const d =new demo()
// Vue.prototype.x = d

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate(){
		// 安全全局事件总线
		Vue.prototype.$bus = this
	}
})