<template>
  <div class="warpper">
    <div class="tab_list">
      <ul>
        <li v-for="item in 2" :keu="item" :key="item">切叠看板</li>
      </ul>
    </div>
    <div class="content">
      <div class="content_top">
        <div class="show_left">
          <ul>
            <li v-for="item in 9" :key="item">
              <span>1号机</span>
              <span>运行中</span>
            </li>
          </ul>
        </div>
        <div class="show_right"></div>
      </div>
      <div class="content_bottom"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.warpper {
  width: 100%;
  height: 95%;
  border-top: 1px solid #104e71;
  .tab_list {
    height: 5%;
    & > ul {
      height: 100%;
      display: flex;
      align-items: center;
      & > li {
        height: 80%;
        width: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #104e71;
        margin-right: 0.1rem;
        font-size: 0.16rem;
      }
    }
  }
  .content {
    height: 95%;
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
        & > ul {
          height: 100%;
          width: 100%;
          position: relative;
          background-image: url("../../assets/image/pingmei17.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 50% 70%;
          & > li {
            display: flex;
            flex-direction: column;
            position: absolute;
            & > span:nth-child(1) {
              font-size: 0.16rem;
              margin-bottom: .1rem;
            }
            & > span:nth-child(2) {
              font-size: .26rem;
              color: #00ffe0;
              font-weight: 400;
            }
          }
          & > li:nth-child(1)::before{
            content: '';
            display: block;
            position: absolute;
            bottom: -95%;
            right: -150%;
            width: 2rem;
            height: .4rem;
            background-image: url('../../assets/image/pingmei23.png');
            background-repeat: no-repeat;
            background-size: contain;
          }
           & > li:nth-child(1){
               position: absolute;
               top: 25px;
               left: 160px;
           }
        }
      }
      .show_right {
        flex: 2;
      }
    }
  }
}
</style>