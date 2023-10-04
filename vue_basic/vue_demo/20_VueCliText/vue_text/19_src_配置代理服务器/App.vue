<template>
    <div >
       <button @click="getStudents">获取学生信息</button>
       <button @click="getCars">获取汽车信息</button>
    </div>

</template>

<script>
import axios  from "axios";
export default {
    
    name:'App',
    methods: {
        getStudents(){
            // 先请求代理服务器(8080),然后代理服务器会请求后端服务器(5000),如果代理服务器(public)有东西就不会访问后端服务器，直接返回
            axios.get('http://localhost:8080/atguigu/students').then(
                Response => {
                    console.log('请求成功',Response.data)
                },
                error => {
                    console.log('请求失败',error.message)
                }
            )
        },
        getCars(){
            // 先请求代理服务器(8080),然后代理服务器会请求后端服务器(5000),如果代理服务器(public)有东西就不会访问后端服务器，直接返回
            axios.get('http://localhost:8080/demo/cars').then(
                Response => {
                    console.log('请求成功',Response.data)
                },
                error => {
                    console.log('请求失败',error.message)
                }
            )
        }
    },
}
</script>

<style>
   
</style>