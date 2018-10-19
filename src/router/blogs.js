/**
 * Created by apple on 18/10/11.
 * blog(微博)模块子路由
 */
import cHead from '@/components/common/CommonHead.vue';
import details from '@/views/blog/Allflw.vue';
import BlogHeader from '@/components/blog/CommonHeader.vue';
import CommonFooter from '@/components/common/CommonFooter.vue';
import SendWeibo from '@/views/blog/view/SendWeibo.vue';
import ownPages from '@/views/blog/OwnPage.vue'
export default [
    {
        path: '/blog',
        redirect: "/blog/details"
    },
    {path: '/sendweibo', component: SendWeibo},
    {path: 'details', components: {header: BlogHeader, default: details, footer: CommonFooter}},
    {path :'/cHead',component:cHead,name:'CommonHead'},

]
