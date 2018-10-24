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
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },{
                    title:"Les problèmes et les stratégies de développement agricole mécanisé",
                    hot:2536,
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3280056545,4119647659&fm=26&gp=0.jpg",
                },{
                    title:"Analyse des mesures de gestion de la sécurité de la production de machines agricoles",
                    hot:7852,
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=965696708,2357641169&fm=200&gp=0.jpg"
                },]
            }
        }
    }
</script>

<style scoped>
</style>
