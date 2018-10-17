<template>
    <div id="app">
        <mu-container>
            <div id="cameroon-content">
                <router-view/>
            </div>
           <common-footer></common-footer>
        </mu-container>
    </div>
</template>
<script>
    import CommonFooter from '@/components/common/CommonFooter.vue';
    export default {
        components:{
            CommonFooter
        }
    }
</script>
<style lang="scss">
    .mu-bottom-nav {
        width: 100% !important;
        position: fixed !important;
        margin-bottom:0 !important;
        height: 50px !important;
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
        height:618px;
    }

</style>
