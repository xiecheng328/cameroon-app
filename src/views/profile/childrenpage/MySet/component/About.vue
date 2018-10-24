<template>

    <div class="top">
        <div>
            <!--<router-link to="/myset">-->
            <div @click="changeFatherC()"><img class="top-img" src="@/assets/img/return.png"></div>
                <!--<img class="top-img" @click="" src="@/assets/img/return.png">-->
            <!--</router-link>-->
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span>{{Setting}}</span>
        </div>

        <div class="top-pic">
            <img class="pic-img" src="@/assets/img/app-ico.png">
            <span>V 1.1.0</span>
        </div>

        <div class="center">
            <div class="center-size ">{{func}}</div>
            <div class="center-size ">{{checkVersion}}</div>
            <div class="center-size">{{website}}</div>
        </div>

        <div class="bottom">
            <div class="bottom-font">{{serviceTerm}} | {{privacy}}</div>
            <div class="bottom-font">Copyright  © 2018-2019 Tencent. All Rights Reserved</div>
            <!-- <div class="bottom-font">{{sContent}}</div> -->
        </div>
    </div>

</template>

// sass报错？？？暂不能使用sass
<style >
    .top {
        height:1.2rem;
    }

    .top .top-img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10px;
        top: 10px;
    }

    .top div {
        text-align: center;
        font-size: 20px;
    }

    .top-pic {
        height: 2.5rem;
        background-color: #cccccc;
    }

    .top-pic .pic-img{
        width: 1rem;
        height: 1rem;
        position: absolute;
        margin-top: 7%;
        margin-left: -5%;
    }

    .top-pic span{
        position: absolute;
        padding-top: 25% ;
        margin-left: -5% ;
    }

    .center {
        height: 3.0rem;
    }

    .center div{
        padding-left: 0.2rem;
    }

    .center .center-size{
        border-bottom: 1px solid burlywood;
        text-align: left;
        font-size: 18px;
    }

    .bottom {
        height: 1.2rem;
        position: absolute;
        bottom: 1rem;
    }
    .bottom .bottom-font {
        font-size: 14px;
        text-align: center;
        margin-left: 0.2rem;
    }
</style>

<script >
    export default{
        name:"profile",
        data(){
            return {
                Setting:this.$t('profile.Setting'),
                account:this.$t('profile.account'),
                password:this.$t('profile.password'),
                forgetPs:this.$t('profile.forgetPs'),
                registered:this.$t('profile.registered'),
                switchOther:this.$t('profile.switchOther'),
                func:this.$t('profile.func'),
                checkVersion:this.$t('profile.checkVersion'),
                website:this.$t('profile.website'),
                serviceTerm:this.$t('profile.serviceTerm'),
                privacy:this.$t('profile.privacy'),
            }
        },
        methods:{
            changeFatherC() {
                this.$emit('resetFatherp');
            },

        }
    }
</script>
