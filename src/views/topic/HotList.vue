<!--liyue-->
<template>
    <div id="hot-list">
        <router-link to="alists" v-for="(value,index) in hList" :key="index">
            <hotlistDetails  :val="value" :index="index"></hotlistDetails>
        </router-link>
    </div>
</template>

<script>
    import hotlistDetails from '../../components/topic/hotlistDetails';
    export default {
        name: "HotList",
        components:{
            hotlistDetails
        },
        data(){
            return{

                hList:[{
                    title:"农业机械化发展问题及对策",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"农业机械的安全生产管理对策分析",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"农业机械技术维护探析",
                    hot:2536,
                    src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1161377855,3569906205&fm=200&gp=0.jpg"
                },{
                    title:"农业机械技术推广问题分析",
                    hot:52525,
                    src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4272115919,895992956&fm=200&gp=0.jpg"
                },{
                    title:"农业机械技术维护探析",
                    hot:2536,
                    src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1780174027,3403182360&fm=26&gp=0.jpg",

                },{
                    title:"农业机械发展现状及对策",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502856943,172254988&fm=26&gp=0.jpg"

                },{
                    title:"农业机械维护保养浅析",
                    hot:2536,
                    src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4149705613,341423580&fm=200&gp=0.jpg"
                },{
                    title:"新形势下的农业机械推广途径",
                    hot:2536,
                    src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=67077163,1499975614&fm=200&gp=0.jpg",

                },]
            }
        }
    }
</script>

<style scoped>
</style>
