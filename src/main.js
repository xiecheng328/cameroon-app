import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'mockjs';
Vue.config.productionTip = false;
import VueI18n from 'vue-i18n';

Vue.use(MuseUI);
Vue.use(VueI18n);
const messages = {
    zh: require('./Unit/lang/zh.js'),
    en: require('./Unit/lang/en.js'),
    fr: require('./Unit/lang/fra.js')
};
const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages
});
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
