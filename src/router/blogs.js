/**
 * Created by apple on 18/10/11.
 * blog(微博)模块子路由
 */
import cHead from '@/components/common/CommonHead.vue';
import details from '@/views/blog/Allflw.vue';
import topic from '@/views/blog/Topic.vue';
import fellow from '@/views/blog/topic/Fellow(glx).vue';
import recommend from '@/views/blog/topic/Recommend.vue';
import hotlist from '@/views/blog/topic/HotList.vue';
import alists from '@/views/blog/topic/ArticleLists.vue';
import putquestion from '@/views/blog/topic/PutQuestion.vue';
import answer from '@/views/blog/topic/Answer.vue';
import article from '@/views/blog/topic/Article.vue';
import ArticleFooter from '@/components/topic/ArticleFooter.vue';
import BlogHeader from '@/views/blog/component/BlogHeader.vue';
import CommonFooter from '@/components/common/CommonFooter.vue';
import SendWeibo from '@/views/blog/view/SendWeibo.vue';
import Search from '@/views/blog/topic/Search.vue';
import TopicHeader from '@/components/topic/TopicHeader.vue';
import TopicComment from '@/views/blog/topic/Comment.vue';
import ownPages from '@/views/blog/OwnPage.vue';
import comment from '@/views/blog/view/comment.vue';
export default [
    {
        path: '/blog',
        redirect: "/blog/details"
    },
    {path: '/sendweibo', component: SendWeibo},
    {path: 'details', components: {header: BlogHeader, default: details, footer: CommonFooter}},
    {path: '/answer', component: answer, name: 'answer'},
    {path: 'search', component: Search, name: 'Search'},
    {
        path: 'passage',
        component: comment,
    },
    {path :'/cHead',component:cHead,name:'CommonHead'},
    {
        path: 'topic',
        component: topic,
        name: 'topic',
        children: [
            {
                path: 'fellow',
                components:
                    {
                        header: TopicHeader,
                        default: fellow,
                        footer: CommonFooter
                    },
                name: 'fellow'
            },
            {
                path: 'recommend',
                components: {
                    header: TopicHeader,
                    footer: CommonFooter,
                    default: recommend,

                },
                name: 'recommend'
            },
            {
                path: 'hotlist',
                components: {
                    header: TopicHeader,
                    footer: CommonFooter,
                    default: hotlist
                },
                name: 'hotlist'
            },
            {
                path: 'alists',
                components: {
                    header: TopicHeader,
                    footer: CommonFooter,
                    default: alists
                },
                name: 'alists'
            },
            {
                path: 'article',
                components: {
                    header: TopicHeader,
                    footer: CommonFooter,
                    default: article
                },
                name: 'article'
            },
            {
                path:'comment',
                component:TopicComment,
            },
            {
                path: 'putquestion',
                component: putquestion,
                name: 'qutquestion'
            },
            {
                path:'ownPage',
                component:ownPages
            }
        ]
    }
]
