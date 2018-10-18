<template>
    <div id="app">
        <mu-container>
            <div id="cameroon-content">
               <router-view></router-view>
            </div>
           <!--<common-footer></common-footer>-->
            <router-view name="footer"></router-view>
        </mu-container>
    </div>
</template>
<script>
    //import CommonFooter from '@/components/common/CommonFooter.vue';
    export default {
        // components:{
        //     CommonFooter
        // }
    }
</script>
<style lang="scss">
    .container{
        padding-left:0 !important;
        padding-right:0 !important;
    }
    .mu-bottom-nav {
        height: 56px !important;
        position: fixed !important;
        bottom: 0;
        right: 0;
        left: 0;
        #cameroon-blog .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("assets/img/blog-icon-unchecked.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }
        #cameroon-message .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("assets/img/message-icon.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }

        #cameroon-shop .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("assets/img/shop-icon.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }
        #cameroon-profile .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("assets/img/my-icon.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }
    }
    #cameroon-content{
        height:100%;
        margin-bottom: 56px;
    }

</style>
