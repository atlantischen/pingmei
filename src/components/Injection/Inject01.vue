<template>
  <div class="container">
    <div class="header">
      <ul>
        <li v-for="item in 22" :key="item">
          <div class="liner_left">
            <span>管道</span>
            <span>C1</span>
          </div>
          <div class="liner_middle">
            <span>温度</span>
            <span>83.34℃</span>
          </div>
          <div class="liner_right">
            <span>烘箱</span>
            <span>4#</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="desc_title">封头剩余使用次数</div>
        <div class="echarts_list">
          <div class="e1">
            <div id="myCharts1" ref="myCharts1"></div>
            <div class="ec_desc">
              <span class="item01">0#</span>
              <span class="item02">75.00%</span>
              <div class="item">
                <span class="item03">22500000</span>
                <span class="item04">30000000</span>
              </div>
            </div>
          </div>
          <div class="e2">
            <div id="myCharts2" ref="myCharts2"></div>
            <div class="ec_desc">123</div>
          </div>
          <div class="e3">
            <div id="myCharts3" ref="myCharts3"></div>
            <div class="ec_desc">123</div>
          </div>
          <div class="e4">
            <div id="myCharts4" ref="myCharts4"></div>
            <div class="ec_desc">123</div>
          </div>
        </div>
      </div>
      <div class="main_right">
        <span class="title">设备状态</span>
        <span class="desc">待机中</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    drawChart() {
      // 初始化echarts
      const myCharts = this.$echarts.init(this.$refs.myCharts1);
      let doc = document.getElementById("myCharts1");
      let listener = function () {
        myCharts.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            radius: "90%", //仪表大小
            min: 0,
            max: 100,
            detail: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            pointer: {
              // 仪表盘指针。
              show: false, // 是否显示指针,默认 true。
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 15,
                color: [
                  [0.8, "#24A7FF"],
                  [1, "#506D87"],
                ],
              },
            },
            // title: {
            //   // 仪表盘标题。
            //   show: true, // 是否显示标题,默认 true。
            //   offsetCenter: [0, "40%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
            //   color: "#FFF", // 文字的颜色,默认 #333。
            //   fontSize: 12, // 文字的字体大小,默认 15。
            //   lineHeight: 14,
            // },
            // detail: {
            //   // 仪表盘详情，用于显示数据。
            //   show: true, // 是否显示详情,默认 true。
            //   offsetCenter: [0, "0%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
            //   color: "auto", // 文字的颜色,默认 auto。
            //   fontSize: 30, // 文字的字体大小,默认 15。
            //   formatter: function (value) {
            //     return value.toFixed(2) + "%";
            //   }, // 格式化函数或者字符串
          },
        ],
      };
      myCharts.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
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
    flex: 5.5;
    padding-top: 0.1rem;
    box-sizing: border-box;
    & > ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
      position: relative;
      & > li {
        width: 24%;
        height: 15%;
        background-image: url("../../assets/image/pingmie_13.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        .liner_left {
          flex: 1;
          padding: 0.2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          & > span:nth-child(1) {
            font-size: 0.16rem;
          }
          & > span:nth-child(2) {
            font-size: 0.26rem;
            color: #6e7d92;
          }
        }
        .liner_middle {
          flex: 2;
          padding: 0.2rem;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          & > span:nth-child(1) {
            font-size: 0.16rem;
          }
          & > span:nth-child(2) {
            font-size: 0.26rem;
            color: #00ffe0;
          }
          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 60%;
            width: 1px;
            background-color: #104e71;
          }
          &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 60%;
            width: 1px;
            background-color: #104e71;
          }
        }
        .liner_right {
          flex: 1;
          padding: 0.2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          & > span:nth-child(1) {
            font-size: 0.16rem;
          }
          & > span:nth-child(2) {
            font-size: 0.26rem;
            color: #00ffe0;
          }
        }
      }
      & > li:last-child {
        position: absolute;
        top: 85%;
        left: 25.4%;
      }
    }
  }
  .main {
    flex: 2;
    margin-top: 0.1rem;
    padding: 0.3rem;
    box-sizing: border-box;
    display: flex;
    background-image: url("../../assets/image/pingmei30.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .main_left {
      flex: 3.2;
      display: flex;
      flex-direction: column;
      .desc_title {
        font-size: 0.16rem;
        font-weight: bold;
      }
      .echarts_list {
        flex: 1;
        display: flex;
        .e1,
        .e2,
        .e3,
        .e4 {
          flex: 1;
          position: relative;
          #myCharts1,
          #myCharts2,
          #myCharts3,
          #myCharts4 {
            width: 100%;
            height: 100%;
          }
          .ec_desc {
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translate(-50%);
            display: flex;
            flex-direction: column;
            .item {
              display: flex;
              flex-direction: column;
              .item03{
                color:#24A7FF ;
                margin-bottom: .5rem;
                position: relative;
              }
              .item03::before{
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: -200%;
                width: 60%;
                height: 1px;
                background-color: red;

              }
              .item03,.item04{
                font-size: .16rem;
              }
            }
            span{
              text-align: center;
            }
            .item01{
              font-size: .16rem;
            }
             .item02{
              font-size: .26rem;
              color: #24A7FF;
              margin: .1rem 0;
            }
          }
        }
      }
    }
    .main_right {
      flex: 2;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 0.16rem;
        margin-top: 0.1rem;
        margin-left: 0.5rem;
        font-weight: bold;
      }
      .desc {
        font-size: 0.4rem;
        color: #3ba3bf;
        font-weight: bold;
        margin-left: 0.5rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>