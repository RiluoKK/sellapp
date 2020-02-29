import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// import BScroll from 'better-scroll'
Vue.use(ViewUI);
// Vue.use(BScroll);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')