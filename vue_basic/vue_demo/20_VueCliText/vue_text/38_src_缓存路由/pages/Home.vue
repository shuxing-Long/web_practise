<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <keep-alive include="NeWs">
                <router-view ></router-view>
            </keep-alive>
            <!--  缓存多个 -->
            <!-- <keep-alive :include="['NeWs','MessAge']">
                <router-view ></router-view>
            </keep-alive> -->
        </div>
    </div>
  </template>
  
  <script>
      export default {
        name:'HoMe',
        // beforeDestroy(){
        //     console.log('About即将销毁',this)
        // },
        // mounted(){
        //     console.log('About挂载完毕',this)
        // }
      }
  </script>
  
  <style>
  
  </style>