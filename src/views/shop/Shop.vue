<template>
<div>
    <div class="shop">
      <!-- 商城title -->
      <router-view></router-view>
  </div>
</div>
</template>
<script>
export default {
  name:"Shop",
  methods:{
    goShoppingCart(){
      this.$router.push({
        path:'/shop/shophome'
      })
      
    },
  },
  mounted(){
    this.$router.push({
        path:'/shop/shophome'
    })
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
    background: url(./../../assets/img/search-icon1.png) center no-repeat;
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
  
</style>



