<template>
  <div style="padding:50px;">
  
    <div id="container" style="width:500px; height:500px;"></div>
    <button @click="hamgasd"> hko </button>
    
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

