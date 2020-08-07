<template>
  <div class="container">
    <div class="header">
      <ul>
        <li v-for="item in 3" :key="item">
          <span>本日注液生产产量</span>
          <span>6169</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <div id="myCharts" ref="myCharts"></div>
    </div>
    <div class="footer">
      <ul class="total">
        <li class="total_list" v-for="item in totalList" :key="item.title">
          <div class="total_list_title">
            <span>{{item.title}}</span>
          </div>
          <div class="total_lists">
            <span class="total_num">{{item.num}}</span>
            <div class="tital_icon" :style="{backgroundImage:'url(' + item.icon+ ')'}"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Capacity",
  data() {
    return {
      totalList: [
        {
          title: "工单总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon3.png"),
        },
        {
          title: "今日计划投入数",
          num: 500,
          icon: require("../../assets/image/pingmei_icon4.png"),
        },
        {
          title: "今日产出总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon5.png"),
        },
      ],
    };
  },
  methods: {
    drawEcharts() {
      // 初始化ecahrts
      const myCharts = this.$echarts.init(this.$refs.myCharts);
      let doc = document.getElementById("myCharts");
      let listener = function () {
        myCharts.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "15日内注液产量", //标题
          textStyle: {
            color: "#fff",
          },
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
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
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
              "2020-07-15",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
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
              // formatter: function(value) {
              //   return value.length > 4 ? value.slice(0, 4) + "..." : value;
              // }
            },
          },
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
              1800,
            ],
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
.container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  .header {
    flex: 1;
    & > ul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > li {
        background-image: url("../../assets/image/pingmei28.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 32%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.2rem;
        box-sizing: border-box;
        & > span:nth-child(1) {
          font-size: 0.16rem;
        }
        & > span:nth-child(2) {
          font-size: 0.3rem;
          color: #00ffe0;
          font-weight: bold;
        }
      }
    }
  }
  .main {
    flex: 4;
    #myCharts {
      width: 100%;
      height: 100%;
    }
  }
  .footer {
    flex: 1;
    // padding-top: 0.3rem;
    // box-sizing: border-box;
    position: relative;
    border-top: 1px solid #104e71;
    .total {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .total_list {
        flex: 1;
        width: 32%;
        min-width: 32%;
        max-width: 32%;
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
            //  background-image: url("../../assets/image/pingmei_icon3.png");
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
}
</style>