<!--liyue-->
<template>
    <div id="hot-list">
        <hotlistDetails v-for="(value,index) in hList" :key="index" :val="value" :index="index"></hotlistDetails>
    </div>
</template>

<script>
    import hotlistDetails from '../../../components/topic/hotlistDetails';
    export default {
        name: "HotList",
        components:{
            hotlistDetails
        },
        data(){
            return{
                hList:[{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../publicityPictures4.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../publicityPictures5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../publicityPictures0.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../publicityPictures4.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../publicityPictures5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../publicityPictures0.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../publicityPictures4.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../publicityPictures5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../publicityPictures0.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../publicityPictures4.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../publicityPictures5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../publicityPictures0.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../publicityPictures4.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../publicityPictures5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../publicityPictures0.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../publicityPictures4.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../publicityPictures5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../publicityPictures0.jpg"
                }]
            }
        }
    }
</script>

<style scoped>
</style>
