/**
 * Created by apple on 18/10/11.
 * blog(微博)模块子路由
 */
import cHead from '@/components/common/CommonHead.vue';
import details from '@/views/blog/Allflw.vue';
import answer from '@/views/blog/topic/Answer.vue';
import BlogHeader from '@/views/blog/component/BlogHeader.vue';
import CommonFooter from '@/components/common/CommonFooter.vue';
import SendWeibo from '@/views/blog/view/SendWeibo.vue';
import Search from '@/views/blog/topic/Search.vue';
import comment from '@/views/blog/view/comment.vue';
import LikeWeibo from '@/views/blog/view/LikeWeibo.vue';
import CommentWb from '@/views/blog/view/CommentWb.vue';
import RepostWb from '@/views/blog/view/RepostWb.vue';

export default [
    {
        path: '/blog',
        redirect: "/blog/details"
    },
    {path: '/sendweibo', component: SendWeibo},
    {path: 'details', components: {header: BlogHeader, default: details, footer: CommonFooter}},
    {path: '/answer', component: answer, name: 'answer'},
    {path: 'search', component: Search, name: 'Search'},
    {path: '/likeweibo', component: LikeWeibo,name: 'LikeWeibo'},
    {path: '/commentwb', component: CommentWb,name: 'CommentWb'},
    {path: '/repostwb', component: CommentWb,name: 'RepostWb'},

    {
        path: 'passage',
        component: comment,
    },
    {path :'/cHead',component:cHead,name:'CommonHead'},
]
