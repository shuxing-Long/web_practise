<template>
    <div>
        <ul>
        <li v-for="m in messageList" :key="m.id">
            <router-link :to="{
                name:'hahaha',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{m.title}}
            </router-link>&nbsp;&nbsp;
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaseShow(m)">replase查看</button>
        </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'MessAge',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
        methods: {
            pushShow(m){
                console.log(this.$router)
                this.$router.push({
                    name:'hahaha',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            },
            replaseShow(m){
                this.$router.replace({
                    name:'hahaha',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
        },
    }
</script>

<style>

</style>