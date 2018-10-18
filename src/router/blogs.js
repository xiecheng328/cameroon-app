/**
 * Created by apple on 18/10/11.
 * blog(微博)模块子路由
 */
import details from '@/views/blog/Detail.vue';
import topic from '@/views/blog/Topic.vue';
import fellow from '@/views/blog/topic/Fellow(glx).vue';
import recommend from '@/views/blog/topic/Recommend.vue';
import hotlist from '@/views/blog/topic/HotList.vue';
import alists from '@/views/blog/topic/ArticleLists.vue';
import qutquestion from '@/views/blog/PutQuestion.vue';
import answer from '@/views/blog/topic/Answer.vue';
import article from '@/views/blog/topic/Article.vue';
import ArticleFooter from '@/components/topic/ArticleFooter.vue';
import BlogHeader from '@/components/blog/CommonHeader.vue';
import CommonFooter from '@/components/common/CommonFooter.vue';
import SendWeibo from '@/views/blog/view/SendWeibo.vue';
import Search from '@/views/blog/topic/Search.vue';
export default [
    {
        path: '/blog',
        redirect: "/blog/details"
    },
    {path: 'details', components: {header: BlogHeader, default: details,footer:CommonFooter}},
    {path: 'qutquestion', component: qutquestion, name: 'qutquestion'},
    {path: '/answer', component: answer, name: 'answer'},
    {path: 'search', component: Search, name: 'Search'},
    {
        path: 'topic', components: {header:BlogHeader, default: topic,footer: ArticleFooter}, name: 'topic',
        children: [
            {path: 'fellow', components:{ default:fellow,footer:ArticleFooter}, name: 'fellow'},
            {path: 'recommend', component: recommend, name: 'recommend'},
            {path: 'hotlist', component: hotlist, name: 'hotlist'},
            {path: 'alists', component: alists, name: 'alists'},
            {path: 'article', component: article, name: 'article'},

        ]
    },
    {path: '/sendweibo', component: SendWeibo},


]
