<template>
    <div>
        <div class="header">
            <span @click="ReturnM"><<</span>
            <h5 class="small-header">{{pagemessage.unattendedNews}}</h5>
        </div>
        <NewsList  v-for="val in pagemessage.list" :list="val"></NewsList>
    </div>

</template>

<script>
    import NewsList from "./newsList.vue";

    export default {
        data(){
            return{
                pagemessage:{
                    unattendedNews:this.$t("message.unattendedNews"),
                    list:this.$t("message.list")
                }
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
