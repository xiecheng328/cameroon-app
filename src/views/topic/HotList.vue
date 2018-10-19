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
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../img2/superGirl1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../img2/superGirl2.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../img2/superGirl3.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../img2/superGirl4.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../img2/superGirl5.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../img2/superGirl1.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../img2/superGirl5.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../img2/superGirl3.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../img2/superGirl4.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../img2/superGirl5.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../img2/superGirl1.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../img2/superGirl2.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../img2/superGirl1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../img2/superGirl2.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../img2/superGirl3.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../img2/superGirl4.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../img2/publicityPictures1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../img2/superGirl5.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../img2/superGirl2.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../img2/superGirl4.jpg"
                },{
                    title:"赵丽颖冯绍峰",
                    hot:2536,
                    src:"./../../img2/superGirl1.jpg",

                },{
                    title:"范冰冰李晨",
                    hot:7852,
                    src:"./../../img2/superGirl5.jpg"

                },{
                    title:"杨颖黄晓明",
                    hot:2536,
                    src:"./../../img2/superGirl2.jpg"
                },{
                    title:"成龙，李连杰",
                    hot:52525,
                    src:"./../../img2/superGirl4.jpg"
                }]
            }
        }
    }
</script>

<style scoped>
</style>
