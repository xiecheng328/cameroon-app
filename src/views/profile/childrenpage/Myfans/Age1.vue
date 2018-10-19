<template>
    <div id="myChart1" class="imglay">
123
    </div>
</template>

<script>
var echarts = require('echarts');
var option = {
        title : {
        text: 'Age group',
        // subtext: '纯属虚构',
        x:'center',
        font:'12px'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['10岁以上','20岁以上','30岁以上','40岁以上','50岁以上']
      
    },
    series : [
        {
            name: 'Age group',
            type: 'pie',
            radius : '56%',
            center: ['60%', '50%'],
            data:[
              // [5, 20, 36, 47, 33, 10,7]
                {value:5, name:'10岁以上'},
                {value:20, name:'20岁以上'},
                {value:83, name:'30岁以上'},
                {value:33, name:'40岁以上'},
                {value:17, name:'50岁以上'}
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
        let myChart = echarts.init(document.getElementById('myChart1'))
    
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
