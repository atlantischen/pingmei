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
    <div class="main"></div>
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
export default {};
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
        padding: 0.2rem 0.2rem 0.4rem;
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
    background-color: green;
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
      background-image: url('../../assets/image/pingmei16.png');
      background-repeat: no-repeat;
      background-position:center;
      background-size: 100% 100%;
    }
  }
}
</style>