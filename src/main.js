import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import {EleResize} from './assets/js/esresize' //在div上实现类似window的onresize 监听，这样既能实现图表的自适应，也不会因为页面跳转之后继续执行三个页面的onresize 方法
import './assets/css/reset.css'
import './libs/rem'
Vue.prototype.$EleResize = EleResize
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
