<template>
  <div class="travel-strategy">
    <div class="travel-strategy-left">
      <Recommend />
    </div>
    <div class="travel-strategy-right"></div>
  </div>
</template>

<script>
import Recommend from "@/components/post/recommend";
export default {
  data() {
    return {};
  },
  //   引入子组件
  components: {
    Recommend
  }
};
</script>

<style scoped lang='less'>
.travel-strategy {
  display: flex;
  width: 1000px;
  min-width: 1000px;
  margin: 20px auto;
  .travel-strategy-left {
    width: 260px;
    margin-right: 40px;
  }
  .travel-strategy-right {
    width: 700px;
    height: 400px;
    background-color: blue;
  }
}
</style>
