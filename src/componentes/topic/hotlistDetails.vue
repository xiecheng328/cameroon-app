<template>
    <div  id="topic">
    <div id="listone">
        <h3>赵丽颖冯绍峰领证</h3>
    </div>
        <div id="jpg">

        </div>
        <div id="listtwo">
            <h6>1130万热度</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hotlistDetails"
    }
</script>

<style scoped>
        *{
            margin:0;
            padding: 0;
        }
        #topic{
            height:85px;
            border-bottom:solid 1.5px gainsboro;
            /*position: absolute;*/

            flew:2;
        }
        #listone{
            margin-top: 10px;
            /*position: relative;*/
        }
        #listtwo{
            margin-top: 45px;
            color:gainsboro;
        }
        #jpg{
            background-image: url("../../assets/1230.jpg");
            background-repeat: no-repeat;
            background-size:cover ;
            width: 70px;
            height: 70px;
            top: 10px;
            left: 300px;
            flex:1;
        }
</style>