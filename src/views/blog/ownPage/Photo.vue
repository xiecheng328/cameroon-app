<template>
    <div id="photo">
        <span>{{pageMessage.September}}</span>
        <ul>
            <img src="./photo/1.jpg">
            <img src="./photo/2.jpg">
            <img src="./photo/3.jpg">
            <img src="./photo/4.jpg">
            <img src="./photo/5.jpg">
            <img src="./photo/6.jpg">
            <img src="./photo/7.jpg">
            <img src="./photo/8.jpg">
            <img src="./photo/9.jpg">
        </ul>
        <span>{{pageMessage.October}}</span>
        <ul>
            <img src="./photo/1.jpg">
            <img src="./photo/2.jpg">
            <img src="./photo/3.jpg">
            <img src="./photo/4.jpg">
            <img src="./photo/5.jpg">
            <img src="./photo/6.jpg">
            <img src="./photo/7.jpg">
            <img src="./photo/8.jpg">
            <img src="./photo/9.jpg">
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                pageMessage:{
                    September:this.$t('blog.September'),
                    October:this.$t('blog.October'),
                }
            }
        },
        methods:{
        }
    }
</script>
<style scoped lang="scss">
    #photo span{
        color:rgb(149,149,147);
        display: block;
    }

    #photo img{
        width: 33%;
        height:83px;
        padding: 5px 5px 2px 2px;
    }
</style>