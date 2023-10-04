<template>
  <div >
    <h1>当前求和为:{{sum}}</h1>
    <h2>Count组件求和放大10倍后为:{{bigSum}}</h2>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3 style="color: red;">下方组件的总人数是{{personList.length}}</h3>
    <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
    import { mapState,mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
        name:'MyCount',
        data() {
            return {
                n : 1,
            }
        },
        computed:{
            ...mapState('countAbout',['sum','school','subject']),
            ...mapGetters('countAbout',['bigSum']),
            ...mapState('personAbout',['personList']),
        },
        methods: {
            ...mapMutations('countAbout',{increment:'PLUS',decrement:'SUBTRACT'}),


            ...mapActions('countAbout',{incrementOdd:'plusOdd',incrementWait:'plusWait'}),
        },
        mounted() {
            console.log(this.$store)
        },
    }
</script>

<style>
    /* .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    video{
        width: 100%;
    }
    img{
        width: 100%;
    }
    button{
        margin-left: 10px;
    } */
</style>