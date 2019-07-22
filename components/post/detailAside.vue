<template>
  <div class="aside">
    <h4 class="aside-title">相关攻略</h4>

    <nuxt-link to="#">
      <el-row :gutter="20">
        <el-col :span="9">
          <div class="tupian grid-content">
            <img src />
          </div>
        </el-col>
        <el-col :span="15">
          <div class="pinglun grid-content bg-purple">123</div>
          <p>2019-07-21 7:40 阅读(2)</p>
        </el-col>
      </el-row>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aside {
  width: 280px;
  .aside-title {
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .tupian {
    width: 100px;
    height: 80px;
    background-color: pink;
  }

  a{
      display: block;
      border-bottom: 1px solid #ccc;
  }

  .grid-content{
      margin: 20px 0;
  }

  .pinglun{
      margin-bottom: 40px;
  }
  p{
      font-size: 12px;
      color:#999;
  }
}
</style>

