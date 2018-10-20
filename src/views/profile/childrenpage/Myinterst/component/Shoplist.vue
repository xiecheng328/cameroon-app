<template>
  <div class="commodity">
    <ul>
      <li v-for="(item,index) in commodity" :key="index">
        <div class="commodity-content">
          <div class="commodity-content-shop">
            <div class="commodity-content-shop-select">
              <mu-flex class="select-control-row">
                <mu-checkbox v-model="item.value" uncheck-icon="panorama_fish_eye" checked-icon="adjust" color="#ff0036"></mu-checkbox>
              </mu-flex>
            </div>
            <div class="commodity-content-shop-name">
              <img src="./../../../../../assets/img/shop-icon@1,5x.png" alt="">
              <span>{{item.shop}}</span>
            </div>
          </div>
          <div class="commodity-content-list">
            <div class="commodity-content-list-left"> <img :src="item.img" alt=""></div>
            <div class="commodity-content-list-right">
              <p><span>名称：</span>{{item.name}}</p>
              <p><span>价格：¥</span>{{item.price}}</p>
            </div>
            <div class="commodity-content-list-cancel" @click="detele(index)"><button>取消关注</button></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["commodity"],
  data() {
    return {
      checkbox: {
        value1: [],
        value2: false,
        value3: false
      }
    };
  },
  methods: {
    detele(index) {
      this.$props.commodity.splice(index, 1);
    }
  }
};
</script>

<style scoped lang="scss">
.commodity {
  overflow: hidden;
  background-color: #fafafa;
  &-content {
    border-radius: 0.2rem;
    border: 1px solid #ddd;
    background-color: #fff;

    &-shop {
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
      height: 0.8rem;
      position: relative;
      &-name {
        position: relative;
        line-height: 0.8rem;
        margin-left: .5rem;
        span {
          margin-left: 0.35rem;
          color: rgb(164, 164, 164);
          font-size: .28rem
        }
        img {
          height: 0.2rem;
          position: absolute;
          margin-left: 0.1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &-select {
        position: absolute;
        top: 50%;
        left: .1rem;
        transform: translateY(-50%);
      }
    }
    &-list {
      display: flex;
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      position: relative;
      &-left {
        border-bottom-left-radius: 0.2rem;
        img {
          border-bottom-left-radius: 0.2rem;
        }
      }
      &-right {
        flex-grow: 1;
        border-bottom-right-radius: 0.2rem;
      }
      &-cancel {
        position: absolute;
        bottom: 0.1rem;
        right: 0.1rem;
        button {
          background-color: rgb(209, 5, 5);
          font-size: 0.1rem;
          color: #fff;
          outline: none;
          width: 1.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
        }
      }
    }
  }
  li {
    margin: 0.15rem 0.2rem;
  }
}
</style>