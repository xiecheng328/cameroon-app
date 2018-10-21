<template>

    <mu-container class="clear">
        <div class="clear-title" >
            <mu-button class="clear-title-back" flat @click="changeFatherC()">返回</mu-button>
            <h3 class="clear-title-header">清理缓存</h3>
        </div>
        <div class="clear-app">
            <p>应用已用空间:</p>
            <hr>
            <p class="clear-app-space">1.00 GB</p>
        </div>
        <div class="clear-app-button">
            <button>清理缓存</button>
        </div>



    </mu-container>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            changeFatherC() {
                this.$emit('resetFatherp');
            },
        }
    }

</script>
<style>

    .clear-title {
        margin-top: 0.4rem;
        height: 40px;
        line-height: 40px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
    }
    .clear-title-back {
        margin-left: 0.2rem;
    }
    .clear-title-header {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    .clear-app{
        text-align: center;
        position: relative;
        top: 1rem;
        width: 100%;
        height: 3rem;
        border-bottom: #969896 solid 1px;
    }
    .clear-app hr{
        width: 1rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%)
    }
    .clear-app-space{
        font-size: 0.5rem;
    }
    .clear-app-button{
        padding-top: 3rem;
        text-align: center;
    }









</style>