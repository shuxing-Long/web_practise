<template>
  <div class="school">
    <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校性别:{{address}}</h2>
  </div>
</template>

<script>
import {mixin,hunhe2} from '../mixin'

export default {
    name:'SChool',
    data() {
        return {
            name:'哈哈哈大学',
            address:'哈哈哈地址',
        }
    },
    mixins:[mixin,hunhe2],
}
</script>

<style>
    .school{
        background-color: aliceblue;
    }
</style>