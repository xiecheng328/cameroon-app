import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
//将mock文件下所有文件引入
import 'mockjs';
// import './mockAll';
//引入rem
import './assets/css/rem.js';
//引入css重置样式
import './assets/css/reset.css'
Vue.config.productionTip = false;

Vue.use(MuseUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
