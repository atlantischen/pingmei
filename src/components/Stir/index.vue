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
  methods: {},
  mounted() {
    // 初始化ecahrts
    const myCharts1 = this.$echarts.init(this.$refs.myCharts1);
    let doc = document.getElementById("myCharts1");
    let listener = function() {
      myCharts1.resize();
    };
    this.$EleResize.on(doc, listener); //调用EleResize.on方法处理echarts响应式
    let option = {
      grid: {
        x: 20,
        y: 20,
        x2: 20,
        y2: 20
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
        },
        {
          data: [500, 932, 901, 904, 1290, 1330, 1320],
          type: "line",
          smooth: true
        },
        {
          data: [300, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
        }
      ]
    };

    myCharts1.setOption(option);
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  .header {
    & > ul {
      display: flex;
      justify-content: space-between;
      & > li {
        width: 49%;
        height: 1.115rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-image: url("../../assets/image/pingmei14.png");
        background-repeat: no-repeat;
        background-size: 100%;
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
    .main_top {
      display: flex;
      justify-content: space-between;
      margin: 0.2rem 0 0.4rem 0;
      .echarts_1,
      .echarts_2 {
        width: 49%;
        max-width: 49%;
        min-width: 49%;
        height: 3rem;
        // background-color: blue;
      }
      #myCharts1 {
        width: 100%;
        height: 100%;
      }
    }
    .main_bottom {
      height: 2.9rem;
    
      position: relative;
      & > ul {
        width: 100%;
        height: 100%;
        position: relative;
        & > li {
          width: 1.9rem;
          height: 0.8rem;
          position: absolute;
          background-image: url("../../assets/image/pingmie_13.png");
          background-repeat: no-repeat;
          background-size: 100%;
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
          left: 2rem;
          top: 0;
        }
        & > li:nth-child(3) {
          left: 0;
          top: 1rem;
        }
        & > li:nth-child(4) {
          left: 2rem;
          top: 1rem;
        }
        & > li:nth-child(5) {
          left: 0;
          top: 2rem;
        }
        & > li:nth-child(6) {
          left: 2rem;
          top: 2rem;
        }
        & > li:nth-child(7) {
          right: 0;
          top: 0;
        }
        & > li:nth-child(8) {
          right: 2rem;
          top: 0;
        }
        & > li:nth-child(9) {
          right: 0;
          top: 1rem;
        }
        & > li:nth-child(10) {
          right: 2rem;
          top: 1rem;
        }
        & > li:nth-child(11) {
          right: 0;
          top: 2rem;
        }
        & > li:nth-child(12) {
          right: 2rem;
          top: 2rem;
        }
      }
      .bg_img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 7rem;
        height: 2.7rem;
        background-image: url("../../assets/image/pingmie15.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        
      }
    }
  }
}
</style>