<template>
    <div id="myChart" class="imglay">
    </div>
</template>

<script>
var echarts = require('echarts');
var option = {
          title : {
        text: 'Sex group',
        // subtext: '纯属虚构',
        x:'center',
        
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['男性','女性']
      
    },
    series : [
        {
            name: 'Age group',
            type: 'pie',
            radius : '56%',
            center: ['60%', '50%'],
            data:[
              // [5, 20, 36, 47, 33, 10,7]
                {value:55, name:'男性'},
                {value:12, name:'女性'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
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
