// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'

// 全局配置mixin(混合)
// import {mixin,hunhe2} from './mixin'
// Vue.mixin(mixin)
// Vue.mixin(hunhe2)

// 关闭Vue生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})