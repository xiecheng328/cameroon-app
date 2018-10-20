<template>
    <div class="topt">
        <div class="topt-title">
            <span>截止到6月份我们app用户粉丝排名榜前十</span>
        </div>
        <div class="topt-toplist">
            <ul>
                <li v-for="(item,index) in toplist" :key="index" class="topt-toplist-item">
                    <p>第{{item.num}}名:{{item.name}}&nbsp;&nbsp;{{item.tag}}&nbsp;粉丝数:{{item.sum}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      toplist: [{
         name:"大咖1号",
         tag:"农业技术人员",
         num:1,
         sum:18000
       },{
         name:"大咖2号",
         tag:"农业部职员",
         num:2,
         sum:17000
       },{
         name:"大咖3号",
         tag:"热衷于农业技术仔",
         num:3,
         sum:16000
       },{
         name:"大咖4号",
         tag:"挖掘机工程师",
         num:4,
         sum:16000
       },{
         name:"大咖5号",
         tag:"播种研究员",
         num:5,
         sum:16000
       },{
         name:"大咖6号",
         tag:"农业技术人员",
         num:6,
         sum:16000
       },{
         name:"大咖7号",
         tag:"农业技术人员",
         num:7,
         sum:16000
       },{
         name:"大咖8号",
         tag:"农业技术人员",
         num:8,
         sum:16000
       },{
         name:"大咖9号",
         tag:"农业技术人员",
         num:9,
         sum:16000
       },{
         name:"大咖10号",
         tag:"农业技术人员",
         num:10,
         sum:16000
       }],
    };
  }
}
</script>


<style lang="scss">
.topt{
  margin-bottom: 0.36rem;
    &-title{
        text-align: center;
        font-size: 0.3rem;
        font-weight: bold;
    }
    &-toplist{
        &-item{
            border: 1px #ccc solid;
        }
    }
}
</style>
