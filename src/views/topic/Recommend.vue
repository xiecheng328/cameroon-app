<template>
    <div id="recommend">
        <div class="container" v-for="i in 4">
            <div class="header">
           <img src="../../assets/img/headPortrait.jpeg"/>
                <span class="name">工农联盟</span>
                <!-- <span class="time">4分钟前</span> -->
                <div class="logo">+ 关注</div>
            </div>
            <div class="contant">
                <h3>农广天地间——黑土</h3>
                <div class="contain">
                    <div class="leftText">
                        中国拖拉机工业的起点以东方红拖拉机的诞生为标志。1958年,大功率的机器的出现，到现在的建三江的农业自动化，都是的农业的光辉历程！中国农业的成熟。
                    </div>
                    <div class="rightImg">
                    <img src="../../assets/img/小麦收割机1.jpg"/>
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
  overflow: hidden;
  text-overflow:ellipsis;
  /*white-space:nowrap;*/
  /*detail-text:t-ellipsis(3);*/


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
