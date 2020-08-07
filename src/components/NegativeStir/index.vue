<template>
  <div class="container">
    <div class="header">
      <ul>
        <li v-for="item in 2" :key="item">
          <div class="list_top">
            <div class="list_top_left">
              <span>负极搅拌罐01#</span>
              <span>当前运行时长(h)</span>
            </div>
            <div class="list_top_right">运行中</div>
          </div>
          <div class="list_bottom">12.2</div>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="main_top">
        <div class="echarts_1">
          <div id="myCharts1" ref="myCharts1"></div>
        </div>
        <div class="echarts_2">
          <div id="myCharts2" ref="myCharts2"></div>
        </div>
      </div>
      <div class="main_bottom">
        <ul>
          <li class="item" v-for="item in 12" :key="item">
            <span>传动侧辊缝显示值01#</span>
            <span>30</span>
          </li>
        </ul>
        <div class="bg_img"></div>
      </div>
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
      let listener = function () {
        myCharts1.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "负极搅拌罐01#", //标题
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
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
              interval: 6, //代表显示所有x轴标签显示
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
            data: [
              8200,
              9302,
              9001,
              9304,
              1290,
              1330,
              1320,
              8200,
              9302,
              901,
              9034,
              1290,
              1330,
              1320,
              8200,
              9302,
              9001,
              9304,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              12000,
            ],
            type: "line",
            smooth: true,
            symbol: "none",
            color: "red",
          },
          {
            data: [500, 932, 901, 904, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
          {
            data: [300, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };

      myCharts1.setOption(option);
    },
    drawEcharts2() {
      // 初始化ecahrts
      const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
      let doc = document.getElementById("myCharts2");
      let listener = function () {
        myCharts2.resize();
      };
      this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
      let option = {
        title: {
          text: "负极搅拌罐02#", //标题
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
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
              interval: 6, //代表显示所有x轴标签显示
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
            data: [
              8200,
              9302,
              9001,
              9304,
              1290,
              1330,
              1320,
              8200,
              9302,
              901,
              9034,
              1290,
              1330,
              1320,
              8200,
              9302,
              9001,
              9304,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              12000,
            ],
            type: "line",
            smooth: true,
            symbol: "none",
            color: "red",
          },
          {
            data: [500, 932, 901, 904, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
          {
            data: [300, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };

      myCharts2.setOption(option);
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
    height: 14%;
    width: 100%;
    & > ul {
      display: flex;
      height: 100%;

      justify-content: space-between;
      & > li {
        width: 49%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-image: url("../../assets/image/pingmei14.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center bottom;
        padding: 0.2rem;
        box-sizing: border-box;
        .list_top {
          display: flex;
          justify-content: space-between;
          font-size: 0.14rem;
          .list_top_right {
            background-image: url("../../assets/image/icon.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left;
            padding-left: 0.2rem;
          }
        }
        .list_bottom {
          font-size: 0.4rem;
          color: #00ffe0;
        }
      }
    }
  }
  .main {
    height: 86%;
    width: 100%;

    .main_top {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;
      box-sizing: border-box;
      .echarts_1,
      .echarts_2 {
        width: 49%;
        max-width: 49%;
        min-width: 49%;
        height: 100%;
      }
      #myCharts1,#myCharts2 {
        width: 100%;
        height: 100%;
      }
    }
    .main_bottom {
      height: 50%;
      width: 100%;

      position: relative;
      & > ul {
        width: 100%;
        height: 100%;
        position: relative;
        & > li {
          width: 2.2rem;
          height: 22%;
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
          }
        }
        & > li:nth-child(2) {
          left: 2.4rem;
          top: 0;
        }
        & > li:nth-child(3) {
          left: 0;
          top: 30%;
        }
        & > li:nth-child(4) {
          left: 2.4rem;
          top:30%;
        }
        & > li:nth-child(5) {
          left: 0;
          top: 60%;
        }
        & > li:nth-child(6) {
          left: 2.4rem;
          top: 60%;
        }
        & > li:nth-child(7) {
          right: 0;
          top: 0;
        }
        & > li:nth-child(8) {
          right: 2.4rem;
          top: 0;
        }
        & > li:nth-child(9) {
          right: 0;
          top: 30%;
        }
        & > li:nth-child(10) {
          right: 2.4rem;
          top: 30%;
        }
        & > li:nth-child(11) {
          right: 0;
          top: 60%;
        }
        & > li:nth-child(12) {
          right: 2.4rem;
          top: 60%;
        }
      }
      .bg_img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 6rem;
        height: 2.5rem;
        background-image: url("../../assets/image/pingmie15.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
    }
  }
}
</style>