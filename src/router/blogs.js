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
import article from '@/views/blog/topic/Article.vue'
export default [
    {path: 'details', component: details},
    {path: 'qutquestion', component: qutquestion, name: 'qutquestion'},
    {path: '/answer', component: answer, name: 'answer'},
    {
        path: 'topic', component: topic, name: 'topic',
        children: [
            {path: 'fellow', component: fellow, name: 'fellow'},
            {path: 'recommend', component: recommend, name: 'recommend'},
            {path: 'hotlist', component: hotlist, name: 'hotlist'},
            {path: 'alists', component: alists, name: 'alists'},
            {path: 'article', component: article, name: 'article'},

        ]
    },


]
