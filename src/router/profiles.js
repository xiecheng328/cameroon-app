/**
 * Created by apple on 18/10/11.
 * profile(我的)模块子路由
 */
// import Vue from 'vue';
// import Router from './vue-router';
// import CommonFooter from '@/components/common/CommonFooter.vue'
import HelpAndfeedback from '@/views/profile/childrenpage/HelpAndfeedback/HelpAndfeedback.vue';
import Identification from '@/views/profile/childrenpage/Identifiction/Identifict.vue';
import Mydownload from '@/views/profile/childrenpage/Mydownload/Mydownload.vue';
import Myfans from '@/views/profile/childrenpage/Myfans/Myfans.vue';
import Myinterst from '@/views/profile/childrenpage/Myinterst/Myinterst.vue';
import Myset from '@/views/profile/childrenpage/MySet/Myset.vue';
import Myshopping from '@/views/profile/childrenpage/Myshopping/Myshopping.vue';
import About from '@/views/profile/childrenpage/MySet/component/About.vue';
import Check from '@/views/profile/childrenpage/MySet/component/Check.vue';
import Clear from '@/views/profile/childrenpage/MySet/component/Clear.vue';
import Message from '@/views/profile/childrenpage/MySet/component/Message.vue';
// Vue.use(Router);
export default [
    // mode: 'history',
    // base: process.env.BASE_URL,
   
       {
        path: '/myinterst',
        name: 'Myinterst',
        component: Myinterst,
      },
      {
        path: '/myfans',
        name: 'Myfans',
        component:Myfans,
      }, {
        path: '/myshopping',
        name: 'Myshopping',
        component: Myshopping,
      }, {
        path: '/identification',
        name: 'Identification',
        component: Identification,
      }, {
        path: '/mydownload',
        name: 'Mydownload',
        component: Mydownload,
      }, {
        path: '/myset',
        name: 'Myset',
        component: Myset,
        children:[
            {
                path: '/myset/about',
                name: 'About',
                component: About,
            },
            {
                path: '/myset/check',
                name: 'Check',
                component: Check,
            },
            {
                path: '/myset/clear',
                name: 'Clear',
                component: Clear,
            },
            {
                path: '/myset/message',
                name: 'Message',
                component: Message,
            }

        ]


    },
      {
        path: '/helpAndfeedback',
        name: 'HelpAndfeedback',
        component: HelpAndfeedback,
      },
    
];