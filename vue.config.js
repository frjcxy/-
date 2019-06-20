module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
      // open: process.platform === 'darwin',
      // host: 'localhost',
      port: 8080,
      open: true, //配置自动启动浏览器
      proxy: {
        '/api': {
          target: 'http://192.168.0.108:9001/', //对应接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/ips': {
          target: 'http://192.168.0.108:9001/', //对应接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/ips': ''
          }
        },
      }
     },
  }