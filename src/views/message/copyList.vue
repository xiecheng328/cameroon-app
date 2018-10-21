<template>
<div class="copyList">

    <div class="header">
<img src="../../assets/img/left.png" alt="" class="comeback" @click="home()">
<h3 class="remark">所有评论</h3>
<router-link to="/myset/message"><h3 class="reset">设置</h3></router-link>
    </div>
    <ul class="body">
        <li><img src="../../assets/img/user.png" alt="" class="user-img">
            <span>张三</span>
            <span>10:10</span>
        </li>
        <li class="goodluck">赞了这条评论</li>
        <li>回复：@李四  这个问题可以这样解决</li>
        <li>李四回复张三：那如果遇到这种问题怎么办？</li>
</ul>
 <ul class="body">
        <li><img src="../../assets/img/user.png" alt="" class="user-img">
            <span>张三</span>
            <span>10:10</span>
        </li>
         <li class="goodluck">赞了这条评论</li>
        <li>回复：@李四  这个问题可以这样解决</li>
        <li>李四回复张三：那如果遇到这种问题怎么办？</li>
</ul>
 <ul class="body">
        <li><img src="../../assets/img/user.png" alt="" class="user-img">
            <span>张三</span>
            <span>10:10</span>
        </li>
         <li class="goodluck">赞了这条评论</li>
        <li>回复：@李四  这个问题可以这样解决</li>
        <li>李四回复张三：那如果遇到这种问题怎么办？</li>
</ul>




</div>
</template>
<script>
    export default{
    method:{
        home(){
            this.$router.push({name:'message/Message.vue'});
        },
        control(){
            this.$router.push({name:'MySet/component/Message.vue'});
        }
    }
}
</script>

 <style>
    li{
        list-style: none;
    }
    .user-img{
        width: 30px;
    }
    .comeback{
        width: 40px;
        top: 0;
    }
    .header{
        position: relative;
    }
    .remark{
        position: absolute;
        top:0;
        left:60px;
    }
    .reset{
        position: absolute;
        top:0;
        left:200px;
    }
    .goodluck{
        font-size:20px;
        background: pink;
    }
    </style>

