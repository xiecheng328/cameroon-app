<template>
    <div>
    <div id="topic">
        <div id="serialNumber">1</div>
        <div id="title">
          赵丽颖冯绍峰领证
            <!--<div id="">1130万热度</div>-->
            <!--<div>sss</div>-->
            <div id="praise">23121万热度</div>
        </div>
        <div id="IMG"></div>

    </div>
    </div>
</template>

<script>
    export default {
        name: "hotlistDetails"
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        #topic{
            background: white;
            width: 100%;
            display: flex;
            clear: both;
            margin-bottom: 10px;
            margin-top: 10px;
            #serialNumber{
                width: 30px;
                font-size: 15px;
                color: red;
            }
            #title{
                flex: 3;
                float: left;
                text-align: center;
                line-height: 100%;
                position: relative;
                top: 2px;
                #praise{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
            #IMG{
                float: left;

                width: 100px;
                margin: auto;
                height: 60px;
                /*background: black;*/
                background: url("../../assets/img/1230.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                line-height: 100%;
                flex: 1;

            }
        }
    }
    /**{*/
    /*margin:0;*/
    /*padding: 0;*/
    /*}*/
    /*#topic{*/
    /*height:85px;*/
    /*border-bottom:solid 1.5px gainsboro;*/
    /*!*position: absolute;*!*/

    /*flex:2;*/
    /*}*/
    /*#listone{*/
    /*margin-top: 10px;*/
    /*!*position: relative;*!*/
    /*}*/
    /*#listtwo{*/
    /*margin-top: 45px;*/
    /*color:gainsboro;*/
    /*}*/
    #jpg {
        background-image: url("../../assets/img/1230.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        /*width: 70px;*/
    }

    /*}*/
</style>
