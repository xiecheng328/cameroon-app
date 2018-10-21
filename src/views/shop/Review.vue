<template>
    <div id="container">
        <div id="nav-header" class="clearfix">
            <ul>
                <img src="./img/prev.png" alt="" @click="goLeft()">
                <li class="item1">发表评价</li>
                <li class="item2">发布</li>
            </ul>
        </div>
        <div id="review">
            <img class="product" src="./img/2.jpg" alt="">
            <p class="describe">描述相符</p>
            <p class="well">非常好</p>
            <div id="review-content">
                <textarea class="write-review" rows="10" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"></textarea>
                <!-- <input class="write-review" type="text" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"> -->
            </div>
            <div id="review-people" class="clearfix">
                <ul> 
                    <img src="./img/select.png" alt="">
                    <li class="item3">匿名</li>
                    <li class="item4">你的评价能帮助其他小伙伴哟</li>
                </ul>
            </div>
            <div id="review-score" class="clearfix">
                <div class="store-score">
                    <ul>
                        <img src="./img/store.png" alt="">
                        <li class="item5">店铺评分</li>
                    </ul>
                </div>
                <div class="wuliu-service">
                    <p class="item6">物流服务</p>
                </div>
                <div class="service-attitude">
                    <p class="item7">服务态度</p>
                </div>
            </div>
        </div>
    </div>  
</template>


<script>
    export default {
        created () {
            this.$emit("switchTab", "review");
        },
        methods:{
            goLeft(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
        #nav-header {
            width: 95%;
            height: 1rem;
            position: relative;
            // background: #f9f9f9;
            text-align: center;
        }
        #nav-header img{
            width: 0.5rem;
            height: 0.5rem;
            position:absolute;
            top:0.3rem;
            left:0.2rem;
        }
        #nav-header li{
            // text-align: center;
            height:1rem;
            line-height: 1rem;
            font-size: 0.3rem;
        }
        .item1{
            position: absolute;
            left: 1rem;
        }
        .item2{
            position: absolute;
            top: 0;
            right: 0;
            color: orangered
        }
        .clearfix::after{
            content: '';
            display: block;
            clear: both;
        }
        #review{
            position: relative;
            border-bottom: 0.01rem solid #ccc;
            height: 1rem;
            // background: #cccccc;
        }
        #review .product{
            width: 1rem;
            height: 1rem; 
            left: 0.2rem;
            position: absolute;
            top: -0.1rem;         
        }
        #review .describe{
            font-size: 0.3rem;
            text-align: center;
            line-height: 1rem; 
            position: absolute;
            left:1.5rem;           
        }
        #review .well{
            font-size: 0.3rem;
            line-height: 1rem;
            position: absolute;
            right:0.2rem;
            color: #ccc;
        }
        #review li img{
            width: 0.3rem;
            height: 0.3rem;
            // float: left;            
        }
        #review-people{
            height: 1rem;
            position: relative;
            text-align: center;
            top: 4rem;
            border-bottom: 0.2rem solid #f4f4f4;
        }
        #review-people img{
            width: 0.3rem;
            height: 0.3rem;
            position:absolute;
            top:0.4rem;
            left:0.2rem;
            color: #ccc
        }
        #review-people li{
            height:1rem;
            line-height: 1rem;
            // font-size: 0.3rem;
        }
        .item3{
            position: absolute;
            left: 1rem;
            top: 0.1rem;
            font-size: 0.3rem;
        }
        .item4{
            position: absolute;
            top: 0.1rem;
            right: 0.2rem;
            font-size: 0.25rem;
            color: #ccc;
        }
        #review-score{
            position: relative;
            top:5rem;
        }
        #review-score .store-score img{
            width: 0.4rem;
            height: 0.4rem;
            position:absolute;
            top:-0.6rem;
            left:0.2rem;
            color: #ccc
        }
        .item5{
            position: absolute;
            left: 1rem;
            top: -0.65rem;
            font-size: 0.3rem;
        }
        #review-content{
            position: relative;
        }
        .write-review{
            width:97%;
            position: absolute;
            left: 0.2rem;
            top: 1.2rem;
            font-size: 0.25rem;
            border: 0;
            outline: 0;
            border-bottom: 0.01rem solid #ccc;            
        }
        .wuliu-service{
            width: 100%;
            // height: 5rem;
            position: relative;
        }
        .item6{
            position: absolute;
            left: 0.2rem;
            font-size: 0.3rem;
            top: 0.1rem;
        }
        .wuliu-service li img{
            float: right;
            margin-right: 0.2rem;
        }
        .service-attitude{
            position: relative;
            top: 6rem;
        }
        .item7{
            position: absolute;
            font-size: 0.3rem;
            left: 0.2rem;
            top: -5.2rem;
        }
        
        

        
</style>

