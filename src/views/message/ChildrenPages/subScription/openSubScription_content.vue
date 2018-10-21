<template>
    <div>
        <div class="header">
            <span class="ReturnCon" @click="ReturnCon"><<</span>
            <h5 class="small-header">农机使用</h5>
        </div>
        <OpenSubScription_message  v-for="val in list" :list="val"></OpenSubScription_message>
    </div>

</template>

<script>
    import OpenSubScription_message from "./openSubScription_message.vue";

    export default {
        data(){
            return{
                list:[
                    {title:"专家某遇到的问题",time:"星期一 9:10"},
                    {title:"专家某总结的经验",time:"昨天 4:27"},
                    {title:"对此我们总结的经验是",time:"10-01 18:30"},

                ]
            }
        },
        methods:{
            ReturnCon(){
                this.$router.push({
                    path:'/subScription_content'
                })
            },
        },
        components:{
            OpenSubScription_message
        },
        name: "openSubScription_content"
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
        font-size: 20px;
        padding-right: 2.5rem;
    }
    .MoreCon{
        height: 20px;
        width: 20px;
        float: right;
        margin-right: -3.5rem;
        margin-top: 11px;
    }
    .ReturnCon{
        margin-left: 10px;
        font-size: 20px;
    }
</style>
