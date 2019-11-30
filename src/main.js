import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// main.js
window.Vue = require('vue');
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
 preLoad: 1.3, // 事前ロードする高さの割合指定
 error: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkOacdHKH4cGbmFusQ1OEF8nLFN_1Y5scd0WR_bGLGGeiRTIp&s', // エラー時に表示する画像指定
 loading: 'https://www.benricho.org/loading_images/img-svg/heart-red.svg', // ロード中に表示する画像指定
 attempt: 2 // ロード失敗した時のリトライの上限指定
});

