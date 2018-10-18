import Vue from 'vue'
import Router from 'vue-router'

//引入VUE组件
import Blog from '@/views/blog/Blog.vue';
import Message from '@/views/message/Message.vue';
import Shop from '@/views/shop/Shop.vue';
import Profile from '@/views/profile/Profile.vue';

import CommonFooter from '@/components/common/CommonFooter.vue'

// 引用 blog 子路由配置文件
import blogs from './router/blogs.js'

// 引用 message 子路由配置文件
import messages from './router/messages.js'

// 引用 shop 子路由配置文件
import shops from './router/shops.js'

// 引用 profile 子路由配置文件
import profiles from './router/profiles.js'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: "/blog"
        },
        {
            path: '/blog',
            component:Blog,
            children: blogs
        },
        {
            path: '/shop',
            components: {
                default:Shop,
                footer:CommonFooter
            },
            children: shops
        },
        {
            path: '/message',
            components: {
                default:Message,
                footer:CommonFooter
            },
            children: messages
        },
        {
            path: '/profile',
            components: {
                default:Profile,
                footer:CommonFooter
            },
            children: profiles
        },
    ]
})
