// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'

// 引入md文件编辑器
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';


// 关闭Vue生产提示
Vue.config.productionTip = false

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
Vue.use(VMdEditor);


// 创建vm
new Vue({
    el:'#app',
    render: h => h(App),
})