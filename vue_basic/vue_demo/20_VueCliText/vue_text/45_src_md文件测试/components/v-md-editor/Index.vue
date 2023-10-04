<template>
  <div>
    <v-md-editor 
    v-model="markdown" 
    :disabled-menus="[]"
    @upload-image="handleUploadImage"
    @save="save"
    ></v-md-editor>

    <div>
        <!-- 渲染成页面的部分 -->
        <v-md-editor :value="markdown" mode="preview"></v-md-editor>
    </div>
  </div>
</template>

<script>
    export default {
        name:'inDex',
        data() {
            return {
                markdown: '### 搜索',
            };
        },
        methods: {
            save(value,render){
                console.log('value',value)
                console.log('render',render)
            }
        },
    }
</script>

<style>

</style>