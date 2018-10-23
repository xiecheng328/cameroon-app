<template>
    <div id="per-wrapper">
        <div class="per-focus" @click="change">{{pageMessage.collection}}</div>
        <div class="per-focus jubao">{{pageMessage.report}}</div>
        <div class="per-focus">{{pageMessage.copyLink}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                pageMessage:{
                    collection:this.$t('blog.collection'),
                    report:this.$t('blog.report'),
                    copyLink:this.$t('blog.copyLink'),
                    collected:this.$t('blog.collected'),

                }
            }
        },
        methods:{
            change(){
                this.pageMessage.collection=this.pageMessage.collected;
            }
        }
    }
</script>
<style scoped lang="scss">
    #per-wrapper{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #ffffff;
        padding: 0.2rem 0;
        & .per-focus{
            float: left;
            height: 0.35rem;
            width: 32%;
            color:rgb(149,149,147);
            font-size: 16px;
            text-align: center;
            line-height: 0.35rem;

        }
        & .jubao{
            border-right: 1px solid gray;
            border-left: 1px solid gray;
        }
    }
</style>