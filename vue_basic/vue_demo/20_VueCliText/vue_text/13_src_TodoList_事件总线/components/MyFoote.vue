<template>
  <div class="todo-footer" v-show="total">
        <label>
          <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:"MyFooTe",
    props:['todos',"checkAllTodo","clearAllTodo"],
    // 计算属性
    computed:{
      doneTotal(){
        // return this.todos.reduce((pre,current)=>{
        //   return current.done ? pre + 1 : pre
        // },0)

        return this.todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)
      },
      total(){
        return this.todos.length
      },
      isAll:{
        get(){
          return this.doneTotal === this.total
        },
        set(value){
          console.log(value)
          this.$emit('checkAllTodo',value)
          // this.checkAllTodo(value)
        }
      },
    },
    // 函数
    methods: {
      // checkAll(e){
        //  console.log(e.target.checked)
        //   this.checkAllTodo(e.target.checked)
      // }
      clearAll(){
        // this.clearAllTodo()
        this.$emit('checkAllTodo')
      }
    },
}
</script>

<style lang="less" scoped>
        /*footer*/
        .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }

</style>