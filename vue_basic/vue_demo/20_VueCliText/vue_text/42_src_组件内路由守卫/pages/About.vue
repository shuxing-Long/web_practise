<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'AbOut',
        // 通过路由规则,进入该组件时被调用
        beforeRouteEnter(to, from, next){
          console.log('About--beforeRouteEnter',to,from)
          if(to.meta.isAuth){
              if(localStorage.getItem('school') === 'atguigu'){
                  next()
              }
              else{
                  console.log('无权限')
              }
          }else{
              next()
          }
        },
        // 通过路由规则,离开该组件时被调用
        beforeRouteLeave(to, from, next){
          console.log('About--beforeRouteLeave',to,from)
			    next()
        }
    }
</script>

<style>

</style>