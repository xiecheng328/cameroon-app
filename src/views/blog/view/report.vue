<template>
    <div id="report">
        <div class="reportt">
            <img src="../../../assets/img/mood (2).jpg" alt="" class="head-por">
            <div class="detail-content">
                <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
                <span>
                        {{pageMessage.agriculturalPromotion}}
                </span>
                <div class="name-time">{{pageMessage.nHoursAgo}}</div>
            </div>
        </div>
        <div class="reportt">
            <img src="../../../assets/img/mood (2).jpg" alt="" class="head-por">
            <div class="detail-content">
                <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
                <span>
                        {{pageMessage.agriculturalPromotion}}
                </span>
                <div class="name-time">{{pageMessage.nHoursAgo}}</div>
            </div>
        </div>
        <div class="reportt">
            <img src="../../../assets/img/mood (2).jpg" alt="" class="head-por">
            <div class="detail-content">
                <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
                <span>
                        {{pageMessage.agriculturalPromotion}}
                </span>
                <div class="name-time">{{pageMessage.nHoursAgo}}</div>
            </div>
        </div>
        <div class="reportt">
            <img src="../../../assets/img/mood (2).jpg" alt="" class="head-por">
            <div class="detail-content">
                <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
                <span>
                        {{pageMessage.agriculturalPromotion}}
                </span>
                <div class="name-time">{{pageMessage.nHoursAgo}}</div>
            </div>
        </div>
        <div class="reportt">
            <img src="../../../assets/img/mood (2).jpg" alt="" class="head-por">
            <div class="detail-content">
                <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
                <span>
                        {{pageMessage.agriculturalPromotion}}
                </span>
                <div class="name-time">{{pageMessage.nHoursAgo}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "report",
        data(){
            return {
                pageMessage:{
                    hybridRiceResearcher:this.$t('blog.hybridRiceResearcher'),
                    agriculturalPromotion:this.$t('blog.agriculturalPromotion'),
                    nHoursAgo:this.$t('blog.nHoursAgo'),
                }
            }
        },
    }
</script>

<style scoped>
    #report{
        width: 100%;
        padding-left: .4rem;
        padding-right: .4rem;
        margin-top: .2rem;
        background: white;
    }
    img{
        float: left;
        width: 1rem;
        height: 1rem;

    }
    span{
        font-size: xx-small;
    }
    .name-id{
        font-size: 5px;
        color: blue;
    }
    .name-time{
        font-size: 5px;
        margin-top:.2rem ;
    }
    #report .reportt{
        border-bottom: 1px solid gainsboro;
        margin-bottom: .1rem;
    }

</style>