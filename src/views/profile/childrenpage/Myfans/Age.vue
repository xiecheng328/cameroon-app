<template>
    <div id="myChart" class="imglay">
123
    </div>
</template>

<script>
var echarts = require('echarts');
var option = {
         title: { text: 'Fans of age',
          left: 'center',
         },
        tooltip: {},
        xAxis: {
          data: ["17", "20", "31", "33", "42", "50","55"]
        },
        yAxis: {},
        series: [{
          name: 'Age group',
          type: 'bar',
          data: [5, 20, 36, 47, 33, 10,7]
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
    width: 344px;
    height: 200px;
}
</style>
