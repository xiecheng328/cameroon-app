<template>
    <div>
        <mu-container>
            <div class="shopping-title">
                <mu-button class="fan-title-back" flat @click="changeFatherB">{{pageMessage.return}}</mu-button>
                <h3 class="shopping-title-text">{{pageMessage.orderDetails}}</h3>
            </div>
            <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
                <mu-tab >{{pageMessage.All}}</mu-tab>
                <mu-tab >{{pageMessage.PendingPayment}}</mu-tab>
                <mu-tab >{{pageMessage.toBeDelivered}}</mu-tab>
                <mu-tab >{{pageMessage.WaitingForReception}}</mu-tab>
                <mu-tab >{{pageMessage.WaitingToBeEvaluated}}</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active1 === 0">
                <div>
                    <ul>
                        <li  >
                            <div class="product-img"><img src="./../../../../assets/img/tractors2.jpg" alt=""></div>
                            <div class="product-info">
                                <div class="product-info-title"><span>{{pageMessage.productName}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.OrderNumber}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.DeliveryEvening}}：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>{{pageMessage.ViewLogistics}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.ExtendedReceipt}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.ConfirmReceipt}}</mu-button>
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
                                <div class="product-info-title"><span>{{pageMessage.productName}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.OrderNumber}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.DeliveryEvening}}：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>{{pageMessage.CancelTheOrder}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.MyFriendPaid}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.payment}}</mu-button>
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
                                <div class="product-info-title"><span>{{pageMessage.productName}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.OrderNumber}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.DeliveryEvening}}：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>{{pageMessage.RemindTheDelivery}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.ExtendedReceipt}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.ConfirmReceipt}}</mu-button>
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
                                <div class="product-info-title"><span>{{pageMessage.productName}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.OrderNumber}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.DeliveryEvening}}：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>{{pageMessage.ViewLogistics}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.ExtendedReceipt}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.ConfirmReceipt}}</mu-button>
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
                                <div class="product-info-title"><span>{{pageMessage.productName}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.OrderNumber}}：</span></div>
                                <div class="product-info-title"><span>{{pageMessage.DeliveryEvening}}：</span></div>
                            </div>
                        </li>
                        <div class="product-trans">
                            <mu-button color="write" text-color="black" small>{{pageMessage.ViewLogistics}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.SoldForCash}}</mu-button>
                            <mu-button color="write" text-color="black" small>{{pageMessage.evaluation}}</mu-button>
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
                active1: 0,
                pageMessage:{
                    return:this.$t('profile.return'),
                    orderDetails:this.$t('profile.orderDetails'),
                    All:this.$t('profile.All'),
                    PendingPayment:this.$t('profile.PendingPayment'),
                    toBeDelivered:this.$t('profile.toBeDelivered'),
                    WaitingForReception:this.$t('profile.WaitingForReception'),
                    WaitingToBeEvaluated:this.$t('profile.WaitingToBeEvaluated'),
                    productName:this.$t('profile.productName'),
                    OrderNumber:this.$t('profile.OrderNumber'),
                    DeliveryEvening:this.$t('profile.DeliveryEvening'),
                    ViewLogistics:this.$t('profile.ViewLogistics'),
                    ExtendedReceipt:this.$t('profile.ExtendedReceipt'),
                    ConfirmReceipt:this.$t('profile.ConfirmReceipt'),
                    CancelTheOrder:this.$t('profile.CancelTheOrder'),
                    MyFriendPaid:this.$t('profile.MyFriendPaid'),
                    RemindTheDelivery:this.$t('profile.RemindTheDelivery'),
                    SoldForCash:this.$t('profile.SoldForCash'),
                    evaluation:this.$t('profile.evaluation'),


                }
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