import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import '@/assets/css/reset.css';
//将mock文件下所有文件引入
import 'mockjs';
// import './mockAll';
//引入rem
import './assets/js/rem.js';
//引入css重置样式
// import './assets/css/reset.css';

Vue.config.productionTip = false;
//调用i18n
import VueI18n from 'vue-i18n';
import {getBrowserLanguage} from "./Unit/language";
//调用echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts ;
Vue.use(MuseUI);
Vue.use(VueI18n);
const messages = {
    zh: require('./Unit/lang/zh.js'),
    en: require('./Unit/lang/en.js'),
    fr: require('./Unit/lang/fra.js')
};
const i18n = new VueI18n({
    locale: 'fr', // 语言标识
    messages
});
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
