// 求和相关的配置
export default {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        PLUS(state,value){
            state.sum += value
        },
        SUBTRACT(state,value){
            state.sum -= value
        },
    },
    state:{
        sum : 1,
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum: state => {
            console.log('hhh')
            return state.sum * 10
        },
    }
}
