
<template>
  <div class="travel-strategy">
    <div class="travel-strategy-left">
      <Recommend :cityList="cityData"></Recommend>
    </div>
    <div class="travel-strategy-right">
      <Search />
      <Content />
    </div>
  </div>
</template>

<script>
import Recommend from "@/components/post/recommend";
import Search from "@/components/post/search";
import Content from "@/components/post/content";
export default {
  data() {
    return {
      cityData: {}
    };
  },
  //   引入子组件
  components: {
    Recommend,
    Search,
    Content
  },
  mounted() {
    // 请求城市菜单列表
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res);
      this.cityData = res.data;
    });
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
  }
}
</style>

