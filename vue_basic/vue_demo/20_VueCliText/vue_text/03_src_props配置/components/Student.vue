<template>
  <div class="student">
    <h1>{{msg}}</h1>
    <h2>学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{myAge+1}}</h2>
    <button @click="UpdateAge">改年龄</button>
  </div>
</template>

<script>
export default {
    name:'StuDent',
    data() {
        return {
            msg:'哈哈哈',
            myAge:this.age
        }
    },
    methods: {
        UpdateAge(){
            this.myAge++
        }
    },
    props:['name','age','sex',] // 简单接收

    // 接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number,
    // }

    // props:{
    //     name:{
    //         type:String, // 类型
    //         required:true // 标识必须要传值
    //     },
    //     sex:{
    //         type:String,
    //         required:true
    //     },
    //     age:{
    //         type:Number,
    //         default:99 // 默认值
    //     },
        
    // }
}
</script>

<style>
    .school{
        background-color: aliceblue;
    }
</style>