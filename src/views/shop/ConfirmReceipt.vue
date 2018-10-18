<template>
    <div class="confirm">
        <!-- <h1>商城首页</h1> -->
        <div class="confirm-header">
            <div class="confirm-header-title">
            <a href="" class="confirm-header-title-return">返回</a>
            <a class="confirm-header-title-mine">我的订单</a>
            <a href=""><img src="./img/省略号.png" alt=""></a>
            </div>
            <div class="confirm-header-content">
            <a href="" class="confirm-header-content-a1">全部</a>
            <a href="" class="confirm-header-content-a2">待付款</a>
            <a href="" class="confirm-header-content-a3">代发货</a>
            <a href="" class="confirm-header-content-a4">待收货</a>
            <a href="" class="confirm-header-content-a5">待评价</a>
           </div>
            <a class="confirm-header-a6">商城主页></a>
            <span class="confirm-header-span2">等待收货</span>
        </div>
        <div class="confirm-body">
            <div class="confirm-body-img"><img src="./img/2.jpg" alt=""></div>
            <div class="confirm-body-text">盾牌ZGS38F20.04高端农机链 
                收获机链条 水稻收链条 水稻收配件</div>
        </div>
        <div class="confirm-pay"> 共一件商品 实付款：￥999.99</div>
        <div class="confirm-but">
            <mu-button round color="white" textColor="black" class="confirm-but-but1">再次购买</mu-button>
            <mu-button round color="white" textColor="black" class="confirm-but-but1">我要催单</mu-button>
            <mu-button round color="white" textColor="black" class="confirm-but-but1">查看物流</mu-button>
            <mu-button round color="white" textColor="black" class="confirm-but-but1">确认收货</mu-button>
           
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="scss" scoped>

.confirm{
    width: 375px;
    height: 667px;
    *{
        margin: 0;
        padding: 0;
    }
  overflow: hidden;
    &-header{
        width: 100%;
        height: 120px;
        border-bottom: 0.2px gray solid;
        // line-height: 30px;
        overflow: hidden;
      &-title{
          height: 60px;
          overflow: hidden;
        &-return{
            line-height: 60px;
            font-size: 20px;
        }
        &-mine{  
            font-weight: 400;
            color: black;
            font-size: 25px;
            line-height: 60px;
            margin-left: 90px ;
        }
        img{
            width: 30px;
            float: right;
            margin-top: 15px;
        }
      }
      &-content{
          a{
              margin-left: 26px;
              color: black;
              font-size: 16px;
          }   
      }
        &-a6{
            float: left;
            font-size: 15px;
            color: black;
        }
        &-span2{
            color: red;
            float: right;
            margin-right: 5px;
            font-size: 15px;
        }
    }
     &-body{
            width: 100%;
            height: 168 px;
            margin-bottom: 10px;
            overflow: hidden;
            background-color: #f2f2f2;
            &-img{  
                float: left;
                img{
                width: 115px;
                margin: 12px;
                }     
            }  
            &-text{
            margin-top: 30px; 
            font-size: 15px;         
  }   
        }
    &-pay{
        overflow: hidden;
        float: right;
        font-size: 14px;

    }
    &-but{
    clear: both; 
    &-but1{
        margin: 2.5px;
    }
     }

}
</style>
