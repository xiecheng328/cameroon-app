<template>
    <div class="copyList">

        <div class="header">
            <img src="../../assets/img/left.png" alt="" class="comeback" @click="home">
            <h3 class="remark">{{pagemessage.alllcomment}}</h3>
            <router-link to="/myset/message"><h3 class="reset">{{pagemessage.setting}}</h3></router-link>
        </div>
        <ul class="body">
            <li><img src="../../assets/img/user.png" alt="" class="user-img">
                <span>zhangsan</span>
                <span>10:10</span>
            </li>
            <li class="goodluck">{{pagemessage.zancomment}}</li>
            <li>{{pagemessage.huifu}}</li>
            <li>{{pagemessage.how}}</li>
        </ul>
        <ul class="body">
            <li><img src="../../assets/img/user.png" alt="" class="user-img">
                <span>zhangsan</span>
                <span>10:10</span>
            </li>
            <li class="goodluck">{{pagemessage.zancomment}}</li>
            <li>{{pagemessage.huifu}}</li>
            <li>{{pagemessage.how}}</li>
        </ul>
        <ul class="body">
            <li><img src="../../assets/img/user.png" alt="" class="user-img">
                <span>zhangsan</span>
                <span>10:10</span>
            </li>
            <li class="goodluck">{{pagemessage.zancomment}}</li>
            <li>{{pagemessage.huifu}}</li>
            <li>{{pagemessage.how}}</li>
        </ul>




    </div>
</template>
<script>
    export default{
        data(){
            return{
                pagemessage:{
                    alllcomment:this.$t("message.alllcomment"),
                    setting:this.$t("message.setting"),
                    zancomment:this.$t("message.zancomment"),
                    huifu:this.$t("message.huifu"),
                    how:this.$t("message.how")

                }
            }
        },
        methods:{
            home(){
                this.$router.push({path:'/message'});
                this.$emit('returnM');
            },
            control(){
                this.$router.push({name:'MySet/component/Message.vue'});
            }
        }
    }
</script>

<style>
    li{
        list-style: none;
    }
    .user-img{
        width: 30px;
    }
    .comeback{
        width: 40px;
        top: 0;
    }
    .header{
        position: relative;
    }
    .remark{
        position: absolute;
        top:0;
        left:60px;
    }
    .reset{
        position: absolute;
        top:0;
        left:200px;
    }
    .goodluck{
        font-size:20px;
        background: pink;
    }
</style>

