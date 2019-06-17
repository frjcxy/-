import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入vuex
import store from './store/index'

//导入elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入axios
import http from './lib/http';
Vue.prototype.$http = http;

//导入组件
import router from "./lib/router"
//导入公共样式
import './assets/styles/base.css'
// 导入公共js
import common from './utils/common'
Vue.prototype.common = common

// 全局导入 面包屑组件 并注册
import mybreadxie from './components/common/mybreadcrumb.vue'
Vue.component('mybreadxie', mybreadxie)

import './assets/iconfont/font_1184615_xne14ovjjqf/iconfont.css'

new Vue({
  render: h => h(App),
  router,
  store,
  http
}).$mount('#app')
