<template>
  <div class="container">
    <ul class="list">
      <li v-for="item in 9" :key="item"></li>
    </ul>
    <div class="paging"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .list{
    flex: 6;
    padding-bottom: .2rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    &>li{
     width: 15%;
     height: 49%;
     margin-right: .1rem;
     margin-bottom: .1rem;
     background-color: #ff6700; 
    }
  }
  .paging{
    flex: 1;
    background-color: blue;
  }
}
</style>