<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学生名称: {{name}}</h2>
        <h2>学生年龄: {{age}}</h2>
        <button @click="shwName">点击</button>
    </div>
</template>

<!-- 组件交互修改的代码 -->
<script>
    export default{
            name:'StuDent',
            data(){
                return {
                    name:'asd',
                    age:18
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
