<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学校名称: {{name}}</h2>
        <h2>地址: {{address}}</h2>
        <button @click="shwName">点击</button>
    </div>
</template>

<!-- 组件交互修改的代码 -->
<script>
    export default{
            name:'School',
            data(){
                return {
                    name:'asd',
                    address:'阿斯顿阿斯顿'
                }
            },
            methods: {
                shwName(){
                    console.log(this)
                    console.log(this.x)
                }
            },
        }

        
</script>

<!-- 组件的样式 -->
<style>
    .demo{
        background-color: orange;
    }
</style>
