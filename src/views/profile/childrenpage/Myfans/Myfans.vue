<template>
    <div>
        <mu-container>
        <div class="fan-title">
          <mu-button class="fan-title-back" flat @click="changeFatherB">返回</mu-button>
          <h3 class="fan-title-text">我的粉丝</h3>
        </div>
        <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab >粉丝年龄集中</mu-tab>
            <mu-tab >粉丝性别分布</mu-tab>
            <mu-tab >粉丝数排名</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active1 === 0">
            <p>“粉丝年龄集中”</p>
            <router-view></router-view>
        </div>
        <div class="demo-text" v-if="active1 === 1">
            <p>“粉丝性别分布”</p>
            <router-view></router-view>
        </div>
        <div class="demo-text" v-if="active1 === 2">
            <p>“粉丝数排名”</p>
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
.fan-title{
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
  p {
    margin: 8px 0;
  }
}
</style>