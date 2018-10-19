<template>
    <div class="topic">
        <div class="topic-search">
        </div>
        <div class="topic-content">
            <div class="topic-content-list">
                <ul>
                    <li v-for="(item,index) in topic" :key="index">
                        <div class="topic-content-list-content">
                            <div class="topic-content-list-content-left"><img :src="item.src" alt=""></div>
                            <div class="topic-content-list-content-right">
                                <div>
                                    <p>
                                        {{item.title}}
                                    </p>
                                    <p>
                                        简介：{{item.intro}}
                                    </p>
                                    <p>
                                        关注人数：{{item.hot}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["topic"]
};
</script>

<style scoped lang="scss">
.topic {
  &-content {
    background-color: #ddd;
    height: 100%;
    overflow: hidden;
    &-list {
      li {
        margin-top: 0.2rem;
        height: 1.8rem;
        background-color: #fff;
      }
      &-content {
        display: flex;
        &-left {
          flex-grow: 1;
          position: relative;
          height: 1.8rem;
          img {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            height: 1.2rem;
          }
        }
        &-right {
          flex-grow: 2;
          position: relative;
          div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          p {
            &:nth-child(1) {
              font-size: 0.3rem;
            }
            &:nth-child(2) {
              color: rgb(157, 157, 157);
            }
          }
        }
      }
    }
  }
}
.demo-text p {
  margin: 0;
}
.container{
    height: 100%;
}
</style>