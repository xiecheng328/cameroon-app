/**
 * Created by apple on 18/10/11.
 * blog(微博)模块子路由
 */
import cHead from '@/components/common/CommonHead.vue';
import details from '@/views/blog/Allflw.vue';
import BlogHeader from '@/views/blog/component/BlogHeader.vue';
import CommonFooter from '@/components/common/CommonFooter.vue';
import SendWeibo from '@/views/blog/view/SendWeibo.vue';
import comment from '@/views/blog/view/comment.vue';
import Passage from '@/views/blog/Passage.vue';
import LikeWeibo from '@/views/blog/view/LikeWeibo.vue';
import CommentWb from '@/views/blog/view/CommentWb.vue';
import RepostWb from '@/views/blog/view/RepostWb.vue';
import Talk from '@/views/blog/view/Talk.vue';
import Forwaid from '@/views/blog/view/Forwaid.vue';
import report from '@/views/blog/view/report.vue'
import Forword from '@/views/blog/view/Forword.vue'
export default [
    {path: '/blog', redirect: "/blog/details"},
    {path: 'sendweibo', component: SendWeibo},
    {path: 'details', components: {header: BlogHeader, default: details, footer: CommonFooter}},
    {path: '/likeweibo', component: LikeWeibo,name: 'LikeWeibo'},
    {path: '/commentwb', component: CommentWb,name: 'CommentWb'},
    {path: '/repostwb', component: CommentWb,name: 'RepostWb'},
    {path: '/forword', component: Forword,name: 'Forword'},
    {path: 'passage',redirect:"passage/comment"},
    {path: 'passage', component: Passage,children:[
            {path: 'comment', component: report},
            {path: 'commentwb', component: CommentWb},
            {path: 'likeweibo', component: LikeWeibo}
        ]},
    {path:'/cHead',component:cHead,name:'CommonHead'},
    {path:'/talk',component:Talk,name:'Talk'},
    {path:'/forwaid',component:Forwaid,name:'Forwaid'},

]
