<template>
  <div class="container">
    <div class="aside">
      <ul class="lists">
        <li
          class="item"
          :class="selectIndex ==item.id?'active':''"
          @click="handleSelect(item.path)"
          v-for="item in dataLists"
          :key="item.id"
        >
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="article">
      <div class="article_title">{{title}}</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 1,
      tabIndex: 0,
      title: "",
      dataLists: [
        { title: "分选", path: "/sorting", id: 1, name: "分选生产看板" },
        {
          title: "负极辊轧分切",
          path: "/slitting",
          id: 2,
          name: "负极辊轧分切看板",
        },
        { title: "负极搅拌", path: "/stir", id: 3, name: "负极搅拌看板" },
        { title: "负极涂布", path: "/coating", id: 4, name: "负极涂布看板" },
        { title: "焊接封装", path: "/package", id: 5, name: "焊接封装看板" },
        { title: "检测", path: "/test", id: 6, name: "检测工序看板" },
        { title: "切叠CCD", path: "/cutt", id: 7, name: "切叠CCD看板" },
        { title: "三车间看板", path: "/workshop", id: 8, name: "三车间看板" },
        { title: "线边仓", path: "/line", id: 9, name: "线边仓看板" },
        {
          title: "正极辊轧分切",
          path: "/negativeSlitting",
          id: 10,
          name: "正极辊轧分切看板",
        },
        {
          title: "正极搅拌",
          path: "/negativeStir",
          id: 11,
          name: "正极搅拌看板",
        },
        {
          title: "正极涂布",
          path: "/negativeCoating",
          id: 12,
          name: "正极涂布看板",
        },
        { title: "注液", path: "/injection", id: 13, name: "注液生产产能看板" },
      ],
      totalList: [
        {
          title: "工单总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon3.png"),
        },
        {
          title: "今日计划投入数",
          num: 500,
          icon: require("../../assets/image/pingmei_icon4.png"),
        },
        {
          title: "今日产出总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon5.png"),
        },
        {
          title: "员工总数",
          num: 250,
          icon: require("../../assets/image/pingmei_icon6.png"),
        },
      ],
    };
  },
  watch: {
    // 监听路由的变化
    $route: {
      handler(to) {
        for (let item of this.dataLists) {
          if (to.path.indexOf(item.path) !== -1) {
            this.selectIndex = item.id;
            this.title = item.name;
          }
        }
        console.log(this.selectIndex);
      },
      immediate: true,
    },
  },
  methods: {
    // 点击侧边栏跳转
    handleSelect(path) {
      this.$router.push(`${path}`);
    },
    // 点击每个里面的tab栏跳转
    // tabCilk(index) {
    //   this.tabIndex = index;
    // }
  },
};
</script>

<style lang="less" scoped>
@keyframes move {
  0% {
    background-position-x: 300px;
  }
  100% {
    background-position-x: 0;
  }
}
.container {
  width: 100%;
  height: 100%;
  user-select: none;
  display: flex;
  overflow: hidden;
  background-color: rgba(19, 58, 102);
  .aside {
    width: 15%;
    height: 100%;
    border-right: 3px solid #104e71;
    .lists {
      width: 100%;
      height: 100%;
      .item {
        height: 7%;
        width: 100%;
        user-select: none;
        color: #adc5d7;
        font-size: 0.2rem;
        line-height: 0.7rem;
        padding-right: 0.25rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .active {
        background: linear-gradient(
          to left,
          rgba(0, 255, 224, 0.4),
          rgba(19, 58, 102, 0.5)
        );
        background-repeat: no-repeat;
        background-position-x: 300px;
        animation: move 0.3s linear forwards;
        color: #fff;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: -2px;
          height: 100%;
          border-right: 4px solid #00ffe0;
        }
      }
    }
  }
  .article {
    width: 85%;
    height: 100%;
    padding: 0.3rem 0.36rem;
    box-sizing: border-box;
    .article_title {
      height: 5%;
      font-size: 0.28rem;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>>

