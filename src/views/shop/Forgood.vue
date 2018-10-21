<template>
    <div id="good">
        
        <div  class="heads" >
        <router-link class="heads-font" to=""><img src="./img/return.png" alt="" @click="goLeft()">确认订单</router-link>
        </div>
        <div class="adress">
            <div class="adress-pic"></div>
            <div class="adress-right">
                <div class="adress-right-top"><span class="adress-right-top-name">收货人：</span><span class="adress-right-top-phone">15555555555</span></div>
                <div class="adress-right-adr">收货地址：</div>
                <div class="adress-right-bottom">(收货不变时，可选择免费代收货服务)</div>
            </div>
        </div>
        <div class="buy">
            <div class="buy-left"></div>
            <div class="buy-right">
                <div class="buy-right-tital">
                    徽拖ht-2204轮式拖拉机
                </div>
                <div class="buy-right-pin"><span>品牌：红星</span><span>驱动方式：四轮驱动</span></div>
                <div class="buy-right-ma">马力：220hp</div>
                <div class="buy-right-bot">
                    <span class="buy-right-bot-money">￥255.00</span>
                    <span class="buy-right-bot-num">x{{count}}</span>
                </div>
            </div>
        </div>
        <div>
            <ul class="table" >
            <li class="item" v-for="item in list" :key="item.index">
                {{item.listName}}
            </li>
            </ul>
            <div class="fun">
                <div class="item fun-font"><button class="fun-add" @click="def" type="submit">-</button>{{count}}<button class="fun-add" @click="add" type="submit">+</button></div>
                <div class="item fun-font"><div @click="tan">快递免邮></div></div>
                <div class="item fun-font"><span>确认收货前可赔付10元</span>￥2.40<input type="checkbox"></div>
                <div class="item"></div>
                <div class="item"><input type="text" :style="{border:'none',background:'#f5f5f5'}" placeholder="选填"></div>
            </div>
        </div>
        
        <div class="foots">
            <div class="foots-money">合计：
                <div class="foots-money-num">￥{{count*255}}</div>
            </div>
            <div class="foots-but" @click="tijiao">提交订单</div>
        </div>
        <div id="mask" v-show="mask">
          <transition name="trans">
            <div class="top" v-if="show">
            <h3 class="top-tatle">配送方式</h3>
            <div class="top-font">快递免邮</div>
            <input class="top-check" type="checkbox">
            <div class="top-bottom" @click="topBottom">关闭</div>
            </div>
          </transition>
            
        </div>
        
    </div>
    
    
</template>
<script src="./vue.js"></script>
<script>
    import axios from "axios";
    export default {
        name: "Forgood",
        data(){
           return{
                count: 1,
                mask:false,
                show:false,
                list:[{
                listName:'购买数量',
            },
            {
                listName:'配送方式',
            },
            {
                listName:`运费险`,
            },
            {
                listName:'运费险投保须知',
            },
            {
                listName:'买家留言',
            }],
           }
          },
      methods:{
          tijiao(){
              
          },
          add(){
              this.count++;
          },
          def(){
              if(this.count>1){
                  this.count--;
              }},
          tan(){
              this.mask=true;
              this.show=true;
          }  ,
          topBottom()  {
              this.mask=false;
              this.show=false;
          } ,
          goLeft() {
              this.$router.go(-1);
          }
      }
    }
</script>

<style lang="scss" scoped>
    #good{
        
        height: 100%;
        width: 100%;
    }
     #mask {
            
            position: absolute;
            top: 0;
            bottom: 50px;
            left: 0;
            right: 0;
            background: rgba(187, 255, 0, 0.2);
        }
        .trans-enter-active{
          transition: all .5s ease;
        }
        .trans-enter{
          transform: translateY(400px);
        }
    .top{
        position: absolute;
        transition: all .3s ease;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 400px;
        width: 100%;
        background: #fff;
        z-index: 1;
        
        &-tatle{
            padding: 10px;
        }
        &-font{
            padding: 10px;
        }
        &-check{
            position: absolute;
            right: 50px;
            top: 75px;
        }
        &-bottom{
            width: 100%;
            position: absolute;
            bottom: 0;
            text-align: center;
            height: 50px;
            line-height: 50px;
            color: #ff4200;
            border-top: 0.1em solid #ccc;
            border-bottom: 0.1em solid #ccc;
        }
    }
    .table{
        float: left;
        height: 260px;
        width: 20%;
    }
    .fun{
        float:right;
        width: 80%;
        &-add{
           height: 25px;
           line-height: 20px;
           margin-left: 10px;
           margin-right:10px;
        }
        &-font{
            text-align: right;
            // float: right;
        }
    }
    .item{
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        border-bottom: #ccc 0.01em solid;
    }
    .heads{
        width: 100%;
        height: 60px; 
        background: #f5f5f5;
        border-bottom:0.002em solid #ccc; 
        position: fixed;
        top: 0;
        left: 0;
        // opacity: 0.4;
        
        &-font{
            color: black;
            text-align: center;
            line-height: 60px;
            
            img{
              width: 0.5rem;
              height: 0.5rem;
              margin-top: 0.25rem;
              margin-right: 0.2rem;
            }
        }
    }
    
    
    .buy{
        height: 120px;
        background: #f5f5f5;
        &-left{
            width: 30%;
            height: 120px;
            float: left;
            background: url("./img/2.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }
        &-right{
            width: 70%;
            float: left;
            padding-left : 15px; 
            &-tital{
                font-size: 14px;
            }
            &-pin{
                color: #ccc;
                font-size: 10px
            }
            &-ma{
                color: #ccc;
                font-size: 10px;
            }
            &-bot{
                width: 100%;
                height: 50px;
                position: relative;
                &-money{
                   position: absolute ;
                   bottom: 0;
                   color: #ff4200;

                }
                &-num{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
    .adress{
        width: 100%;
        height: 100px;
        margin-top:60px;
        &-pic{
            width: 15%;
            height: 100px;
            float: left;
        }
        &-right{
            float: left;
            width: 85%;
            height: 100px;
            &-top{
                font-size: 16px;
                height: 30px;
                width: 100%;
                &-name{
                    float: left;
                }
                &-phone{
                  float: right;
                  padding-right: 25px;
                }
            }
            &-adr{
                height: 30px;
                width: 100%;
                font-size: 10px;
                line-height: 30px;
            }
            &-bottom{
                font-size: 10px;
                height: 30px;
                line-height: 30px;
                color: #ff4200;
            }
        }
    }
    .foots{
        position: fixed;
        bottom: 51px;
        left: 0;
        width: 100%;
        height: 60px;
        border-top:0.02em solid #ccc; 
        line-height: 60px;
        &-money{
            position: absolute;
            width: 70%;
            left: 0;
            text-align: center ;
            background: #f5f5f5;
            &-num{
                width: 80px;
                position: absolute;
                right: 0;
                bottom: 0;
                color: #ff4200;
                text-align: left;
            }
        }
        &-but{
            position: absolute;
            width: 30%;
            right: 0;
            background:  #ff4200;
            color: #fff;
            text-align: center;
        }
    }
</style>