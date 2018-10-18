<template>
    <div>
        <mu-container>
        <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab >粉丝年龄集中</mu-tab>
            <mu-tab >粉丝性别分布</mu-tab>
            <mu-tab >粉丝数排名</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active1 === 0">
            <p>“粉丝年龄集中”</p>
        </div>
        <div class="demo-text" v-if="active1 === 1">
            <p>“粉丝性别分布”</p>
        </div>
        <div class="demo-text" v-if="active1 === 2">
            <p>“粉丝数排名”</p>
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
  }
}
</script>
<style lang="scss">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
</style>