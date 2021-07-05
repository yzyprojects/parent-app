import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false



registerMicroApps([

  {
    name: 'react-app',
    entry: 'http://localhost:3000/',
    fetch,
    container: '#react',
    activeRule: '/react-app',
  },
  {
    name: 'vueapp',
    entry: 'http://localhost:8082/',
    fetch,
    container: '#vue',
    activeRule: '/vue',
  },
  {
    name: 'v-child',
    entry: 'http://localhost:8080/',
    fetch,
    container: '#vchild',
    activeRule: '/v-child',
  }
]);
// 启动 qiankun
start();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
