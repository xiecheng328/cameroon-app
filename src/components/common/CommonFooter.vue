<template>
    <mu-bottom-nav>
            <mu-bottom-nav-item :title="bottomBar.blog" to="/Blog" icon="." id="cameroon-blog"></mu-bottom-nav-item>
            <mu-bottom-nav-item :title="bottomBar.message" to="/message" icon="." id="cameroon-message"></mu-bottom-nav-item>
            <mu-bottom-nav-item :title="bottomBar.shop" to="/shop" icon="." id="cameroon-shop"></mu-bottom-nav-item>
            <mu-bottom-nav-item :title="bottomBar.profile" to="/profile" icon="." id="cameroon-profile"></mu-bottom-nav-item>
    </mu-bottom-nav>
</template>
<script>
    export default{
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
</style>
