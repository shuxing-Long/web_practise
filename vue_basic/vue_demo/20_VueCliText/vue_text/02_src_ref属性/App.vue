<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">输出上方的DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
import School from './components/School'
export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'哈哈哈'
        }
    },
    methods: {
        showDOM(){
            console.log(this.$refs.title) //真实DOM元素
            console.log(this.$refs.btn) //真实DOM元素
            console.log(this.$refs.sch) //School组件的实例对象(vc)
        }
    },
}
</script>

<style>

</style>