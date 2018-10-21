<template>
    <div class="searchDetail">
        <div class="head">
          <img src="./img/leftjiantou.png" alt="" class="lt" @click="goHome()">
          <div class="search">
            <input type="text" placeholder="大家都在搜“商品名”" class="ipt" v-model="btnName"  >
            <button class="btn" @click="add">搜索</button>
          </div>
          <div class="recommend">
            <span>推荐搜索</span>
            <ul class="recommend-btn">
              <li class="recommend-btn-detail">
                小麦机
              </li>
              <li class="recommend-btn-detail">
                拖拉机
              </li>
               <li class="recommend-btn-detail">
                植保无人机
              </li>
            </ul>
          </div>
          <div class="recent">
            <span>最近搜索过</span>
            <ul class="recent-btn" v-for="(btn,index) in btnAll" :key="index">
              <li class="recent-btn-detail" v-show="isNull">{{btn.btnName}}</li>
              
            </ul>
          </div>
            
          
        </div>
        <hr class="move" style="height:1px;border:none;border-top:1px solid #e5e5e5;" />
    </div>
</template>

<script>
    export default {
        data(){
          return{
          btnAll:[{
            btnName:'小麦机',
          },
          {
            btnName:'拖拉机',
           
          },
          {
            btnName:'植保无人机',
            
          }],
          btnName:'',
          isNull:true
          }
         
        },
        methods:{
          add(){
            if(this.btnName==''){
              this.isNull=false;
            }else{
              this.isNull=true,
              this.btnAll.push({
              btnName: this.btnName
            });
            }
            if((this.btnName == '拖拉机')||(this.btnName == '小麦收割机') ){
              this.$router.push({
                path:'/shop/shoplist'
              })
            }
          },
          goHome(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  .searchDetail{
    position: relative;
  }
  
  .head .lt{
    width: 20px;
    height: 15px;
    color:#eeeeee;
    position: absolute;
    top: 12px;
  }
  .head .search{
    
    position: absolute;
    top:5px;
    left: 25px;
    background-color:#eeeeee;
    border-radius: 50px;
    font-size: 13px;
  }
  .head .ipt{
    
    
    border-style: none;
    border:#fafafa;
    outline: none;
    height: 30px;
    width: 290px;
    text-align: center;
    background:url("./img/search-sm.png") no-repeat 50px;

    background-size: 20px 20px;
  }
  .btn{
    outline: none;
    float: right;
    border-style: none;
    background-color: #fafafa;
    width: 40px;
    position: absolute;
    left: 295px;
    top: 3px;
    /* height: 30px; */
  }
  
  .recommend{
    position: relative;
    top:60px;
  }
  .recommend li{
    float: left;
  }
  .recommend-btn{
    position: absolute;
    top: 30px;
  }
  .recommend-btn-detail{
    /* position: absolute; */
    /* border-style: none; */
    border: 1px solid #333333;
    border-radius: 20px;
    background-color: #fafafa;
    font-size: 12px;
    width: 80px;
    margin-left: 3px;
    /* outline: none; */
    list-style: none;
    text-align: center;
  }
  .recent{
    position: relative;
    top: 110px;
  }
  .recent-btn{
    
  }
  .recent-btn-detail{
    float: left;
    /* border-style: none; */
    border: 1px solid #333333;
     border-radius:20px;
    background-color: #fafafa;
    font-size: 12px;
    width: 80px;
    margin-left: 3px;
    height: 25px;
    list-style: none;
    text-align: center;
  }
</style>