<template>
  <div class="topic">
    <div class="topic-search">
    </div>
    <div class="topic-content">
      <div class="topic-content-list">
        <ul>
          <li class="list-item" v-for="(item,index) in topic" :style="item.deleteSlider" :key="index">
            <div class="topic-content-list-content" @touchstart.stop='touchStart(index)' @touchmove.stop='touchMove' @touchend.stop='touchEnd'>
              <div class="topic-content-list-content-left"><img :src="item.src" alt=""></div>
              <div class="topic-content-list-content-right">
                <div>
                  <p>
                    {{item.title}}
                  </p>
                  <p>
                    {{intro}}: {{item.intro}}
                  </p>
                  <p>
                    {{attpeople}}: {{item.hot}}
                  </p>
                </div>
              </div>
            </div>
            <div class="remove" ref='remove'>
              <button @click.stop="detele(index)">{{unfollow}}</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startX: 0,
      endX: 0,
      attpeople:this.$t('profile.attpeople'),
      intro:this.$t('profile.intro'),
      unfollow:this.$t('profile.unfollow'),
      topic :[{
        title:this.$t('profile.Seedfield'),
        hot:2087,
        src:require('./../../../../../../public/img/profileicon1@2x.png'),
        intro:this.$t('profile.topicfarm'),
        deleteSlider:''
    },{
        title:this.$t('profile.nofarm'),
        hot:10242,
        src:require('./../../../../../../public/img/profileicon1@2x.png'),
        intro:this.$t('profile.harmfarming'),
        deleteSlider:''
    },{
        title:this.$t('profile.howrice'),
        hot:61824,
        src:require('./../../../../../../public/img/profileicon1@2x.png'),
        intro:this.$t('profile.shareknow'),
        deleteSlider:''
    }]
    };
  },
  methods: {
    touchStart(index, e) {
      e = e || event;
      this.nowindex = index;
      //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      //   console.log(index);
      if (e.touches.length == 1) {
        // 记录开始位置
        this.startX = e.touches[0].clientX;
      }
      return false;
    },
    touchMove(e) {
      e = e || event;
      //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.remove.offsetWidth;
      if (e.touches.length == 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = e.touches[0].clientX;

        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX;
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX == 0) {
          this.topic[this.nowindex].deleteSlider =
            "transform:translateX(0px)";
          // 大于0，表示左滑了，此时滑块开始滑动
        } else if (this.disX > 0) {
          //具体滑动距离我取的是 手指偏移距离*5。
          this.topic[this.nowindex].deleteSlider =
            "transform:translateX(-" + this.disX + "px)";

          // 最大也只能等于删除按钮宽度
          if (this.disX >= wd) {
            this.topic[this.nowindex].deleteSlider =
              "transform:translateX(-" + wd + "px)";
          }
        }
      }
      return false;
    },
    touchEnd(e) {
      e = e || event;
      //   let currentTarget = e.currentTarget;
      //   console.log(e.currentTarget.style);
      let wd = this.$refs.remove[0].offsetWidth;
      if (e.changedTouches.length == 1) {
        let endX = e.changedTouches[0].clientX;
        this.disX = this.startX - endX;
        //如果距离小于删除按钮一半,强行回到起点

        if (this.disX * 5 < wd / 2) {
          this.topic[this.nowindex].deleteSlider =
            "transform:translateX(0px)";
        } else {
          //大于一半 滑动到最大值
          this.topic[this.nowindex].deleteSlider =
            "transform:translateX(-" + wd + "px)";
        }
      }
      return false;
    },
    detele(index) {
      this.topic.forEach((elem, indexx) => {
        if (indexx == index) {
          this.nowindex = -1;
          this.topic.splice(index, 1);
          this.index = -1;
        }
      });
      return false;
    }
  }
};
</script>

<style scoped lang="scss">
.topic {
  &-content {
    background: #fafafa;
    height: 100%;
    overflow: hidden;
    &-list {
      li {
        margin-top: 0.2rem;
        height: 1.8rem;
        background-color: #fff;
        border-top: 0.5px solid rgb(208, 208, 208);
        border-bottom: 0.5px solid rgb(208, 208, 208);
        position: relative;
        transition: 0.3s;
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
.container {
  height: 100%;
}
.remove {
  width: 2rem;
  height: 1.8rem;
  background: #ff4949;
  font-size: 0.2rem;
  color: #fff;
  border-top: 0.5px solid rgb(208, 208, 208);
  border-bottom: 0.5px solid rgb(208, 208, 208);
  text-align: center;
  line-height: 1.5rem;
  position: absolute;
  top: 0;
  right: -2rem;
  button {
    color: #fff;
    width: 100%;
    height: 100%;
    background-color: #ff4949;
    outline: none;
  }
}
</style>