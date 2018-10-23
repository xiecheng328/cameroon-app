<template>
    <div class="apps">
        <div  class="app2">
            <button class="app7"><router-link to="/ownPage/weibos"><img src="../../../assets/img/返回.png"/></router-link></button>
            <div class="liaotian">{{pageMessage.nickname}}</div>
            <button class="shezhi">{{pageMessage.setting}}</button>
        </div>
        <div class="app-bottom">
            <div class="kongbai">
                <button class="yinliang"><img src="../../../assets/img/音量.png" /></button>
                <input  class="shuchu"   type="text">
                <button  class="fasong"  value="发送">{{pageMessage.send}}</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        name:"Talk",
        data(){
            return {
                pageMessage:{
                    nickname:this.$t('blog.nickname'),
                    setting:this.$t('blog.setting'),
                    send:this.$t('blog.send'),
                }
            }
        },

    }
</script>
<style scoped lang="scss">
    .apps{
        height:1000px;
    }
    .app1 {
        width: 6.4rem;
        height: 40px;
        background-color: #ffffff;
        text-align:center;
    }
    .app2 {
        position:fixed;
        left:0px;
        top:0px;
        width:100%;
        width: 6.4rem;
        height: 70px;
        background-color: #ffffff;
        text-align:center;
    }
    .app7 {
        float: left;
        width: 14px;
        height: 24px;
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        background: white;
        position: absolute;
        left: 10px;
        top: 32px;
    }
    .liaotian {
        height: 29px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        float:left;
        line-height: 88px;
        position: absolute;
        left: 50%;
        top: 30px;
        margin-left: -13%;
        line-height: 26px;
    }
    .shezhi{
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        background: white;
        float: left;
        position: absolute;
        right: 20px;
        top: 32px;
        width: 46px;
        height: 23px;
        color: #333333;
    }
    .yinliang {
        width: 8%;
        background: white;
        position: absolute;
        left: 3%;
        bottom: 15px;
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
    }

    .shuchu {
        width: 60%;
        height: 35px;
        background-color: #ffffff;
        border-radius: 5px;
        border: solid 1px #dddddd;
        float: left;
        position:absolute;
        left: 15%;
        bottom: 15px;
    }
    .fasong {
        width: 60px;
        height: 35px;
        background-color: #2196f3;
        border-radius: 5px;
        float: left;
        position: absolute;
        left: 80%;
        bottom: 15px;
        color: #ffffff;
    }
    .xxx{
        background: #eeeeee;
        width: 6.4rem;
    }
    .app-bottom{
        position: fixed;
        bottom: 0;
        left:0;
    }
    .kongbai{
        width: 6.4rem;
        height: 60px;
        background: white;
    }
</style>
<style scoped lang="scss">
</style>
