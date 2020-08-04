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
      <div class="ecahrts_left"></div>
      <div class="ecahrts_right"></div>
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    & > ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      & > li {
        max-width: 19%;
        min-width: 19%;
        width: 19%;
        height: 1.2rem;
        background-image: url("../../assets/image/pingmei_bg_12_1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.22rem;
        box-sizing: border-box;
        & > span:nth-child(1) {
          font-size: 0.16rem;
        }
        & > span:nth-child(2) {
          font-size: 0.4rem;
          color: #00ffe0;
        }
      }
    }
  }
  .main {
    padding: 0.2rem;
    box-sizing: border-box;
    height: 5.2rem;
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
        right: 2rem;
        top: 0;
      }
      & > li:nth-child(4) {
        right: 0;
        top: 0;
      }
      & > li:nth-child(5) {
        left: 0;
        top: 1rem;
      }
      & > li:nth-child(6) {
        right: 0;
        top: 1rem;
      }
      & > li:nth-child(7) {
        left: 0;
        top: 2rem;
      }
      & > li:nth-child(8) {
        right: 0;
        top: 2rem;
      }
      & > li:nth-child(9) {
        left: 0;
        top: 3rem;
      }
      & > li:nth-child(10) {
        right: 0;
        top: 3rem;
      }
      & > li:nth-child(11) {
        left: 0;
        top: 4rem;
      }
      & > li:nth-child(12) {
        left: 2rem;
        top: 4rem;
      }
      & > li:nth-child(13) {
        right: 0;
        top: 4rem;
      }
      & > li:nth-child(14) {
        right: 2rem;
        top: 4rem;
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
  .footer{
    display: flex;
    justify-content: space-between;
    .ecahrts_left,.ecahrts_right{
      width: 49%;
      background-color: blue;
      height: 2.35rem;
    }
  }
}
</style>