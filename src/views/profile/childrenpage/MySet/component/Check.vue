<template>

    <mu-container class="check">
        <div class="check-title" >
            <mu-button class="check-title-back" flat @click="changeFatherC()">返回</mu-button>
            <h3 class="check-title-header">检查更新</h3>
        </div>
        <div class="check-img">
            <div>
                <img src="@/assets/img/app1.jpg" alt="">
            </div>
            <p>应用版本为1.0.0</p>
            <li ><span>去评分</span></li>
            <li ><span>版本更新</span></li>
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
    .check{


    }
    .check-title {
        margin-top: 0.4rem;
        height: 40px;
        line-height: 40px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
    }
    .check-title-back {
        margin-left: 0.2rem;
    }
    .check-title-header {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    .check-img{
        position: relative;

        width: 100%;
        height: 100%;

    }
    .check-img img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        width: 2rem;
        height: 2rem;
    }
    .check-img p{
        text-align: center;
        padding-top: 2rem;
    }
    .check-img li{
        list-style: none;
        padding-left: 20px;
        height: 50px;
        line-height: 50px;
        background: #ffffff;
        border-top: 1px solid #cccccc;
    }

</style>