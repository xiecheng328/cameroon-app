<template>
    <div id="app">
        <mu-container>
            <div id="cameroon-content">
                <router-view/>
            </div>
            <mu-bottom-nav>
                <mu-bottom-nav-item :title="bottomBar.blog" to="/Blog" icon="." id="cameroon-blog"></mu-bottom-nav-item>
                <mu-bottom-nav-item :title="bottomBar.message" to="/message" icon="." id="cameroon-message"></mu-bottom-nav-item>
                <mu-bottom-nav-item :title="bottomBar.shop" to="/shop" icon="." id="cameroon-shop"></mu-bottom-nav-item>
                <mu-bottom-nav-item :title="bottomBar.profile" to="/profile" icon="." id="cameroon-profile"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                bottomBar:{
                    blog:this.$t('bottomBar.blog'),
                    message:this.$t('bottomBar.message'),
                    shop:this.$t('bottomBar.shop'),
                    profile:this.$t('bottomBar.profile')
                }
            }
        }
    }
</script>
<style lang="scss">
    .mu-bottom-nav {
        width: 100% !important;
        position: fixed !important;
        margin-bottom:0 !important;
        height: 48px !important;
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
        height:600px;
    }

</style>
