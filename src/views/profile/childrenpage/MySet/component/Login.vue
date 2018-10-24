<template>
    <div class="log">
        <!-- <img aria-checked="" -->

        <div @click="changeFatherC()"><img class="top-img" src="@/assets/img/return.png"></div>
        <img src="@/assets/img/man.png" class="log-img">

        <div class="printIn search">
            {{account}}：<input type="text" class="prints">
            <br />
            {{password}}：<input type="password" class="prints">
        </div>
        <button class="gray left">{{forgetPs}}</button>
        <button class="gray right">{{registered}}</button>



        <div class="up">
            <!-- <p>{{sContent}}</p> -->
            <button class="white">{{switchOther}}</button>
        </div>
    </div>
</template>



<style>

    .top-img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10px;
        top: 10px;
    }

    .log{
        height: 4rem;
        background-color: #ccc;
    }

    .log-img{
        margin-top: 10%;
        margin-left: 28%;
        width: 150px;
        height: 150px;
    }

    .printIn{
        background-color: #ccc;
        margin-top: 20%;
        font-size: 0.3rem;
        font-weight: 600;
        border: 1px solid rgba(255,255,255,.8);
    }

    .prints{
        float: right;
        margin-top: 1%;
        margin-right: 5%;
    }

    .up{
        position: absolute;
        bottom: 10%;
        margin-left: 25%;
    }

    .gray {
        color: #e9e9e9;
        border: solid 1px #555;
        background: #6e6e6e;
        background: -webkit-gradient(linear, left top, left bottom, from(#888), to(#575757));
        background: -moz-linear-gradient(top,  #888,  #575757);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#888888', endColorstr='#575757');
    }
    .gray:hover {
        background: #616161;
        background: -webkit-gradient(linear, left top, left bottom, from(#757575), to(#4b4b4b));
        background: -moz-linear-gradient(top,  #757575,  #4b4b4b);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#757575', endColorstr='#4b4b4b');
    }
    .gray:active {
        color: #afafaf;
        background: -webkit-gradient(linear, left top, left bottom, from(#575757), to(#888));
        background: -moz-linear-gradient(top,  #575757,  #888);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#575757', endColorstr='#888888');
    }

    .left {
        position: relative;
        margin: 0.2rem;
        left: 12%;
    }

    .right {
        position: relative;
        margin: 0.2rem;
        right: -20%;
    }


    .white {
        color: #606060;
        border: solid 1px #b7b7b7;
        background: #fff;
        background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ededed));
        background: -moz-linear-gradient(top,  #fff,  #ededed);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed');
    }
    .white:hover {
        background: #ededed;
        background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#dcdcdc));
        background: -moz-linear-gradient(top,  #fff,  #dcdcdc);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#dcdcdc');
    }
    .white:active {
        color: #999;
        background: -webkit-gradient(linear, left top, left bottom, from(#ededed), to(#fff));
        background: -moz-linear-gradient(top,  #ededed,  #fff);
        filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#ffffff');
    }

    /* .search{
        text-align: center;
    }
    .search input{
        margin: 0 auto;
        padding: 0 10px;
        width: 536px;
        height: 34px;
        border: 1px solid rgba(255,255,255,.8);
        border-radius: 2px;
        color: #fff;
        background: rgba(0,0,0,.15);
    } */
</style>


<script>
    export default{
        data(){
            return {
                account:'compte',
                password:'passe',
                forgetPs:'oublier passe',
                registered:'Enregistré compte',
                switchOther:'Changez de mode de signalisation',
                func:'Présentation des fonctions',
                checkVersion:'Vérifiez la version mise à jour',
                website:'Réseau de',
                serviceTerm:'Conditions de service',
                privacy:'Accords de confidentialité',
            }
        },
        methods:{
            changeFatherC() {
                this.$emit('resetFatherp');
            },

        }
    }
</script>
