<template>
    <div>
        <div class="header">
            <span class="ReturnPre" @click="ReturnPre"><<</span>
            <h5 class="small-header">订阅消息</h5>
            <img class="addMore" src="../../../../assets/img/message_add.png" @click="addmore" alt="">
        </div>
        <SubScription_message  v-for="val in list" :list="val"></SubScription_message>
    </div>

</template>

<script>
    import SubScription_message from "./subScription_message.vue";

    export default {
        data(){
            return{
                list:[
                    {name:"农机使用",content:"农机的使用注意事项，农机的各种特性。。。"},
                    {name:"农机维护",content:"如果其中的这个部件出现故障，原因是。。。"},
                    {name:"农机研发",content:"某个部件是由铁和钢制造而成，其中最重要的是。。。"}
                ]
            }
        },
        methods:{
            addmore(){
                this.$router.push({
                    path:'myinterst',
                })
            },
            ReturnPre(){
                this.$router.push('/message');
                this.$emit('returnM');
            },
        },
        components:{
            SubScription_message
        },
        name: "subScription_content"
    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .header{
        background: wheat;
        height:40px;
        line-height: 40px;
        font-size: 20px;
    }
    .small-header{
        float: right;
        padding-right: 2.5rem;
        font-size: 20px;
    }
    .addMore{
        height: 20px;
        width: 20px;
        float: right;
        margin-right: -228px;
        margin-top: 11px;
    }
    .ReturnPre{
        margin-left: 10px;
    }
</style>
