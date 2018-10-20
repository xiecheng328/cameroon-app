<template>
  <div class="commodity">
    <div class="commodity-operation" v-show="isselect">
      <p><span>当前选中数量：{{count}}</span></p>
      <button class="commodity-operation-detele" @click="DeteleAll">删除</button>
    </div>
    <ul>
      <li v-for="(item,index) in commodity1" :key="index">
        <div class="commodity-content">
          <div class="commodity-content-shop">
            <div class="commodity-content-shop-select">
              <mu-flex class="select-control-row" @click="select(index)">
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
      isselect: false,
      commodity1: [],
      count:0,
      checkbox: {
        value1: [],
        value2: false,
        value3: false
      }
    };
  },
  created() {
    this.commodity1 = this.$props.commodity;
    this.DeteleAll();
  },
  methods: {
    detele(index) {
      this.commodity1.splice(index, 1);
    },
    isshow() {
      this.count=0;
      this.commodity1.forEach(elem => {
        if (elem.select) {
          this.count++;
        }
      });
      if (this.count == 0) {
        this.isselect = false;
      } else {
        this.isselect = true;
      }
    },
    select(index) {
      this.commodity1[index].select = !this.commodity1[index].select;
      this.isshow();
    },
    DeteleAll() {
      function selectitem(elem) {
        return elem.select == false;
      }
      let array = [];
      array = this.commodity1.filter(selectitem);
      this.commodity1 = array;
      this.isshow();
    }
  }
};
</script>

<style scoped lang="scss">
.commodity {
  overflow: hidden;
  background-color: #fafafa;
  &-operation {
    height: 0.7rem;
    background: #ffff;
    position: relative;
    p{
      line-height: .7rem;
      font-size: .3rem;
      padding-left: .3rem;
    }
    button {
      border-radius: 0.2rem;
      border: 1px solid #f01544;
      background-color: #fff;
      color: #f01544;
      width: 1.2rem;
      position: absolute;
      right: 0.2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
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
        margin-left: 0.5rem;
        span {
          margin-left: 0.35rem;
          color: rgb(164, 164, 164);
          font-size: 0.22rem;
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
        left: 0.1rem;
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
          background-color: rgb(255, 59, 59);
          font-size: 0.2rem;
          color: #fff;
          outline: none;
          width: 1.4rem;
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