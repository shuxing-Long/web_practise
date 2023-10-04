<template>
    <div>
        
        <Student ref="sch" name="尚硅谷" sex="男" :age="18"></Student>
    </div>
</template>

<script>
import Student from './components/Student'
export default {
    name:'App',
    components:{Student},
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