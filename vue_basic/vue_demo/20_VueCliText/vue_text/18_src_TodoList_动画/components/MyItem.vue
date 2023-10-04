<template>
    
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" 
                    type="text" 
                    :value="todo.title" 
                    @blur="handleBlur(todo,$event)"  
                    ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="del(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:"MyItem",
        props:['todo'],
        methods: {
            handleCheck(id){
                // 通知App组件将对应的数据
                this.$bus.$emit('checkTodos',id)
        
            },
            del(id){
                // 订阅消息
                pubsub.publish('delTodo',id)
            },
            handleEdit(todo){
                if(todo.hasOwnProperty('isEdit')){
                    todo.isEdit = true
                }else{
                    this.$set(todo,'isEdit',true)
                }
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })
            },
            handleBlur(todo,e){
                todo.isEdit = false
                if(!e.target.value.trim()){
                    alert('不能为空!!!')
                    return
                }
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
            }
        },
    }
</script>

<style lang="less" scoped>
     /*item*/
     li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:hover button {
        display: block;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    
</style>