<template>
    <div class="contain">
        <mu-appbar style="width: 100%;" color="#FFFFFF" z-depth="0" textColor="#333333">
      <mu-button icon slot="left" @click="goLeft()">
      <mu-icon ></mu-icon>
      </mu-button >
      <div class="shop-title">我的收藏</div>
      
</mu-appbar>
        <div class="header">
            
        </div>
        <!--标题-->
        <div  id="box">
            <ul>
                <li v-for="(v,index) in list" :key="index">
                    <div class="img">
                        <img :src="v.img" alt="">
                    </div>
                    <h4>{{v.brandName}}</h4>
                    <p>{{v.price}}</p>
                    
                </li>
            </ul>
         </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import './mock/shopList.js';
    export default {
    data(){
        return{
            list:[]
        }
        },
        mounted() {
             axios.get('msg').then(res=>{
                this.list = res.data.machineryProuct;
             })
        },
        methods:{
            goLeft(){
                this.$router.go(-1);
            }
        }
}
</script>

<style lang="scss" scoped>
.shop{
    height: 100%;
  }
  .shop-title{
      text-align: center;
  }
  .mu-icon-button{
    background: url(./img/leftjiantou.png) center no-repeat;
  }
  #shop-icon{
    background: url(./../../assets/img/shop-icon.png) center no-repeat;
  }
  .shop-search{
    margin-top: 46px;
    width: 100%;
    background: #fff !important;
    height: 46px;
    input{
      border-style:none; 
      margin-top: 0.1rem;
      width: 6rem;
      height: 46px;
      border-radius: 2rem;
      background-color: #eee !important;
      background:url(./../../assets/img/search-icon.png) 1.3rem  no-repeat;
      background-size: 25px;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      outline: none;
    }
    text-align: center;
    width:100%;
    height:54px;
    margin-top: 56px;
    background: #ffffff;
  }
    .contain{
        position: relative;
        height: 6rem;
        width: 100%;
    }
    .classify-header-title{
        width: 100%;
        height: 1rem;
        text-align: center;
    }
    #box ul{
        display: flex;
        flex-wrap: wrap;
        margin-left: 0.2rem;
        margin-top: 0.5rem;
    }
    #box li{
        height: 2.5rem;
        flex-grow: 1;
        padding: 3px;
        list-style: none;
        margin-right: 15px;
        border: 1px solid #eee;
        text-align: center;
    }
    #box .img{
        width: 100%;
        height: 1.5rem;
        text-align: center;
    }
    #box .img img{
        height: 1.5rem;
    }
</style>
