import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.config.productionTip = false;

Vue.use(MuseUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
