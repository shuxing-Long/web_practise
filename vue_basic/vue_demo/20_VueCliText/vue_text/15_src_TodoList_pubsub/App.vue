<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 搜索框  -->
                <MyHeader @addTodos="addTodos"></MyHeader>
                <!-- 展示栏 -->
                <MyList :todos=todos></MyList>
                <!-- 底部 -->
                <MyFoote :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFoote>
            </div>
        </div>
    </div>

</template>

<script>
import pubsub from 'pubsub-js'
import MyFoote from './components/MyFoote'
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'

export default {
    name:'App',
    components:{MyFoote,MyHeader,MyList},
    data() {
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
    },
    methods: {
        // 添加一个todos对象
        addTodos(todosObj){
            console.log('我是组件:',todosObj)
            this.todos.unshift(todosObj)
        },
        checkTodos(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id)
                {
                    todo.done = !todo.done
                }
            })
        },
        delTodo(_,id){
            if(confirm("确定删除吗?")){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            }
        },
        // 是否全选
        checkAllTodo(done){
            this.todos.forEach((todo)=>{
                todo.done = done
            })
        },
        // 清除所有已经完成的todo
        clearAllTodo(){
            this.todos = this.todos.filter((todo)=>{
                console.log('hh')
                return !todo.done 
            })
        }
    },
    watch:{
        // 深度监视
        todos:{
            deep:true,
            handler(value){
            localStorage.setItem('todos',JSON.stringify(value))
        }
        }
        
    },
    mounted() {
        this.$bus.$on('checkTodos',this.checkTodos)
        this.pubId = pubsub.subscribe('delTodo',this.delTodo)
    },
    beforeDestroy(){
        this.$bus.$off('checkTodos')
        // this.$bus.$off('delTodo')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style>
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>