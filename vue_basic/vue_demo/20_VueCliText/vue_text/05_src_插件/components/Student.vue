<template>
  <div class="student">
    <h2 >学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <input type="text" v-fbind:value="name">
    <button @click="text">测试</button>
  </div>
</template>

<script>

export default {
    name:'StuDent',
    data() {
        return {
            name:'哈哈哈',
            sex:'男',
        }
    },
    methods:{
        text(){
            this.hello()
        }
    }
}
</script>

<style>
    .student{
        background-color: aliceblue;
    }
</style>