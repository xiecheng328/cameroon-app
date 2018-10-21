<template>
  <div class="chatroom">
      <div class="header">
          <router-link to="/message"><img src="@/assets/img/left.png" class="iconfont icon-logout"></router-link>
          <p class="roomName">未关注人名字</p>
      </div>
      <div class="body">
          <div class="other">
              <div class="user">未关注人名字</div>
              <div class="bubble">
                  <div class="chatBubble">你好</div>
                  <div class="triangle"></div>
              </div>
          </div>
      </div>
      <div class="footer">
          <input type="text"  v-model="msg" class="footerInput" @input="seeButton()">
          <button class="footerSend" v-show="showButton">发送</button>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      socket: null,
      msg: "",
      msgs: [],
      showButton: false,
    };
  },
  methods: {
      seeButton(){
          if(this.msg==''){
              this.showButton=false;
          }else {
              this.showButton=true;
          }
      }
    }
}
</script>

<style scoped>
.chatroom{
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header {
  background:#f5f5f5;
   flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;

}
.roomName{
  margin:0 auto;
}

.body {
  flex-grow: 5;
  width: 100%;
  overflow: auto;
  text-align: center;
}

.iconfont {
  width: 40px;
  height: 40px;
}
.footer{
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 56px;
  display: -webkit-flex;
}
.footerInput{
  box-sizing: border-box;
  border: 1px solid #eee;
  background-color: #eee;
  font-size: 18px;
  flex-grow: 4;
}
.footerSend{
  background: #ff3d00;
    flex-grow: 1;
}
.bubble {
    display: inline-block;
    position: relative;
}

.chatBubble {
    height: 30px;
    line-height: 30px;
    background-color: rgb(198, 205, 243);
    font-size: 16px;
    color: rgb(58, 58, 58);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
.triangle {
    position: absolute;
    left: -10px;
    top: 10px;
    border-right: 10px solid rgb(198, 205, 243);
    border-bottom: 10px solid transparent;
}
.other {
    position: absolute;
    left: 14px;
}
</style>
