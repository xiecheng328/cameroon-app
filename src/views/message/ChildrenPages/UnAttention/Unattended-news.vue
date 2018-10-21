<template>
    <div>
        <div class="header">
            <span @click="ReturnM"><<</span>
            <h5 class="small-header">未关注人消息</h5>
        </div>
        <NewsList  v-for="val in list" :list="val"></NewsList>
    </div>

</template>

<script>
    import NewsList from "./newsList.vue";

    export default {
        data(){
            return{
                list:[
                    {name:"zhangyu",time:"9:10",content:"农机的修理..."},
                    {name:"lixin",time:"昨天",content:"农机的维护问题..."},
                    {name:"liutong",time:"09-11",content:"关于播种，那些你不知道的事"},
                    {name:"lizhi",time:"10-01",content:"农机购买应注意的问题..."},
                    {name:"wangyu",time:"05-21",content:"我想向您咨询点问题"},
                    {name:"zhaoxin",time:"08-21",content:"请您现在有时间吗？"}
                ]
            }
        },
        components:{
            NewsList
        },
        methods:{
            ReturnM(){
                this.$router.push({
                    path:"/message"
                });
                this.$emit('returnM');
            }
        },
        name: "Unattended-news"
    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .header{
        background: wheat;
        height: 40px;
        line-height: 40px;
    }
    .small-header{
        float: right;
        padding-right: 137px;
    }
</style>
