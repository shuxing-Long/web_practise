<template>
  <div class="student">
    <h2 @click="showName">学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
import {mixin,hunhe2} from '../mixin'

export default {
    name:'StuDent',
    data() {
        return {
            name:'哈哈哈',
            sex:'男',
        }
    },
    mixins:[mixin,hunhe2],
}
</script>

<style>
    .student{
        background-color: aliceblue;
    }
</style>