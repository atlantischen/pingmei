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
    <div class="main"></div>
  </div>
</template>

<script>
export default {};
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
    border: 1px solid #104e71;
  }
}
</style>