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
import UserGuide from '@/views/profile/childrenpage/HelpAndfeedback/UserGuide.vue';
import Login from '@/views/profile/childrenpage/MySet/component/Login.vue';
import Vip from '@/views/profile/childrenpage/Mydownload/component/Vip.vue';
import Video from '@/views/profile/childrenpage/Mydownload/component/Video.vue';
import Manage from '@/views/profile/childrenpage/Mydownload/component/Manage.vue'
// import UserFeedback from '@/views/profile/childrenpage/HelpAndfeedback/UserFeedback.vue';
// import Commonquestion from '@/views/profile/childrenpage/HelpAndfeedback/Commonquestion.vue';
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
        children:[
            {
                path: '/mydownload/vip',
                name: 'Vip',
                component: Vip,
            },
            {
                path: '/mydownload/video',
                name: 'Video',
                component: Video,
            },
            {
                path: '/mydownload/manage',
                name: 'Manage',
                component: Manage,
            },
        ]
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
            },
            {
                path: '/myset/login',
                name: 'Login',
                component: Login,
            }

        ]


    },
      {
        path: '/helpAndfeedback',
        name: 'HelpAndfeedback',
        component: HelpAndfeedback,
        children:[
          {
              path: '/commonquestion',
              name: 'Commonquestion',
              // component: Commonquestion,
          },
          {
              path: '/userGuide',
              name: 'UserGuide',
              component: UserGuide,
          },
          {
              path: '/userFeedback',
              name: 'UserFeedback',
              // component: UserFeedback,
          },
         

      ] },
     
    
];
