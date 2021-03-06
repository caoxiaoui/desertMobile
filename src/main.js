// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './../static/lib/mui/css/mui.min.css'
import echarts from 'echarts'

//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入element


import axios from 'axios'

import App from './App'
import router from './router'

//过滤器
import dateFormat from './filter/commonfilter'
Object.keys(dateFormat).forEach(key =>{
  Vue.filter(key,dateFormat[key])
})
//过滤器

//swiper滑块
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//swiper滑块

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}


Vue.use(MintUI)
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  
  render: h => h(App)
})
