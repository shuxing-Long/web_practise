// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 求和相关的配置
const countOptions = {
    actions:{},
    mutations:{},
    state:{},
    getters:{}
}

// 准备actions--用于响应组件中的动作
const actions = {
    plusOdd(context,value){
        if(context.state.sum % 2){
            context.commit('PLUS',value)       
        }
    },
    plusWait(context,value){
        setTimeout(() =>{
            context.commit('PLUS',value)        
        },500)
    }
}

// 准备mutations--用于操作数据(state)
const mutations = {
    PLUS(state,value){
        state.sum += value
    },
    SUBTRACT(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}

// 准备state--用于存储数据
const state = {
    sum : 1,
    school:'尚硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

// 准备getters--用于将state中的数据进行加工
const getters = {
    bigSum: state => {
        console.log('hhh')
        return state.sum * 10
    },
}

// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    // actions:actions,
    // mutations:mutations,
    // state:state
})
