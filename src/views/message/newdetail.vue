<template>
    <div>
        <div id="detailhead">
            <h2 id="detailreturn" @click="detailback()"><--</h2>    <h2> {{pagemessage.newdetailSubscribe}}</h2>
        </div>
        <div id="detailtext">
            <h6 style="margin: 0 auto ;width: 2rem">{{pagemessage.newdetailtitle}}</h6>
            <div>
                {{pagemessage.newdetailtext}}
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                pagemessage:{
                    newdetailSubscribe:this.$t("message.newdetailSubscribe"),
                    newdetailtitle:this.$t("message.newdetailtitle"),
                    newdetailtext:this.$t("message.newdetailtext"),

                },
            }
        },
        methods:{
            detailback(){
                this.$router.push('openSubScription_content');
            }
        }
    }
</script>
<style scoped>
    #detailhead{
        display: flex;
        flex-direction: row;
        background: #0086b3;
    }
    #detailtext{
        margin: .1rem;
        width: 100%;
        height: 100%;
        border:.001rem solid #ccc;
    }
    h2{
        margin-top: .1rem;
        margin-left:1rem;
    }
    #detailreturn{

        margin-left: .2rem;

    }

</style>