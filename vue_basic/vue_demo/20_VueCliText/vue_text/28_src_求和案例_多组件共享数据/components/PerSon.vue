<template>
  <div>
    <h1>人员列表</h1>
    <h3  style="color: red;">Count组件求和为:{{sum}}</h3>
    <input type="text" placeholder="请输入名称" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name:'PerSon',
        data() {
            return {
                name:'',
            }
        },
        computed:{
                // 可以使用对象的方式给映射的方法设置别名
                // ...mapState({sum:'sum',school:'school',subject:'subject'}),
                ...mapState(['personList','sum']),
            },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',personObj)
                this.name = ''
            }
        },
    }
</script>

<style>

</style>