<template>
  <div id="myCharts" ref="myCharts"></div>
</template>

<script>
// import echarts from 'echarts'
export default {
  methods: {
    drawEcharts() {
      const myCharts = this.$echarts.init(this.$refs.myCharts);
      let doc = document.getElementById("myCharts");
      let listener = function () {
        myCharts.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "OCV1良率统计", //标题
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
        //  axisPointer: {
        //     // 坐标轴指示器，坐标轴触发有效
        //     type: "none", // 默认为直线，可选为：'line' | 'shadow'
        //   }, 
        },
        grid: {
          //修改位置
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
            ],
            axisPointer: {
              type: "none",
            },
            axisLine: {
              lineStyle: {
                color: "#55708E",
              },
            },
            axisTick: {
              //隐藏刻度线
              show: false,
            },
            axisLabel: {
              //改变X轴文字样式
              interval: 0,
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
          
            },
            triggerEvent: false, // 设置为true后，可触发事件。实现x轴文字过长，显示省略号，hover上去显示全部的功能
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "单位",
            min: 0,
            max: 12000,
            interval: 3000,
            axisLabel: {
              formatter: "{value}",
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                type: "dashed",
                color: "#284E70",
              },
            },
            axisTick: {
              show: false,
            },
          },

          {
            type: "value",
            name: "%",
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
              formatter: "{value} %",
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                type: "dashed",
                color: "#284E70",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "良品数量",
            type: "bar",
            stack: "总量",
            barWidth: 120, //柱图宽度
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#126DAF",
                  },
                  {
                    offset: 1,
                    color: "#104372",
                  },
                ]),
              },
            },
            data: [2600, 5900, 9000, 2640, 2870, 707, 1756, 1756],
          },
          {
            name: "不良品数量",
            type: "bar",
            stack: "总量",
            barWidth: 30, //柱图宽度
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#126DAF",
                  },
                  {
                    offset: 1,
                    color: "#14628B",
                  },
                ]),
              },
            },
            data: [3200, 3020, 3010, 3340, 3900, 3300, 3200, 3200],
          },
          {
            name: "良品率",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FCC102", //改变折线点的颜色
                lineStyle: {
                  color: "#FCC102", //改变折线颜色
                },
              },
            },
            data: [
              20,
              22,
              33,
              45,
              63,
              10.2,
              20.3,
              20,
              22,
              33,
              45,
              63,
              10.2,
              20.3,
              40,
              89,
            ],
          },
        ],
      };

      myCharts.setOption(option);
    },
  },
  mounted() {
    this.drawEcharts();
  },
};
</script>

<style lang="less" scoped>
#myCharts {
  width: 100%;
  height: 100%;
}
</style>