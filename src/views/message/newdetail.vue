<template>
    <div>
        <div id="detailhead">
            <h2 id="detailreturn" @click="detailback()"><--</h2>    <h2>订阅号-农业专家</h2>
        </div>
        <div id="detailtext">
            <h5 style="margin: 0 auto ;width: 2rem">农机的使用</h5>
            <div> 随着农业机械化的普及，越来越多的农业机械出现在农户家中，新农机的使用问题便显得十分重要。<br/>

                　　一是阅读说明书。在新购买到新机具后，发动机使用前，首先要认真细读该机使用说明书，特别注意要使用规定牌号的柴油，用前要充分沉淀与过滤，加油器要保持清洁。润滑油要保持清洁，加进油料要足够，并定期更换，使用牌号要与规定相符。空气滤清要经常注意保养，要注意添加冷却水，特别是不要使发动机处在缺水的状态下工作。要经常注意检查，紧固有关的螺栓、螺母，特别是连杆螺栓，传动轴上的螺栓和飞轮上锁紧螺母，车轮的固紧螺母。<br/>

                　　二是试运转磨合。购新机后，不要马上带负荷作业，应按照说明书的要求对其进行试运转磨合。待磨合结束后，清洗该机机油滤网及清除机油中的残留杂质，有必要的还要对其机油进行更换，并清洗油底壳。<br/>

                　　三是不超负荷工作。新机进行作业时，要严格按照厂家的说明书的要求去做，不超载、不超速、不超喂入、不长期超负荷工作。<br/>

                　　四是不能随意对新机具进行改装和任意调高发动机的转速。有些用户为了使机子跑得快，就随意调高压油泵的供油量和供油压力，有些还把调速弹簧用铁丝扎起来，那就更是错误。<br/>

                　　合理使用新农机，减少机械故障，延长机械寿命，提高农业生产。<br/>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
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