<template>
  <div class="interest">
    <div class="interest-head">
      <span>我的关注</span>
      <div class="interest-head-back">
        <mu-button flat small @click="goback">返回</mu-button>
      </div>
    </div>
    <mu-container>
      <mu-tabs :value.sync="active" full-width>
        <mu-tab style="font-size:.2rem;">大v列表</mu-tab>
        <mu-tab style="font-size:.2rem;">好友列表</mu-tab>
        <mu-tab style="font-size:.2rem;">商品列表</mu-tab>
        <mu-tab style="font-size:.2rem;">话题</mu-tab>
        <mu-tab style="font-size:.2rem;">推荐</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active === 0">
        <p>大v列表</p>
      </div>
      <div class="demo-text" v-if="active === 1">
        <p>好友列表</p>
      </div>
      <div class="demo-text" v-if="active === 2">
        <Shoplist :commodity="commodity" />
      </div>
      <div class="demo-text" v-if="active === 3">
        <Topiclist :topic="topic" />
      </div>
      <div class="demo-text" v-if="active === 4">
        <Recommend />
      </div>
    </mu-container>
  </div>
</template>

<script type="text/javascript" src="./../../../js/remi6.js"></script>
<script>
import axios from "axios";
import Shoplist from "./component/Shoplist.vue";
import Topiclist from "./component/Topiclist.vue";
import Recommend from "./component/Recommend.vue";

require("./../../profilemock/MyInterestMock.js");
export default {
  components: {
    Shoplist,
    Topiclist,
    Recommend
  },
  data() {
    return {
      active: 0,
      commodity: [],
      topic: [],
      recommend: []
    };
  },
  methods: {
    getdata() {
      axios.post("/MyInterestMock").then(res => {
        this.commodity = res.data.commodity;
        this.topic = res.data.topic;
        console.log(this.topic);
        this.userMenu = res.data.recommend;
      });
    },
    goback() {
      this.$emit("resetFatherp");
    }
  },
  created() {
    this.getdata();
    console.log(this.$router);
  }
};
</script>

<style scoped lang="scss">
.interest {
  height: 100%;
  margin-top: 0.4rem;
  &-head {
    height: 45px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;
    position: relative;
    span {
      font-size: 15px;
      line-height: 44px;
    }
    &-back {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      a {
        color: #000;
      }
    }
  }
}

.demo-text {
  padding: 0;
  height: 100%;
}
</style>

