<template>
  <div class="warpper">
    <div class="header">
      <ul class="total">
        <li class="total_list" v-for="item in totalList" :key="item.title">
          <div class="total_list_title"><span>{{item.title}}</span></div>
          <div class="total_lists">
            <span class="total_num">{{item.num}}</span>
            <div class="tital_icon" :style="{backgroundImage:'url(' + item.icon+ ')'}"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="main">
      <ul class="tab_lists">
        <li
          class="tab_list"
          :class="tabIndex === item.id?'actived' :''"
          v-for="item in tabList"
          :key="item.id"
          @click="tabCilk(item.id,item.path)"
        >{{item.title}}</li>
      </ul>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <ul class="statistics">
        <li class="statistics_list" v-for="item in 3" :key="item">
          <div class="statistics_title">
            <span>物料统计</span>
            <span>统计所有物料种类</span>
          </div>
          <div class="statistics_num">354</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 1,
      totalList: [
        {
          title: "工单总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon3.png")
        },
        {
          title: "今日计划投入数",
          num: 500,
          icon: require("../../assets/image/pingmei_icon4.png")
        },
        {
          title: "今日产出总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon5.png")
        },
        {
          title: "员工总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon6.png")
        }
      ],
      tabList: [
        { title: "企业文化", path: "/test/culture", id: 1 },
        { title: "化成统计信息", path: "/test/volume", id: 2 },
        { title: "分容统计信息", path: "/test/turn", id: 3 },
        { title: "二次分容统计信息", path: "/test/dbturn", id: 4 },
        { title: "核电统计信息", path: "/test/power", id: 5 }
      ]
    };
  },
  methods: {
    tabCilk(id, path) {
      this.$router.push(`${path}`);
    }
  },
  watch: {
    // 监听路由的变化
    $route: {
      handler(to) {
        for (let item of this.tabList) {
          if (item.path === to.path) this.tabIndex = item.id;
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.warpper {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    width: 100%;
    height: 15%;
    .total {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .total_list {
        flex: 1;
        width: 24%;
        min-width: 24%;
        max-width: 24%;
        background-color: #0f375c;
        height: 100%;
        display: flex;
        flex-direction: column;
        .total_list_title {
          height: 30%;
          width: 100%;
          background-color: #0c4a66;
          font-size: 0.16rem;
          line-height: 0.35rem;
          padding-left: 0.2rem;
          box-sizing: border-box;
          color: #fff;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        .total_lists {
          flex: 1;
          padding: 0 0.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .total_num {
            font-size: 0.4rem;
            font-weight: bold;
            color: #00ffe0;
          }
          .tital_icon {
            width: 0.5rem;
            height: 0.5rem;

            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            position: relative;
            &::before {
              content: "";
              width: 0.45rem;
              height: 0.45rem;
              position: absolute;
              left: -0.1rem;
              top: -0.1rem;
              background-image: url("../../assets/image/pingmei_icon-bg.png");
              background-repeat: no-repeat;
              background-size: 100%;
            }
          }
        }
      }
    }
  }
  .main {
    width: 100%;
    height: 66%;
    border-top: 1px solid #104e71;
    border-bottom: 1px solid #104e71;
    .tab_lists {
      height: 10%;
      border-top: 1px solid #104e71;
      padding-top: 0.1rem;
      box-sizing: border-box;
      display: flex;
      .tab_list {
        width: 1.4rem;
        height: 0.36rem;
        text-align: center;
        line-height: 0.36rem;
        font-size: 0.16rem;
        background-color: #175784;
        margin-right: 0.1rem;
        border: 1px solid #2282bd;
        &.actived {
          border-color: #00ffe0;
        }
      }
    }
    .content {
      height: 90%;
      padding: .3rem 0;
      box-sizing: border-box;
   
    }
  }
  .footer {
    width: 100%;
    height: 15%;
    .statistics {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .statistics_list {
        background-color: #0f375c;
        flex: 1;
        width: 32%;
        max-width: 32%;
        min-width: 32%;
        height: 100%;
        padding: 0.15rem 0.15rem 0.3rem 0.15rem;
        box-sizing: border-box;
        background-image: url("../../assets/image/pingmei_bg_12_1.png");
        background-repeat: no-repeat;
        background-position: center bottom;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .statistics_title {
          & > span:nth-child(1) {
            font-size: 0.16rem;
            margin-right: 0.2rem;
          }
        }
        .statistics_num {
          font-size: 0.4rem;
          font-weight: bold;
          color: #00ffe0;
        }
      }
    }
  }
}
</style>