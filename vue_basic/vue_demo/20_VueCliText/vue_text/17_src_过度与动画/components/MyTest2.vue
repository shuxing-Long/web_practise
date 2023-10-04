<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
        <h1 v-show="isShow" key="1">你好啊！</h1>
        <h1 v-show="!isShow" key="2">你好啊！</h1>
    </transition-group>
    
  </div>
</template>

<script>
    export default {
        name:'MyTest2',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style>
    h1{
        background-color: orange;
    }
    /* 进入的起点 */ /* 离开的终点 */
    .hello-enter  .hello-leave{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的终点 */ /* 离开的起点 */
    .hello-leave .hello-enter{
        transform: translateX(0);
    }

    

</style>