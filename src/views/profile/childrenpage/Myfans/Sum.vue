<template>
    <div id="myChart" class="imglay">
    </div>
</template>

<script>
var echarts = require('echarts');
var option = {
         title: { text: '你的近七天的粉丝数量变化',
          left: 'center',
         },
        tooltip: {},
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
        yAxis: {type: 'value'},
        series: [{
          data: [500, 492, 327, 490, 673, 820, 837],
            type: 'line',
            areaStyle: {}
        }]
    };

export default {

// 绘制图表
name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
    
        myChart.setOption(option);
    }
  }
  }
</script>

<style lang="scss" scoped>
.imglay{
    width: 342px;
    height: 200px;
}
</style>
