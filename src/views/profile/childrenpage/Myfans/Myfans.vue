<template>
    <div class="fans-profile">

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
          <div class="demo-text-layer11"><Age class="imglayer1" /></div> 
          <div class="demo-text-layer12"><Age1 /></div>

        </div>
        <div class="demo-text" v-if="active1 === 1">
            <div class="demo-text-layer21"><Sex /></div>
        </div>
        <div class="demo-text" v-if="active1 === 2">
            <Top />
            <div class="demo-text-layer32"><Sum /></div>
        </div>
        </mu-container>
    </div>
</template>

<script>
import Age from '@/views/profile/childrenpage/Myfans/Age.vue';
import Age1 from '@/views/profile/childrenpage/Myfans/Age1.vue';
import Sex from '@/views/profile/childrenpage/Myfans/Sex.vue';
import Top from '@/views/profile/childrenpage/Myfans/Top.vue';
import Sum from '@/views/profile/childrenpage/Myfans/Sum.vue';
export default {
    components:{
      Age,
      Age1,
      Sex,
      Top,
      Sum
    },
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
.imglayer1{
  // width: 100%;
  // height: 50px;
}
.fans-profile{
  .demo-text{
    &-layer12{
      margin-top: 1rem;
    }
  }
}
</style>