<template>
  <div class="commodity">
    <div class="commodity-operation" v-show="isselect">
      <p>{{this.$t('profile.currentsel')}}:{{count}}</p>
      <button class="commodity-operation-detele" @click="DeteleAll">{{this.$t('profile.delete')}}</button>
    </div>
    <ul>
      <li v-for="(item,index) in commodity" :key="index">
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
              <p><span>{{name}}</span>：{{item.name}}</p>
              <p><span>{{price}}：¥</span>{{item.price}}</p>
            </div>
            <div class="commodity-content-list-cancel" @click="detele(index)"><button>{{unfollow}}</button></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isselect: false,
      count: 0,
      name:this.$t('profile.name'),
      price:this.$t('profile.price'),
      unfollow:this.$t('profile.unfollow'),

      checkbox: {
        value1: [],
        value2: false,
        value3: false
      },
      commodity: [
        {
          name: this.$t('profile.Tractor'),
          img: require("./../../../../../assets/img/tractors1.jpg"),
          shop: this.$t('profile.officialstore'),
          price: 100,
          value: false,
          select: false
        },
        {
          name: this.$t('profile.Tractor'),
          img: require("./../../../../../assets/img/tractors2.jpg"),
          shop: this.$t('profile.officialstore'),
          price: 100,
          value: false,
          select: false
        },
        {
          name: this.$t('profile.Tractor'),
          img: require("./../../../../../assets/img/tractors3.jpg"),
          shop: this.$t('profile.officialstore'),
          price: 100,
          value: false,
          select: false
        },
        {
          name: this.$t('profile.Tractor'),
          img: require("./../../../../../assets/img/tractors4.jpg"),
          shop: this.$t('profile.officialstore'),
          price: 100,
          value: false,
          select: false
        }
      ]
    };
  },
  created() {
    this.DeteleAll();
  },
  methods: {
    detele(index) {
      this.commodity.splice(index, 1);
    },
    isshow() {
      this.count = 0;
      this.commodity.forEach(elem => {
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
      this.commodity[index].select = !this.commodity[index].select;
      this.isshow();
    },
    DeteleAll() {
      function selectitem(elem) {
        return elem.select == false;
      }
      let array = [];
      array = this.commodity.filter(selectitem);
      this.commodity = array;
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
    background: #ffff;
    position: relative;
    p {
      line-height: 0.7rem;
      font-size: 0.3rem;
      padding-left: 0.3rem;
      width: 4.5rem;
      word-wrap: break-word；;
    }
    button {
      border-radius: 0.2rem;
      border: 1px solid #f01544;
      background-color: #fff;
      color: #f01544;
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