<template>
  <div class="message">
    <!--<<<<<<< Updated upstream-->
    <!--<h1>This is a message page</h1>-->
    <!--<router-link to="/message/withme">@与我相关</router-link>-->
    <!--<router-view></router-view>-->
    <!--=======-->
    <router-view v-show="!isClick" v-on:returnM='changecheck'></router-view>

    <!--  此处的子页面 v-show变量要通过各子页面的“返回按钮”的点击改变父组件的isClick的值，取反，（父子，子父组件传参）自己研究-->

    <div v-show="isClick">

      <h3 class="message-header">{{pagemessage.news}}</h3>
      <div class="message-search"><input type="text" id="search" :value="pagemessage.everysearch" ></div>
      <div class="message-meau">
        <div class="message-meaulist">
          <!--<li v-for=" val in messagemeau" @click="Change(val)"><img src="../../assets/img/message-02.png" alt="" ><span>{{val.name}}</span> <span><img src="../../assets/img/message-01.png" alt="" ></span></li>-->
          <li v-for=" val in pagemessage.messagemeau" @click="Change()"><router-link :to=val.path><div><img src="../../assets/img/message-02.png" alt="" ><span>{{val.name}}</span> <span><img src="../../assets/img/message-01.png" alt="" ></span></div></router-link></li>
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
                pagemessage:{
                    news:this.$t("message.news"),
                    everysearch:this.$t("message.everysearch"),
                    messagemeau:this.$t("message.messagemeau"),

                }
            }
        },
        created() {
        },



        methods:{
            Change(){
                this.isClick=!this.isClick;
            },
            changecheck(){
                this.isClick=!this.isClick;
                console.log(this.isClick);
            }
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