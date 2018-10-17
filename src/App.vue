<template>
    <div id="app">
        <mu-container>
            <div id="cameroon-content">
                <router-view/>
            </div>
            <mu-bottom-nav>
                <mu-bottom-nav-item title="圈子" to="/Blog" icon="." id="cameroon-blog"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="信息" to="/message" icon="." id="cameroon-message"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="商城" to="/shop" icon="." id="cameroon-shop"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="我的" to="/profile" icon="." id="cameroon-profile"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

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
            background: url("./assets/blog-icon-unchecked.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }
        #cameroon-message .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("./assets/message-icon.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }

        #cameroon-shop .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("./assets/shop-icon.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }
        #cameroon-profile .mu-bottom-item-wrapper .mu-bottom-item-icon {
            background: url("./assets/my-icon.png") center no-repeat;
            background-size: 20px;
            color: #fff;
        }
    }
    #cameroon-content{
        height:100%;
        margin-bottom: 56px;
    }

</style>
