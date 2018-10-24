<template>
    <div>
        <div id="container-span">
            <span @click="jump">{{pageMessage.forward}}109</span>
            <span>{{pageMessage.comment}}8989</span>
            <span>{{pageMessage.like}}908</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                pageMessage:{
                    forward:this.$t('blog.forward'),
                    comment:this.$t('blog.comment'),
                    like:this.$t('blog.like'),
                }
            }
        },
        methods:{
            jump(){
                this.$router.push('/blog/passage/report');
            }
        }

    }
</script>

<style scoped>
    #container-span{
        background: white;
        height: .8rem;
        display: flex;
    }
    span{
        text-align: center;
        flex: 1;
        height :100%;
        line-height: .8rem;
        color: gray;
        font-weight: 200;
        margin: auto 10px;
    }
    span:hover{
        color:blue;
        border-bottom: 1px solid blue;
    }
</style>

