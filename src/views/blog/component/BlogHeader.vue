<template>
    <mu-appbar class="head">
        <mu-button class="camera" flat to="">
            <img src="../../../assets/img/cameralogo.png" alt="">
        </mu-button>
        <mu-button class="allAttention" flat to="/blog/details">{{pageMessage.allBlog}}</mu-button>
        <mu-button class="topic" flat to="/topic/recommend">{{pageMessage.topic}}</mu-button>
        <mu-button class="add" flat to="sendweibo">
            <img src="../../../assets/img/addlogo.png" alt="">
        </mu-button>
    </mu-appbar>
</template>

<script>
    export default {
        name: "BlogHeader",
        data(){
            return {
                pageMessage:{
                    allBlog:this.$t('blog.allBlog'),
                    topic:this.$t('blog.topic'),
                }
            }
        },
        methods:{
        }
    }
</script>

<style scoped>

    .head .camera{
        width: 15%;
    }
    .head .allAttention{
        width: 35%;
    }
    .head .topic{
        width: 35%;
    }
    .head .add{
        width: 15%;
    }
</style>