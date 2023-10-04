<template>
  <div class="school">
    <h2 >学校名称:{{name | mySlice}}</h2>
    <h2>学校性别:{{address}}</h2>
  </div>
</template>

<script>

export default {
    name:'SChool',
    data() {
        return {
            name:'哈哈哈大学',
            address:'哈哈哈地址',
        }
    },
}
</script>

<style>
    .school{
        background-color: aliceblue;
    }
</style>