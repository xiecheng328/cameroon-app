<template>
    <div id="recommend">
        <div class="container" v-for="i in 4">
            <div class="header">
                <img src="../../assets/img/headPortrait.jpeg" alt="">
                <span class="name">目在远方</span>
                <!-- <span class="time">4分钟前</span> -->
                <div class="logo">+ 关注</div>
            </div>
            <div class="contant">
                <h3>这是标题</h3>
                <div class="contain">
                    <div class="leftText">
                        文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文
                    </div>
                    <div class="rightImg">
                      <img src="../../assets/img/headPortrait.jpeg" alt="">
                    </div>
                </div>
            </div>
            <div class="video">
                
            </div>
            <div class="footer">
                <span>100赞同</span><span>99评论</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Recommend"
};
</script>

<style scoped>
#recommend {
  height: 500px;
  background-color: #fff;
}
.container{
    height: 206px;
    /* background-color: green; */
    box-shadow: 5px 5px 5px #ddd; 
    margin-top: 10px;
}
.header img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.header .name {
  margin-right: 10px;
}
.header .logo{
    margin-left: 100px;
    margin-top: 10px;
    margin-right: 10px;
    height: 20px;
    width: 45px;
    float: right;
    background-color:#ddd;
    text-align: center；
    
}
.contain {
  display: flex;
  flex-direction: row;
  margin: 0 10px 10px 10px;
  /* height: 150px; */
}
.leftText {
  flex-grow: 3;
  height: 100px;
  width: 300px;
  /* background-color: #f60; */
}
.rightImg {
  flex-grow: 2;
  height: 100px;
  width: 100px;
  /* background-color: red; */
  margin-left: 30px;
}
.rightImg img{
    width: 80px;
    height: 80px;  
}
.footer >span{
    margin-right: 10px;
}
</style>
