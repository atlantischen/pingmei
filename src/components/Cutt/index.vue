<template>
  <div class="warpper">
    <div class="tab_list">
      <ul>
        <li
          v-for="item in tabList"
          :key="item.id"
          :class="selectIndex === item.id?'active':''"
          @click="tabChange(item.path)"
        >{{item.title}}</li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 1,
      tabList:[
          { title: "切叠看板", path: "/cutt/cuttingstack", id: 1 },
          { title: "不良统计看板", path: "/cutt/statistics", id: 2 },
      ]
    };
  },
  methods: {
    tabChange(path) {
      console.log(this.selectIndex);
      this.$router.push(`${path}`);

    }
  },
  watch: {
    // 监听路由的变化
    $route: {
      handler(to) {
        for (let item of this.tabList) {
          if (item.path === to.path) this.selectIndex = item.id;
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
      .active {
        border: 1px solid #00ffe0;
      }
    }
  }
  .content {
    height: 95%;
   
   
  }
}
</style>