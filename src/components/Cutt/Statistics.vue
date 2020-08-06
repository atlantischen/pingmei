<template>
  <div class="box">
    <div id="myChart1" ref="myChart1"></div>
    <div id="myChart2" ref="myChart2"></div>
  </div>
</template>

<script>
export default {
  methods: {
    drawEcharts1() {
      const myChart1 = this.$echarts.init(this.$refs.myChart1);
      let doc = document.getElementById("myChart1");
      let listener = function() {
        myChart1.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "CCD不良统计柏拉图", //标题
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          //修改位置
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true
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
              "2020-07-15"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              lineStyle: {
                color: "#55708E"
              }
            },
            axisTick: {
              //隐藏刻度线
              show: false
            },
            axisLabel: {
              //改变X轴文字样式

              textStyle: {
                //改变刻度字体样式
                color: "#fff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位",
            min: 0,
            max: 12000,
            interval: 3000,
            axisLabel: {
              formatter: "{value}"
            },
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
          },
          {
            type: "value",
            name: "%",
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
              formatter: "{value} %"
            },
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
            name: "数量",
            type: "bar",
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
            },
            data: [2600, 5900, 9000, 2640, 2870, 707, 1756]
          },
          {
            name: "良品率",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FCC102", //改变折线点的颜色
                lineStyle: {
                  color: "#FCC102" //改变折线颜色
                }
              }
            },
            data: [20, 22, 33, 45, 63, 10.2, 20.3]
          }
        ]
      };

      myChart1.setOption(option);
    },
    drawEcharts2() {
      const myChart2 = this.$echarts.init(this.$refs.myChart2);
      let doc = document.getElementById("myChart2");
      let listener = function() {
        myChart2.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
       let option = {
        title: {
          text: "CCD产能统计", //标题
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          //修改位置
          left: "3%",
          right: "6%",
          bottom: "3%",
          containLabel: true
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
              "2020-07-15"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              lineStyle: {
                color: "#55708E"
              }
            },
            axisTick: {
              //隐藏刻度线
              show: false
            },
            axisLabel: {
              //改变X轴文字样式

              textStyle: {
                //改变刻度字体样式
                color: "#fff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位",
            min: 0,
            max: 12000,
            interval: 3000,
            axisLabel: {
              formatter: "{value}"
            },
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
            name: "数量",
            type: "bar",
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
            },
            data: [2600, 5900, 9000, 2640, 2870, 707, 1756]
          },
         
        ]
      };

      myChart2.setOption(option);
    }
  },
  mounted() {
    // 初始化ecahrts
    this.drawEcharts1();
    this.drawEcharts2();
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  #myChart1,
  #myChart2 {
    height: 50%;
  }
}
</style>