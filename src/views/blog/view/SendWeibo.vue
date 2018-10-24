<template>
    <!--<link rel="stylesheet" href="icon/iconfont.css">-->
    <div>
        <div id="header">
            <span @click="go()">{{pageMessage.cancel}}</span>
            <span class="f">{{pageMessage.send}}{{pageMessage.blog}}</span>
            <span class="name">{{pageMessage.nickname}}</span>
            <button @click="send()">{{pageMessage.send}}</button>
        </div>
        <div id="body">
            <mu-text-field placeholder="分享新鲜事......" multi-line :rows="11" full-width solo>

            </mu-text-field><br/>
            <div id="content">
                <span>你在哪里</span>
                <span>公 开</span>
            </div>
        </div>
        <div id="annex">
            <p>{{pageMessage.addMoreAttachments}}</p>
            <div id="blank"></div>
            <div id="container">
                <div id="photo">
                    <i class="iconfont icon-xiangce-xianxing"></i>
                </div>
                <div id="shoot">
                    <i class="iconfont icon-paishe"></i>
                </div>
                <div id="super-talk">
                    <i class="iconfont icon-weixin"></i>
                </div>
                <div id="topic">
                    <i class="iconfont icon-huati"></i>
                </div>
            </div>
            <div id="container-span">
                <span>{{pageMessage.album}}</span>
                <span>{{pageMessage.shooting}}</span>
                <span>{{pageMessage.supertalk}}</span>
                <span>{{pageMessage.topic}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                pageMessage:{
                    cancel:this.$t('blog.cancel'),
                    send:this.$t('blog.send'),
                    nickname:this.$t('blog.nickname'),
                    addMoreAttachments:this.$t('blog.addMoreAttachments'),
                    blog:this.$t('blog.blog'),
                    album:this.$t('blog.album'),
                    shooting:this.$t('blog.shooting'),
                    supertalk:this.$t('blog.supertalk'),
                    topic:this.$t('topic.topic'),
                    shareSomethingNew:this.$t('topic.shareSomethingNew'),
                }
            }
        },

        methods:{

            go(){
                this.$router.go(-1);
            },
            send(){
                alert('发送成功');
            }
        }
    }
</script>
<style scoped lang="scss">
    * {
        margin: 0px;
        padding: 0px;
    }

    #header {
        height: 50px;
        border-bottom: 1px solid;
        overflow: hidden;
        position: relative;
    }

    #header button {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    #header span:first-child {
        position: absolute;
        left: 10px;
        top: 15px;
    }
    .f{
        position: absolute;
        left: 160px;
        top: 3px;
        font-weight: bold;
        font-size: 16px;
    }
    .name {
        position: absolute;
        left: 168px;
        top: 20px;
    }
    #body{
        height: 300px;
        border-bottom: 1px solid black;
        position: relative;
    }
    #content{
        position: absolute;
        bottom: 10px;
    }
    #content span:first-child{
        margin-left:10px;
        margin-right: 260px;
    }
    #content span{
        background: #c0c0c0 ;
        border-radius: 8px;
    }

    #annex p{

    }
    #container{
        display: flex;
        height: 100px;
    }
    #container div{
        flex:1;
        height: 100%;
        text-align: center;
        line-height: 100px;

    }
    #photo{
    background: #1e88e5;
        border-radius: 50%;
    }
    #shoot{
    background: #03ad77;
        border-radius: 50%;
    }
    #super-talk{
    background: #fb8c00;
        border-radius: 50%;
    }
    #topic{
    background: #e53935;
        border-radius: 50%;
    }
    #container-span{
         display: flex;
        text-align: center;
    }
    #container-span span{
        display: block;
        flex:1;
    }
    #blank{
        height: 10px;
    }

</style>