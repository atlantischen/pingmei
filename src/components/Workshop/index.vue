<template>
  <div class="container">
    <div class="header">
      <ul class="total">
        <li class="total_list" v-for="item in totalList" :key="item.title">
          <div class="total_list_title"><span>{{item.title}}</span></div>
          <div class="total_lists">
            <span class="total_num">{{item.num}}</span>
            <div class="tital_icon" :style="{backgroundImage:'url(' + item.icon+ ')'}"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="circle">
          <div id="myChart" ref="myChart"></div>
          <ul class="desc">
            <li v-for="item in 5 " :key="item">
              <div class="square">
                <span></span>
              </div>
              <div class="desc_text">
                <span>开机</span>
                <span>600</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="lists">
          <ul>
            <li v-for="item in 10" :key="item">
              <div class="list_left">
                <span>分组码</span>
                <span>1</span>
              </div>
              <div class="list_right">
                <span>电芯</span>
                <span>245</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_right">
        <div id="myChart1" ref="myChart1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalList: [
        {
          title: "分选工单号",
          num: 250,
          icon: require("../../assets/image/pingmei_icon3.png"),
        },
        {
          title: "分选工单类型",
          num: 500,
          icon: require("../../assets/image/pingmei_icon3.png"),
        },
        {
          title: "分选工单数量",
          num: 250,
          icon: require("../../assets/image/pingmei_icon3.png"),
        },
        {
          title: "分选工单计划数量",
          num: 250,
          icon: require("../../assets/image/pingmei_icon3.png"),
        },
      ],
    };
  },
  methods: {
    drawEcharts() {
      const myChart = this.$echarts.init(this.$refs.myChart);
      let doc = document.getElementById("myChart");
      let listener = function () {
        myChart.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "90%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "24",
                fontWeight: "bold",
              },
            },
            itemStyle: {
              show: false,
              borderColor: "#30537F",
              borderWidth: 3,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "开机" },
              { value: 310, name: "生产" },
              { value: 234, name: "待料" },
              { value: 135, name: "故障" },
              { value: 1548, name: "关机" },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
    drawEcharts1() {
      const myChart1 = this.$echarts.init(this.$refs.myChart1);
      let doc = document.getElementById("myChart1");
      let listener = function () {
        myChart1.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "焊接良率统计", //标题
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "", // 默认为直线，可选为：'line' | 'shadow'
          },
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
              "COVD",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
            ],
            axisPointer: {
              type: "shadow",
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
              // 当文字长度大于4用省略号表示
              formatter: function (value) {
                return value.length > 4 ? value.slice(0, 4) + "..." : value;
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
                    color: "#104372",
                  },
                ]),
              },
            },
            data: [
              2600,
              5900,
              9000,
              2640,
              2870,
              707,
              1756,
              2600,
              5900,
              9000,
              2640,
              2870,
              707,
              1756,
              707,
              1756,
            ],
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
            data: [
              3200,
              3020,
              3010,
              3340,
              3900,
              3300,
              3200,
              3200,
              3020,
              3010,
              3340,
              3900,
              3300,
              3200,
              5000,
              9000,
            ],
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

      myChart1.setOption(option);
    },
  },
  mounted() {
    this.drawEcharts();
    this.drawEcharts1();
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
    width: 100%;
    display: flex;
    align-items: center;
    .total {
      width: 100%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .total_list {
        flex: 1;
        width: 24%;
        min-width: 24%;
        max-width: 24%;
        background-color: #0f375c;
        height: 100%;
        display: flex;
        flex-direction: column;
        .total_list_title {
          height: 30%;
          width: 100%;
          background-color: #0c4a66;
          font-size: 0.16rem;
          line-height: 0.35rem;
          padding-left: 0.2rem;
          box-sizing: border-box;
          color: #fff;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        .total_lists {
          flex: 1;
          padding: 0 0.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .total_num {
            font-size: 0.4rem;
            font-weight: bold;
            color: #00ffe0;
          }
          .tital_icon {
            width: 0.5rem;
            height: 0.5rem;

            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            position: relative;
            &::before {
              content: "";
              width: 0.45rem;
              height: 0.45rem;
              position: absolute;
              left: -0.1rem;
              top: -0.1rem;
              background-image: url("../../assets/image/pingmei_icon-bg.png");
              background-repeat: no-repeat;
              background-size: 100%;
            }
          }
        }
      }
    }
  }
  .main {
    height: 80%;
    width: 100%;
    display: flex;
    .main_left {
      flex: 2;
      display: flex;
      flex-direction: column;
      .circle {
        flex: 2;
        display: flex;
        #myChart {
          width: 50%;
          height: 100%;
        }
        .desc {
          width: 50%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          & > li {
            width: 48%;
            display: flex;
            .square {
              width: 20%;
              & > span {
                display: inline-block;
                width: 0.15rem;
                height: 0.15rem;
                background-color: gold;
              }
            }
            .desc_text {
              width: 80%;
              display: flex;
              flex-direction: column;
              & > span:nth-child(1) {
                font-size: 0.14rem;
                margin-bottom: 0.1rem;
              }
              & > span:nth-child(2) {
                font-size: 0.24rem;
              }
            }
          }
        }
      }
      .lists {
        flex: 4;
        & > ul {
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          & > li {
            width: 48%;
            height: 18%;
            background-image: url("../../assets/image/pingmei26.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            display: flex;

            .list_left,
            .list_right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 0.2rem 0;
              box-sizing: border-box;
              & > span:nth-child(1) {
                font-size: 0.16rem;
              }
              & > span:nth-child(2) {
                font-size: 0.3rem;
                font-weight: bold;
                color: #00ffe0;
              }
            }
            .list_left {
              margin-left: 0.3rem;
            }
            .list_right {
              margin-left: 0.4rem;
            }
          }
        }
      }
    }
    .main_right {
      flex: 4;
      #myChart1 {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>