<template>
    <li>
        <img src="../../../../assets/img/message_30a07a3203b47979cf5519981729f3d8.jpg" alt="">
        <div @click="subNext">
            <span class="user_name">
                {{list.name}}
            </span>
            <p class="content">{{list.content}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "subScription_message",
        props:["list"],
        methods:{
            subNext(){
                this.$router.push({
                    path:'/openSubScription_content'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    li{
        display: flex;
        height: 1.3rem;
        background-color:#ead4d4;
        margin-top: 5px;
    }
    img{
        height: 1.3rem;
        width: 1.3rem;
    }
    .user_name{
        font-size: 16px;
        padding-left: 0.2rem;
    }
    .content{
        overflow: hidden;
        width: 100%;
        padding-left: 0.2rem;
        padding-top: 0.1rem;
    }

</style>