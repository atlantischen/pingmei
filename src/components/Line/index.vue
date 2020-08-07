<template>
  <div class="container">
    <div class="echart_top">
      <div class="echart_left">
        <div id="myCharts1" ref="myCharts1"></div>
      </div>
      <div class="echart_right">
        <div id="myCharts2" ref="myCharts2"></div>
      </div>
    </div>
    <div class="echart_bottom">
      <div id="myCharts3" ref="myCharts3"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    drawEcharts1() {
      // 初始化ecahrts
      const myCharts1 = this.$echarts.init(this.$refs.myCharts1);
      let doc = document.getElementById("myCharts1");
      let listener = function() {
        myCharts1.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "裸电芯库存", //标题
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
            data: ["X-Ray检测", "焊接", "模切叠片"],
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
            },
            axisLabel: {
              //改变X轴文字样式
              interval: 0,
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
              
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位",
            color: "#fff",
            min: 0, //最小值
            max: 400, //最大值
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
            data: [100, 52, 200],
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
      myCharts1.setOption(option);
    },
    drawEcharts2() {
      // 初始化ecahrts
      const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
      let doc = document.getElementById("myCharts2");
      let listener = function() {
        myCharts2.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "原材料库存", //标题
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
            data: [
              "负极辊轧切片",
              "负极搅拌",
              "负极涂布",
              "正极辊轧切片",
              "正极搅拌",
              "正极涂布",
              "焊接封装",
              "检测"
            ],
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
            },
            axisLabel: {
              //改变X轴文字样式
              interval: 0,
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
              // 当文字长度大于4用省略号表示
              formatter: function(value) {
                return value.length > 4 ? value.slice(0, 4) + "..." : value;
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位",
            color: "#fff",
            min: 0, //最小值
            max: 80, //最大值
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
            data: [20, 40, 60, 35, 45, 38, 25, 18],
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
      myCharts2.setOption(option);
    },
    drawEcharts3() {
      // 初始化ecahrts
      const myCharts3 = this.$echarts.init(this.$refs.myCharts3);
      let doc = document.getElementById("myCharts3");
      let listener = function() {
        myCharts3.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "电芯库存", //标题
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
            data: [
              "OCV1",
              "OCV2",
              "OCV3",
              "常温静置-1",
              "常温静置-2",
              "常温静置-3",
              "抽气整形",
              "二次分容",
              "分容",
              "封装",
              "干燥注液",
              "高温静置-1",
              "高温静置-2",
              "高温静置-3",
              "核电",
              "化成"
            ],
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
            },
            axisLabel: {
              //改变X轴文字样式

              interval: 0,
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              }
              // 当文字长度大于4用省略号表示
              // formatter: function(value) {
              //   return value.length > 4 ? value.slice(0, 4) + "..." : value;
              // }
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
            data: [
              2000,
              4000,
              6000,
              3500,
              4500,
              3800,
              2500,
              1800,
              2000,
              4000,
              6000,
              3500,
              4500,
              3800,
              2500,
              1800
            ],
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
      myCharts3.setOption(option);
    }
  },
  mounted() {
    this.drawEcharts1();
    this.drawEcharts2();
    this.drawEcharts3();
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  .echart_top {
    height: 50%;
    width: 100%;
    display: flex;
    .echart_left,
    .echart_right {
      width: 50%;
      height: 100%;
    }
  }
  .echart_bottom {
    height: 50%;
    width: 100%;
  }
  #myCharts1,
  #myCharts2,
  #myCharts3 {
    width: 100%;
    height: 100%;
  }
}
</style>