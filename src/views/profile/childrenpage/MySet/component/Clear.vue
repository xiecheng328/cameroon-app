<template>

    <mu-container class="clear">
        <div class="clear-title" >
            <mu-button class="clear-title-back" flat @click="changeFatherC()">{{this.other.return}}</mu-button>
            <h3 class="clear-title-header">{{this.other.name}}</h3>
        </div>
        <div class="clear-app">
            <p>{{this.other.space}}:</p>
            <hr>
            <p class="clear-app-space">1.00 GB</p>
        </div>
        <div class="clear-app-button">
            <button>{{this.other.name}}</button>
        </div>



    </mu-container>
</template>
<script>
    export default {
        data(){
            return{
                other:{
                    return:this.$t('profile.return'),
                    name: this.$t('profile.setclear'),
                    space:this.$t('profile.clearspace'),


                }

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