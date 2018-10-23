<template>
    <div>
        <mu-container>
            <div class="shopping-title">
                <mu-button class="fan-title-back" flat @click="changeFatherB">返回</mu-button>
                <h3 class="shopping-title-text">订单详情</h3>
            </div>
            <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
                <mu-tab >全部</mu-tab>
                <mu-tab >待付款</mu-tab>
                <mu-tab >代发货</mu-tab>
                <mu-tab >待收货</mu-tab>
                <mu-tab >待评价</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active1 === 0">
                <div>
                    <ul>
                        <li  >
                            <div class="product-img"><img src="./../../../../assets/img/tractors2.jpg" alt=""></div>
                            <div class="product-info">
                                <div class="product-info-title"><span>商品名称：</span></div>
                                <div class="product-info-title"><span>订单编号：</span></div>
                                <div class="product-info-title"><span>配送方：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>查看物流</mu-button>
                            <mu-button color="write" text-color="black" small>延长收货</mu-button>
                            <mu-button color="write" text-color="black" small>确认收货</mu-button>
                        </div>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
            <div class="demo-text" v-if="active1 === 1">
                <div>
                    <ul>
                        <li  >
                            <div class="product-img"><img src="./../../../../assets/img/tractors2.jpg" alt=""></div>
                            <div class="product-info">
                                <div class="product-info-title"><span>商品名称：</span></div>
                                <div class="product-info-title"><span>订单编号：</span></div>
                                <div class="product-info-title"><span>配送方：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>取消订单</mu-button>
                            <mu-button color="write" text-color="black" small>朋友代付</mu-button>
                            <mu-button color="write" text-color="black" small>付款</mu-button>
                        </div>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
            <div class="demo-text" v-if="active1 === 2">
                <div>
                    <ul>
                        <li  >
                            <div class="product-img"><img src="./../../../../assets/img/tractors2.jpg" alt=""></div>
                            <div class="product-info">
                                <div class="product-info-title"><span>商品名称：</span></div>
                                <div class="product-info-title"><span>订单编号：</span></div>
                                <div class="product-info-title"><span>配送方：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>提醒发货</mu-button>
                            <mu-button color="write" text-color="black" small>延长收货</mu-button>
                            <mu-button color="write" text-color="black" small>确认收货</mu-button>
                        </div>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
            <div class="demo-text" v-if="active1 === 3">
                <div>
                    <ul>
                        <li  >
                            <div class="product-img"><img src="./../../../../assets/img/tractors2.jpg" alt=""></div>
                            <div class="product-info">
                                <div class="product-info-title"><span>商品名称：</span></div>
                                <div class="product-info-title"><span>订单编号：</span></div>
                                <div class="product-info-title"><span>配送方：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>查看物流</mu-button>
                            <mu-button color="write" text-color="black" small>延长收货</mu-button>
                            <mu-button color="write" text-color="black" small>确认收货</mu-button>
                        </div>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
            <div class="demo-text" v-if="active1 === 4">
                <div>
                    <ul>
                        <li  >
                            <div class="product-img"><img src="./../../../../assets/img/tractors2.jpg" alt=""></div>
                            <div class="product-info">
                                <div class="product-info-title"><span>商品名称：</span></div>
                                <div class="product-info-title"><span>订单编号：</span></div>
                                <div class="product-info-title"><span>配送方：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>查看物流</mu-button>
                            <mu-button color="write" text-color="black" small>卖了换钱</mu-button>
                            <mu-button color="write" text-color="black" small>评价</mu-button>
                        </div>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </mu-container>
    </div>
</template>

<script>
    export default {
        name: "profile",
        data () {
            return {
                active1: 0
            };
        },
        methods:{
            changeFatherB(){
                this.$emit('resetFatherp');
            }
        }
    }
</script>

<style lang="scss">
    .shopping-title{
        margin-top: 0.4rem;
        height: 40px;
        line-height: 40px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        &-back{
            margin-left: 0.2rem;
        }
        &-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }
    }
    .demo-text {
        padding: 16px;
        background: #fff;
        height: 180px;
        p {
            margin: 0;
        }
    }
    .product-info{
        height: 110px;
        .product-info-title{
            height: 45px;
        }
    }
    .product-img {
        height: 135px;
        float: left;
    }
    .product-trans {
        float: right;
    }
</style>