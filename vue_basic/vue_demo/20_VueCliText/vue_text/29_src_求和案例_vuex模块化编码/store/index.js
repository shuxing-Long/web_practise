// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

// 创建并导出store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
    
})
