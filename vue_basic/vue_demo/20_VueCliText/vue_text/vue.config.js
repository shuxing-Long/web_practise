const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  // lintOnSave:false,
  //开启代理服务器（方式一）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // },
  
  // 处理跨域问题
  devServer:{
    proxy:{
      '/atguigu':{
        target: 'http://localhost:5000',
        pathRewrite: {'^/atguigu':''},
        ws: true, // 用于注册websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/demo':{
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo':''},
        ws: true, // 用于注册websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      // '/api':{
      //   // target: 'http://localhost:5075',
      //   target: 'http://192.168.107.112:8099',
      //   pathRewrite: {'^/api':''},
      //   ws: true, // 用于注册websocket
      //   changeOrigin: true //用于控制请求头中的host值
      // },
    }
  }
})
