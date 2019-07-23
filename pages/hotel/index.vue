<template>
  <div @click="hamgasd">
    <img src="../../static/images/Snipaste_2019-07-23_14-57-33.png" alt />
    <img  src="../../static/images/Snipaste_2019-07-23_14-57-52.png" alt />
    <img src="../../static/images/Snipaste_2019-07-23_14-58-28.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    hamgasd() {
      this.$router.push({
        path: "/hotel/" + 1
      });
    }
  }
};
</script>

 <style lang="less" scoped>
div {
  width: 1000px;
  margin: 0 auto;
  img{
    width: 100%;
  }
}
</style>

