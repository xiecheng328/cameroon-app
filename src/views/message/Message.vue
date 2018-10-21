<template>
  <div class="message">
    <!--<<<<<<< Updated upstream-->
    <!--<h1>This is a message page</h1>-->
    <!--<router-link to="/message/withme">@与我相关</router-link>-->
    <!--<router-view></router-view>-->
    <!--=======-->
    <router-view v-show="!isClick"></router-view>

    <!--  此处的子页面 v-show变量要通过各子页面的“返回按钮”的点击改变父组件的isClick的值，取反，（父子，子父组件传参）自己研究-->

    <div v-show="isClick">

      <h3 class="message-header">消息</h3>
      <div class="message-search"><input type="text" id="search" value="大家都在搜“商品名”" ></div>
      <div class="message-meau">
        <div class="message-meaulist">
          <!--<li v-for=" val in messagemeau" @click="Change(val)"><img src="../../assets/img/message-02.png" alt="" ><span>{{val.name}}</span> <span><img src="../../assets/img/message-01.png" alt="" ></span></li>-->
          <li v-for=" val in messagemeau" @click="Change()"><router-link :to="val.path"><img src="../../assets/img/message-02.png" alt="" ><span>{{val.name}}</span> <span><img src="../../assets/img/message-01.png" alt="" ></span></router-link></li>
        </div>
      </div>
    </div>
    <!--&gt;>>>>>> Stashed changes-->
  </div>
</template>
<script>
    import Vue from 'vue';
    import MuseUI from 'muse-ui';
    import 'muse-ui/dist/muse-ui.css';

    export default {
        data(){
            return{
                isClick:true,
                messagemeau: [{
                    img:"../../assets/img/message-icon.png",
                    name:"与我相关",
                    path:"/withme",
                    id:1,

                },{
                    img:"/img/message-icon.png",
                    name:"评论",
                    path:"/report",
                    id:2
                },{
                    img:"/img/message-icon.png",
                    name:"赞",
                    path:"/goodluck",
                    id:3
                },{
                    img:"/img/message-icon.png",
                    name:"订阅号消息",
                    path:"/openSubScription_content",
                    id:4
                },{
                    img:"/img/message-icon.png",
                    name:"未关注人消息",
                    path:"/chatroom",
                    id:5
                },{
                    img:"/img/message-icon.png",
                    name:"联系人1",
                    path:"/people1",
                    id:6
                },{
                    img:"/img/message-icon.png",
                    name:"联系人2",
                    path:"/people2",
                    id:7
                }],
            }
        },
        created() {
        },



        methods:{
            Change(){
                this.isClick=false;

            },
        }
    }

</script>
<style lang="scss" scoped>
  .message {

    &-header {
      height: 62px;
      line-height: 62px;
      text-align: center;
      border-bottom: 1px solid #cccccc;
    }
    &-search {

      border-bottom: 1px solid #cccccc;
      #search {
        width: 100%;
        height: 40px;
        text-align: center;
        background: #eeeeee;
        border-radius: 21px;
        border: 1px solid #eeeeee;
      }
    }
  }
  .message-meaulist{

    li {
      color:black;
      list-style: none;
      padding-left: 20px;
      height: 62px;
      line-height: 62px;
      border-bottom: 1px solid #cccccc;
      img{
        width: 31px;
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 14px;
        padding-bottom: 14px;
      }
      span{
        color: black;
        img{
          float:right;
        }
      }
    }
  }
</style>