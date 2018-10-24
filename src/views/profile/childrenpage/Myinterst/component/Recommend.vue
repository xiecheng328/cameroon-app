<template>
    <div class="Interst-content">
            <div class="Interst-content-title">
              <span class="Interst-content-title-text">好友关注动态</span>
            </div>
            <div class="Interst-content-user">
                  <li class="Interst-content-user-list" v-for=" (item,index) in recommend" :key="index">
                    <div class="Interst-content-user-list-item">
                        <div class="Interst-content-user-list-item-img">
                            <!-- 用户头像，调制动态 -->
                            <img src="./../../../../../assets/img/user1@2x.png" alt="">
                        </div>
                        <div class="Interst-content-user-list-item-deract">
                          <p class="Interst-content-user-list-item-deract-title">{{item.title}}</p>
                          <p class="Interst-content-user-list-item-deract-tag">
                                <span>简介：</span>{{item.tag}}
                          </p>
                          <p class="Interst-content-user-list-item-deract-tag">
                                <span>粉丝数:</span>{{item.sum}}
                          </p>                   
                        </div>
                        <div class="Interst-content-user-list-item-plus" >
                          <img src="../../../../../assets/img/addlogo.png" alt="">
                          <p>加关注</p>
                        </div>
                    </div>
                  </li>
            </div> 
    </div>
</template>

<script>
export default {
    // props:[
    //     'recommend'
    // ],
  data () {
    return {
      active1: 4,
      recommend: [{
         img:"./../../../../../assets/img/user1@2x.png",
         title:"大咖1号",
         tag:"农业技术人员",
         sum:1,

       },{
        img:"./../../../../../assets/img/user1@2x.png",
         title:"大咖2号",
         tag:"农业部职员",
         sum:2
       },{
        img:"./../../../../../assets/img/user1@2x.png",
         title:"大咖3号",
         tag:"热衷于农业技术仔",
         sum:3
       },{
         img:"./../../../../../assets/img/user1@2x.png",
         title:"大咖4号",
         tag:"挖掘机工程师",
         sum:4
       },{
        img:"./../../../../../assets/img/user1@2x.png",
         title:"大咖5号",
         tag:"播种研究员",
         sum:5
       },{
        img:"./../../../../../assets/img/user1@2x.png",
         title:"大咖6号",
         tag:"农业技术人员",
         sum:6
       },{
         img:"/img/user.png",
         title:"大咖7号",
         tag:"农业技术人员",
         sum:7
       }],
    };
  },
}
</script>

<style lang="scss">
.Interst{
    &-title{
        margin-top: 0.4rem;
        height: 0.68rem;
        line-height: 0.68rem;
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
        &-content{
              &-title{
                  height: 0.68rem;
                  line-height: 0.68rem;
                  border-bottom: 1px solid #cccccc; 
                  margin-bottom: 1px;
                  &-text{
                      margin-left: 0.2rem;
                      color: #636363;
                      font-weight: bold;
                  }
              }
              &-user{
                  border-bottom: 0.02rem solid #ccc;
                  &-list{
                        list-style: none;
                        padding-left: 20px;
                        width: 100%;
                        height: 1.53rem;
                        background: #ffffff;
                        border-bottom: 1px solid #cccccc;
                        border-top: -1px solid #cccccc;
                        &:first-child{
                          border-top: 1px solid #cccccc;
                        }
                        &-item{
                            position: relative;
                            width: 100%;
                            height: 1.53rem;
                            display: flex;
                            &-img {
                              width: 70px;
                              height: 70px;
                              margin-top: 0.12rem;
                              img {
                              width: 100%;
                              height: 100%;
                                    }
                              }
                            &-deract{
                                margin-left: 0.4rem;
                                margin-top: 0.1rem;
                                width: 50%;
                                &-title{
                                    color: #333;
                                    font-weight: 700;
                                    font-size: 0.3rem;
                                    margin: -8px;
                                }

                                &-tag{
                                    color: #666;
                                    font-size: 0.2rem;
                                    margin: -8px;
                                }
                            }
                            &-plus{
                                position: absolute;
                                width: 45px;
                                height: 45px;
                                right: 10%;
                                top: 10%;
                            }
                        }
                        
                  }
        }
    }
}
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 0;
  }
}
</style>
