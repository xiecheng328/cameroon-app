/**
 * Created by apple on 18/10/11.
 * blog(微博)模块子路由
 */
import details from '@/views/blog/Detail.vue'
import topic from '@/views/blog/Topic.vue'
import fellow from '@/views/blog/topic/Fellow(glx).vue'

export default [
    {path: 'details', component: details},
    {path: 'topic', component: topic},
    {path: 'fellow',component: fellow}

]
