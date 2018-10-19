<template>
    <div class="commodity">
        <ul>
            <li v-for="(item,index) in commodity" :key="index">
                <div class="commodity-content">
                    <div class="commodity-content-shop">
                        <div class="commodity-content-shop-name">
                            <img src="../../../../../../public/img/shop-icon@1,5x.png" alt="">
                            <span>{{item.shop}}</span>
                        </div>
                        <div></div>
                    </div>
                    <div class="commodity-content-list">
                        <div class="commodity-content-list-left"> <img :src="item.img" alt=""></div>
                        <div class="commodity-content-list-right">
                            <p><span>名称：</span>{{item.name}}</p>
                            <p><span>价格：¥</span>{{item.price}}</p>
                        </div>
                        <div class="commodity-content-list-cancel"><button>取消关注</button></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:[
        'commodity'
    ],
};
</script>

<style scoped lang="scss">
.commodity {
  background: rgb(235, 235, 235);
  overflow: hidden;
  &-content {
    border-radius: 0.2rem;
    border: 1px solid #fff;
    background: #fff;

    &-shop {
      background: #fff;
      border-bottom: 1px solid #ddd;
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
      height: 0.6rem;
      &-name {
        position: relative;
        line-height: 0.6rem;
        span {
          margin-left: 0.35rem;
          color: rgb(164, 164, 164);
        }
        img {
          height: 0.2rem;
          position: absolute;
          margin-left: 0.1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    &-list {
      display: flex;
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      position: relative;
      &-left {
        flex-grow: 1;
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
          border: 1px solid #000;
          background-color: #fff;
          font-size: 0.1rem;
        }
      }
    }
  }
  li {
    margin: 0.15rem 0.2rem;
  }
}
</style>