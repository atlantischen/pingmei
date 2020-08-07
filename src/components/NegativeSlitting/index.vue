<template>
  <div class="container">
    <div class="header">
      <ul>
        <li v-for="item in 5" :key="item">
          <span>负极辊轧分切机01#</span>
          <span>正常生产</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <ul>
        <li v-for="item in 14" :key="item">
          <span>传动侧辊缝显示值01#</span>
          <span>30</span>
        </li>
      </ul>
      <div class="middle_bg"></div>
    </div>
    <div class="footer">
      <div class="ecahrts_left">
        <div class="title">传动侧辊缝显示值(um)</div>
        <div class="dashboard">
          <div class="dashboard_left">
            <div class="item_left">
              <div id="myCharts1" ref="myCharts1"></div>
            </div>
            <div class="item_right">
              <span>233663.39</span>
              <span>300000.39</span>
            </div>
          </div>
          <div class="dashboard_right">
            <div class="item_left">
              <div id="myCharts2" ref="myCharts2"></div>
            </div>
            <div class="item_right">
              <span>233663.39</span>
              <span>300000.39</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ecahrts_right">
         <div class="title">传动侧辊缝显示值(um)</div>
        <div class="dashboard">
          <div class="dashboard_left">
            <div class="item_left">
              <div id="myCharts3" ref="myCharts3"></div>
            </div>
            <div class="item_right">
              <span>233663.39</span>
              <span>300000.39</span>
            </div>
          </div>
          <div class="dashboard_right">
            <div class="item_left">
              <div id="myCharts4" ref="myCharts4"></div>
            </div>
            <div class="item_right">
              <span>233663.39</span>
              <span>300000.39</span>
            </div>
          </div>
        </div>
      </div>
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
    drawChart1() {
      var data1 = [
        {
          name: "负级辊轧分切机01# \n 上切刀",
          value: 80,
        },
      ];

      // 初始化echarts
      const myCharts1 = this.$echarts.init(this.$refs.myCharts1);
      let doc = document.getElementById("myCharts1");
      let listener = function () {
        myCharts1.resize();
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
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "40%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#FFF", // 文字的颜色,默认 #333。
              fontSize: 12, // 文字的字体大小,默认 15。
              lineHeight: 14,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [0, "0%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "auto", // 文字的颜色,默认 auto。
              fontSize: 30, // 文字的字体大小,默认 15。
              formatter: function (value) {
                return value.toFixed(2) + "%";
              }, // 格式化函数或者字符串
            },

            data: data1,
          },
        ],
      };
      myCharts1.setOption(option);
    },
    drawChart2() {
      var data1 = [
        {
          name: "负级辊轧分切机01# \n 上切刀",
          value: 80,
        },
      ];

      // 初始化echarts
      const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
      let doc = document.getElementById("myCharts2");
      let listener = function () {
        myCharts2.resize();
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
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "40%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#FFF", // 文字的颜色,默认 #333。
              fontSize: 12, // 文字的字体大小,默认 15。
              lineHeight: 14,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [0, "0%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "auto", // 文字的颜色,默认 auto。
              fontSize: 30, // 文字的字体大小,默认 15。
              formatter: function (value) {
                return value.toFixed(2) + "%";
              }, // 格式化函数或者字符串
            },

            data: data1,
          },
        ],
      };
      myCharts2.setOption(option);
    },
    drawChart3() {
      var data1 = [
        {
          name: "负级辊轧分切机01# \n 上切刀",
          value: 80,
        },
      ];

      // 初始化echarts
      const myCharts3 = this.$echarts.init(this.$refs.myCharts3);
      let doc = document.getElementById("myCharts3");
      let listener = function () {
        myCharts3.resize();
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
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "40%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#FFF", // 文字的颜色,默认 #333。
              fontSize: 12, // 文字的字体大小,默认 15。
              lineHeight: 14,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [0, "0%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "auto", // 文字的颜色,默认 auto。
              fontSize: 30, // 文字的字体大小,默认 15。
              formatter: function (value) {
                return value.toFixed(2) + "%";
              }, // 格式化函数或者字符串
            },

            data: data1,
          },
        ],
      };
      myCharts3.setOption(option);
    },
    drawChart4() {
      var data1 = [
        {
          name: "负级辊轧分切机01# \n 上切刀",
          value: 80,
        },
      ];

      // 初始化echarts
      const myCharts4 = this.$echarts.init(this.$refs.myCharts4);
      let doc = document.getElementById("myCharts4");
      let listener = function () {
        myCharts4.resize();
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
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "40%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#FFF", // 文字的颜色,默认 #333。
              fontSize: 12, // 文字的字体大小,默认 15。
              lineHeight: 14,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [0, "0%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "auto", // 文字的颜色,默认 auto。
              fontSize: 30, // 文字的字体大小,默认 15。
              formatter: function (value) {
                return value.toFixed(2) + "%";
              }, // 格式化函数或者字符串
            },

            data: data1,
          },
        ],
      };
      myCharts4.setOption(option);
    },
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
    this.drawChart3();
    this.drawChart4();
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 95%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 12%;
    & > ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      & > li {
        max-width: 19%;
        min-width: 19%;
        width: 19%;
        height: 100%;
        background-image: url("../../assets/image/pingmei_bg_12_1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
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
    height: 60%;
    padding: 0.2rem;
    box-sizing: border-box;
    position: relative;
    & > ul {
      width: 100%;
      height: 100%;
      position: relative;
      & > li {
        width: 2rem;
        height: 16%;
        position: absolute;
        background-image: url("../../assets/image/pingmie_13.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.2rem 0.1rem 0.15rem 0.1rem;
        box-sizing: border-box;
        & > span:nth-child(1) {
          font-size: 0.16rem;
        }
        & > span:nth-child(2) {
          font-size: 0.22rem;
          color: #00ffe0;
          font-weight: bold;
        }
      }
      & > li:nth-child(2) {
        left: 2.1rem;
        top: 0;
      }
      & > li:nth-child(3) {
        right: 2.1rem;
        top: 0;
      }
      & > li:nth-child(4) {
        right: 0;
        top: 0;
      }
      & > li:nth-child(5) {
        left: 0;
        top: 20%;
      }
      & > li:nth-child(6) {
        right: 0;
        top: 20%;
      }
      & > li:nth-child(7) {
        left: 0;
        top: 40%;
      }
      & > li:nth-child(8) {
        right: 0;
        top: 40%;
      }
      & > li:nth-child(9) {
        left: 0;
        top: 60%;
      }
      & > li:nth-child(10) {
        right: 0;
        top: 60%;
      }
      & > li:nth-child(11) {
        left: 0;
        top: 80%;
      }
      & > li:nth-child(12) {
        left: 2.1rem;
        top: 80%;
      }
      & > li:nth-child(13) {
        right: 0;
        top: 80%;
      }
      & > li:nth-child(14) {
        right: 2.1rem;
        top: 80%;
      }
    }
    .middle_bg {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 11rem;
      height: 3rem;
      transform: translate(-50%, -50%);
      background-image: url("../../assets/image/pingmei_14.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
  .footer {
    height: 28%;
    display: flex;
    justify-content: space-between;
    .ecahrts_left,
    .ecahrts_right {
      width: 49%;
      height: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      border: 1px solid #104e71;
      background-color: #0d3559;
      .title {
        font-size: 0.16rem;
      }
      .dashboard {
        height: 100%;
        flex: 1;
        display: flex;
        .dashboard_left,
        .dashboard_right {
          height: 100%;
          flex: 1;
          display: flex;
          .item_left {
            flex: 3;
            #myCharts1,
            #myCharts2,#myCharts3 ,#myCharts4  {
              width: 100%;
              height: 100%;
            }
          }
          .item_right {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 0.4rem 0;
            box-sizing: border-box;
            position: relative;
            & > span {
              font-size: 0.26rem;
            }
          }
          .item_right::before {
            content: "";
            display: block;
            position: absolute;
            width: 30%;
            height: 1px;
            background-color: #24a7ff;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) rotate(-35deg);
          }
        }
      }
    }
  }
}
</style>