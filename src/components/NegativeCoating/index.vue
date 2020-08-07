<template>
  <div class="container">
    <div class="header">
      <ul>
        <li v-for="item in 4 " :key="item">
          <span>负极搅拌罐01# 当前运行市场(h)</span>
          <span>12.21</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <div id="myChart1" ref="myChart1"></div>
      <div id="myChart2" ref="myChart2"></div>
    </div>
    <div class="footer">
      <div class="footer_left">
        <ul>
          <li v-for="item in 9" :key="item">
            <span>供料泵转速</span>
            <span>30</span>
          </li>
        </ul>
      </div>
      <div class="footer_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    drawEcharts1() {
      const myChart1 = this.$echarts.init(this.$refs.myChart1);
      let doc = document.getElementById("myChart1");
      let listener = function () {
        myChart1.resize();
      };
      let data1 = ["6000", "6000", "6000", "6000", "6000", "6000", "6000"];
      let data2 = ["40", "40", "40", "40", "40", "40", "40"];
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "上烘箱", //标题
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "上烘箱1",
              "上烘箱2",
              "上烘箱",
              "上烘箱1",
              "上烘箱1",
              "上烘箱1",
              "上烘箱1",
            ],
            color: "#ccc",
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLabel: {
              //改变X轴文字样式
              interval: 0,
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          // 第一个Y轴配置
          {
            type: "value",
            name: "频率",
            min: 0,
            max: 12000,
            interval: 3000,
            axisTick: {
              show: false,
              alignWithLabel: true,
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
          },
          // 第二个Y轴配置
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 120,
            interval: 30,
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
        ],
        series: [
          {
            name: "频率",
            type: "bar",
            barWidth: "20",
            data: data1,
            barGap: "0%",
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
          },
          {
            name: "温度",
            type: "bar",
            barWidth: "20",
            yAxisIndex: 1,
            barGap: "0%",
            min: 0,
            max: 100,
            data: data2,
          },
        ],
      };

      myChart1.setOption(option);
    },
    drawEcharts2() {
      const myChart2 = this.$echarts.init(this.$refs.myChart2);
      let doc = document.getElementById("myChart2");
      let listener = function () {
        myChart2.resize();
      };
      let data1 = ["6000", "6000", "6000", "6000", "6000", "6000", "6000"];
      let data2 = ["40", "40", "40", "40", "40", "40", "40"];
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "下烘箱", //标题
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "上烘箱1",
              "上烘箱2",
              "上烘箱",
              "上烘箱1",
              "上烘箱1",
              "上烘箱1",
              "上烘箱1",
            ],
            color: "#ccc",
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLabel: {
              //改变X轴文字样式
              interval: 0,
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          // 第一个Y轴配置
          {
            type: "value",
            name: "频率",
            min: 0,
            max: 12000,
            interval: 3000,
            axisTick: {
              show: false,
              alignWithLabel: true,
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
          },
          // 第二个Y轴配置
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 120,
            interval: 30,
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
        ],
        series: [
          {
            name: "频率",
            type: "bar",
            barWidth: "20",
            data: data1,
            barGap: "0%",
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
          },
          {
            name: "温度",
            type: "bar",
            barWidth: "20",
            yAxisIndex: 1,
            barGap: "0%",
            min: 0,
            max: 100,
            data: data2,
          },
        ],
      };

      myChart2.setOption(option);
    },
  },
  mounted() {
    this.drawEcharts1();
    this.drawEcharts2();
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  .header {
    height: 20%;
    & > ul {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      & > li {
        height: 70%;
        width: 24%;
        min-width: 24%;
        background-image: url("../../assets/image/pingmei_bg_12_1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 0.2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > span:nth-child(1) {
          font-size: 0.14rem;
        }
        & > span:nth-child(2) {
          font-size: 0.3rem;
          font-weight: bold;
          color: #00ffe0;
        }
      }
    }
  }
  .main {
    height: 50%;
    margin-bottom: 0.4rem;
    display: flex;
    #myChart1,
    #myChart2 {
      width: 50%;
      height: 100%;
    }
  }
  .footer {
    height: 40%;
    display: flex;
    .footer_left {
      flex: 1.5;
      & > ul {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;
        & > li {
          width: 2rem;
          height: 1rem;
          background-image: url("../../assets/image/pingmie_13.png");
          background-repeat: no-repeat;
          background-size: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.2rem 0.1rem 0.3rem 0.1rem;
          box-sizing: border-box;
          & > span:nth-child(1) {
            font-size: 0.16rem;
          }
          & > span:nth-child(2) {
            font-size: 0.22rem;
            color: #00ffe0;
          }
        }
      }
    }
    .footer_right {
      flex: 2;
      background-image: url("../../assets/image/pingmei16.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
  }
}
</style>  