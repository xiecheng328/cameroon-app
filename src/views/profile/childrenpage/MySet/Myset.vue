<template>
    <div>
        <router-view v-show="isShow"   v-on:resetFatherp="resetF"></router-view>
        <div class="set"  v-show="!isShow">

            <mu-container>
                <div class="set-title" >
                    <mu-button class="set-title-back" flat @click="changeFatherC()">返回</mu-button>
                    <h3 class="set-title-header">设置</h3>
                </div>
                <div class="set-user">
                    <div class="set-user-slideimg"><img src="@/assets/img/user.png" alt="" class="set-user-slideimg-uersimg"></div>
                    <div class="set-user-slidetext"><h5>昵称</h5> <p>常住地:雅温得</p></div>
                </div>
                <div class="setList">
                    <li ><img src="/../img/profileicon1.png" alt=""  ><span>夜间模式</span><button @click="changeModle">{{isTrue}}</button></li>
                    <li v-for="item in setList" :key="item.id"  @click="routerGo(item)" >
                        <img :src="item.iconimg" alt="">
                        <span>
                    {{item.name}}
                </span>

                    </li>
             >
                </div>




            </mu-container >


        </div>
    </div>

</template>
<script>
    import Vue from 'vue';
    import MuseUI from 'muse-ui';
    import 'muse-ui/dist/muse-ui.css';

    export default {

      name: "profile",
      data(){
          return{
              isTrue:false,
              isShow:false,
              setList:[
                  {
                      name:'清除缓存',
                      id:1,
                      iconimg:"./../img/profileicon1.png",
                      isShow:false,
                      src:"Clear",
                  },
                  {
                      name:'检查更新',
                      id:2,
                      iconimg:"./../img/profileicon1.png",
                      isShow:false,
                      src:"Check",
                  },
                  {
                      name:'消息设置',
                      id:3,
                      iconimg:"././img/profileicon1.png",
                      isShow:false,
                      src:"Message",
                  },
                  {
                      name:'关于',
                      id:4,
                      iconimg:"./../img/profileicon1.png",
                      isShow:false,
                      src:"About",
                  },
                  {
                      name:'退出当前登录',
                      id:5,
                      iconimg:"./../img/profileicon1.png",
                      isShow:false,
                      src:"Login",
                  },
              ]

          }
      },
      methods:{
          changeFatherC() {
              this.$emit('resetFatherp');
          },
          resetF(){
              console.log("chufal!");
              this.$router.push('/myset');
              this.isShow=!this.isShow;
          },
          changeModle(){
              this.isTrue=!this.isTrue;
          },
          routerGo(a){
              this.isShow=!this.isShow;
              this.$router.push({ name:`${a.src}`, params: { userId: 123 }})
              console.log(a)
          },


      }
  }

</script>
<style lang="scss" scoped>
  .set{
    &-title{
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
      &-header{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    }
    &-header{
      margin-top: 0.4rem;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #cccccc;
      background: #ffffff;
    }
    &-user{
      background: #ffffff;
      padding-top: 10px;
      display: flex;
      margin-bottom: 10px;
      &-slideimg{
        padding: 10px 20px 10px 20px ;
        flex-grow: 1;
        text-align: center;
        width: 0;
        &-uersimg{
          width: 100%;

        }
      }
      &-slidetext{
        width: 0;
        flex-grow: 4;
        h5{
          padding-top: 10px;
          font-weight: bolder;
        }
      }
    }
  }
  .setList{

      li{

          list-style: none;
          padding-left: 20px;
          height: 50px;
          line-height: 50px;
          background: #ffffff;
          border-top: 1px solid #cccccc;


          img{
              width: 24px;
              margin-left: 10px;
              margin-right: 10px;
              padding-top: 14px;
              padding-bottom: 14px;
          }
          button{
              width: 50px;
              height: 29px;
              margin-left: 50%;
              text-align: center;
              line-height: 29px;
          }
      }
  }
    .logo{
        margin-top: 70px;
        background-color: #0086b3;
        border-radius: 5px;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }

</style>
