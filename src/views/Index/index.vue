<template>
  <div class="container">
    <div class="header">
      <h1></h1>
    </div>
    <!-- <div class="main">
      <div class="content">
        <div class="content_top">
          <span>锂电池生产软包线</span>
          <span>X</span>
        </div>
        <div class="content_main">
          <ul class="list">
            <li class="list_item" v-for="index in 12" :key="index">
              <div class="title">设备名称</div>
              <div class="list_desc">运行中</div>
            </li>
          </ul>
        </div>
        <div class="content_down">
          <div class="pre"></div>
          <div class="total">1/9</div>
          <div class="next"></div>
        </div>
      </div>
    </div> -->
    <div class="btn" @click="handleClick()">
      <div class="btn_top"></div>
      <div class="btn_middle">看板</div>
      <div class="btn_down"></div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handleClick(){
            this.$router.push('/home')
        }
    }

};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/image/pingmei_bg_login.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  font-size: 0.16rem;
  color: #fff;
  font-weight: bold;
  .header {
    padding: 0.34rem 0.34rem 0 0.34rem;
    h1 {
      background-image: url("../../assets/image/pingmei_pic_logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      width: 3rem;
      height: 0.5rem;
    }
  }
  // .main {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   .content {
  //     display: flex;
  //     flex-direction: column;
  //     width: 10.3rem;
  //     height: 6.9rem;
  //     background-color: rgba(19, 58, 102);
  //     border-bottom: 4px solid #00ffe0;
  //     .content_top {
  //       height: 0.54rem;
  //       border-bottom: 1px solid #00ffe0;
  //       padding: 0.2rem 0.2rem 0 0.2rem;
  //       box-sizing: border-box;
  //       display: flex;
  //       justify-content: space-between;
  //     }
  //     .content_main {
  //       padding: 0.17rem 0.17rem 0 0.17rem;
  //       box-sizing: border-box;
  //       border-bottom: 1px solid #00ffe0;

  //       .list {
  //         display: flex;
  //         flex-wrap: wrap;
  //         justify-content: space-between;
  //         height: 5.7rem;
  //         .list_item {
  //           flex: 1;
  //           width: 32.5%;
  //           min-width: 32.5%; // 加入这两个后每个item的宽度就生效了
  //           max-width: 32.5%; // 加入这两个后每个item的宽度就生效了
  //           height: 1.3rem;
  //           display: flex;
  //           flex-direction: column;
  //           .title {
  //             flex: 1;
  //             background-color: #0c4a66;
  //             display: flex;
  //             align-items: center;
  //             justify-content: center;
  //           }
  //           .list_desc {
  //             flex: 3;
  //             font-size: 0.3rem;
  //             background-color: #0d3659;
  //             display: flex;
  //             align-items: center;
  //             justify-content: center;
  //             color: #00ffe0;
  //           }
  //         }
  //       }
  //     }
  //     .content_down {
  //       flex: 1;
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //       font-size: 0.16rem;
  //       .total {
  //         margin: 0 0.2rem;
  //       }
  //       .pre {
  //         width: 0.08rem;
  //         height: 0.08rem;
  //         border-left: 2px solid #fff;
  //         border-bottom: 2px solid #fff;
  //         transform: rotate(45deg);
  //         &:hover {
  //           border-color: #00ffe0;
  //         }
  //       }
  //       .next {
  //         width: 0.08rem;
  //         height: 0.08rem;
  //         border-left: 2px solid #fff;
  //         border-bottom: 2px solid #fff;
  //         transform: rotate(-135deg);
  //         &:hover {
  //           border-color: #00ffe0;
  //         }
  //       }
  //     }
  //   }
  // }
  .btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1.06rem;
    height: 1.99rem;
    background-color: rgba(19, 58, 102);
    padding: 0.16rem;
    box-sizing: border-box;
    border-bottom: 4px solid #00ffe0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn_top {
      width: 0.81rem;
      height: 0.81rem;
      background-image: url("../../assets/image/pingmei_icon1.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .btn_middle {
      margin-top: 0.05rem;
      margin-bottom: 0.2rem;
    }
    .btn_down {
      width: 0.43rem;
      height: 0.42rem;
      background-image: url("../../assets/image/pingmei_icon-btn1.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
}
</style>