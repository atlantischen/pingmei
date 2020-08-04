<template>
  <div id="myCharts" ref="myCharts"></div>
</template>

<script>
// import echarts from 'echarts'
export default {
  methods: {},
  mounted() {
    // 初始化ecahrts
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    let doc = document.getElementById("myCharts");
    let listener = function() {
      myCharts.resize();
    };
    this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
    let option = {
      title: {
        text: "分选工序产能统计图", //标题
        textStyle: {
          color: "#fff"
        }
      },
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "none" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "单位",
          color: "#fff",
          min: 0, //最小值
          max: 12000, //最大值
          splitNumber: 4, //间隔倍数
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              type: "dashed",
              color: "#284E70"
            }
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "产能",
          type: "bar",
          barWidth: "60%",
          data: [1000, 520, 2000, 3340, 3900, 3300, 8800],
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#126DAF"
                },
                {
                  offset: 1,
                  color: "#104372"
                }
              ])
            }
          }
        }
      ]
    };
    myCharts.setOption(option);
  }
};
</script>

<style lang="less" scoped>
#myCharts {
  width: 100%;
  height: 100%;
}
</style>