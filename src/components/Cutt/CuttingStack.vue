<template>
  <div class="box">
    <div class="content">
      <div class="content_top">
        <div class="show_left">
          <ul>
            <li v-for="item in 9" :key="item">
              <span>{{item}}号机</span>
              <span>运行中</span>
            </li>
          </ul>
        </div>
        <div class="show_right">
          <ul>
            <li v-for="item in 2" :key="item">
              <span>当前班次产量</span>
              <span>1908</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_bottom">
        <table height="100%" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <th>设备</th>
            <th>叠片产量</th>
            <th>已叠片产量</th>
            <th>单片计时</th>
            <th>电芯计时</th>
            <th>模具总次数</th>
            <th>模具使用次数</th>
            <th>切刀总次数</th>
            <th>切刀使用次数</th>
            <th>模切切刀清理频率</th>
            <th>产量</th>
          </tr>
          <tr v-for="item in 9" :key="item">
            <td>1号机</td>
            <td>13501</td>
            <td>12544</td>
            <td>00:00:14</td>
            <td>00:00:15</td>
            <td>1254</td>
            <td>1244</td>
            <td>1124</td>
            <td>1111</td>
            <td>1125</td>
            <td>132457</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    .content_top,
    .content_bottom {
      height: 50%;
    }
    .content_top {
      display: flex;
      .show_left {
        flex: 3;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        & > ul {
          height: 3.3rem;
          width: 5.4rem;
          position: relative;
          background-image: url("../../assets/image/pingmei17.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          & > li {
            display: flex;
            flex-direction: column;
            position: absolute;
            & > span:nth-child(1) {
              font-size: 0.16rem;
              margin-bottom: 0.1rem;
            }
            & > span:nth-child(2) {
              font-size: 0.22rem;
              color: #00ffe0;
              font-weight: 400;
            }
          }
          //   一号机
          & > li::before {
            content: "";
            display: block;
            position: absolute;
            bottom: -90%;
            right: -200%;
            width: 2rem;
            height: 0.4rem;
            background-image: url("../../assets/image/pingmei23.png");
            background-repeat: no-repeat;
            background-size: contain;
          }
          & > li:nth-child(1) {
            position: absolute;
            top: -0.3rem;
            left: -0.88rem;
          }
          //    二号机
          & > li:nth-child(2)::before {
            background-image: url("../../assets/image/pingmei22.png");
          }
          & > li:nth-child(2) {
            position: absolute;
            top: 0.4rem;
            left: -1.7rem;
          }
          //   三号机
          & > li:nth-child(3)::before {
            bottom: -60%;
            background-image: url("../../assets/image/pingmei19.png");
          }
          & > li:nth-child(3) {
            position: absolute;
            top: 1.8rem;
            left: -1.7rem;
          }
          //   四号机
          & > li:nth-child(4)::before {
            bottom: -60%;
            background-image: url("../../assets/image/pingmei19.png");
          }
          & > li:nth-child(4) {
            position: absolute;
            bottom: 0.13rem;
            left: -0.2rem;
          }
          //   五号机
          & > li:nth-child(5)::before {
            left: -200%;
            bottom: -60%;
            background-image: url("../../assets/image/pingmei21.png");
          }
          & > li:nth-child(5) {
            position: absolute;
            bottom: 0.13rem;
            right: -0.2rem;
            & > span {
              text-align: right;
            }
          }
          //  六号机
          & > li:nth-child(6)::before {
            left: -200%;
            bottom: -60%;
            background-image: url("../../assets/image/pingmei21.png");
          }
          & > li:nth-child(6) {
            position: absolute;
            top: 1.8rem;
            right: -1.68rem;
            & > span {
              text-align: right;
            }
          }

          //  七号机
          & > li:nth-child(7)::before {
            left: -200%;
            bottom: -90%;
            background-image: url("../../assets/image/pingmei24.png");
          }
          & > li:nth-child(7) {
            position: absolute;
            top: 0.4rem;
            right: -1.7rem;
            & > span {
              text-align: right;
            }
          }
          //  八号机
          & > li:nth-child(8)::before {
            left: -200%;
            bottom: -90%;
            background-image: url("../../assets/image/pingmei24.png");
          }
          & > li:nth-child(8) {
            position: absolute;
            top: -0.3rem;
            right: -0.88rem;
            & > span {
              text-align: right;
            }
          }
          //  九号机
          & > li:nth-child(9)::before {
            left: -200%;
            bottom: -90%;
            background-image: url("../../assets/image/pingmei24.png");
          }
          & > li:nth-child(9) {
            position: absolute;
            top: -0.65rem;
            right: 0.8rem;
            & > span {
              text-align: right;
            }
          }
        }
      }
      .show_right {
        flex: 2;
        & > ul {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          & > li {
            height: 25%;
            width: 60%;
            margin-bottom: 0.3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.2rem 0.2rem 0.2rem;
            box-sizing: border-box;
            background-image: url("../../assets/image/pingmei_bg_12_1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
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
    }
    .content_bottom {
      padding: 0.3rem 0.3rem 0;
      box-sizing: border-box;
  
      table {
          font-size: .18rem;
              border-bottom: 1px solid #00ffe0;
          th{
              background-color: #0D4B69;
              color: #9EB7C2;
          }
            &>tr:nth-child(odd){
              background-color: #0D3559;

          }
          &>tr:nth-child(even){
              background-color: #10415F;

          }
      }
    }
  }
}
</style>