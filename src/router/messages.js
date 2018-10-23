/**
 * Created by apple on 18/10/11.
 * message(消息)模块子路由
 */
import OpenSubScription_content from '../views/message/ChildrenPages/subScription/openSubScription_content';
import OpenSubScription_message from '../views/message/ChildrenPages/subScription/openSubScription_message';
import SubScription_content from '../views/message/ChildrenPages/subScription/subScription_content';
import SubScription_message from '../views/message/ChildrenPages/subScription/subScription_message';
import Report from '../views/message/report';
import Message from '../views/message/Message';
import CopyList from '../views/message/copyList';
import Newdetail from '../views/message/newdetail';
import Chatroom from '../views/message/ChildrenPages/UnAttention/Chatroom';
import Withme from '../views/message/Withme';
import Unattended_news from '../views/message/ChildrenPages/UnAttention/Unattended-news';
export default [
    {path:'/openSubScription_content',component:OpenSubScription_content},
    {path:'/openSubScription_message',component:OpenSubScription_message},
   {path:'/subScription_content',component:SubScription_content},
    {path:'/subScription_message',component:SubScription_message},
    {
        path:'/newdetail',component:Newdetail
    },
   {path:'/chatroom',component:Chatroom},
    {path:'/withme',component:Withme},
    {
        path:'/report',
        name:'Report',
        component:Report,
    },
    {

        path:'/copyList',
        name:'CopyList',
        component:CopyList,
    },
    { path:"/Unattended_news" ,component:Unattended_news},
    { path:"/message" ,component:Message},

]