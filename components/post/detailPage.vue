<template>
  <div class="main">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 攻略详情数据 -->
    <h1>{{$store.state.post.detailData[0].title}}</h1>
    <div class="post-info">
      <span>攻略：2019-05-22 12:59</span>
      <span>阅读：504</span>
    </div>
    <div v-html="$store.state.post.detailData[0].content"></div>

    <div class="post-ctrl">
      <div class="el-row is-justify-center el-row--flex">
        <div class="ctrl-item">
          <i class="iconfont iconpinglun"></i>
          <p>评论(100)</p>
        </div>
        <div class="ctrl-item">
          <i class="iconfont iconstar1"></i>
          <p>收藏</p>
        </div>
        <div class="ctrl-item">
          <i class="iconfont iconfenxiang"></i>
          <p>分享</p>
        </div>
        <div class="ctrl-item">
          <i class="iconfont iconding"></i>
          <p>点赞(29)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  width: 700px;
  /deep/ img {
    width: 100%;
  }

  h1 {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .post-info {
    color: #999;
    padding: 20px;
    text-align: right;
  }

  .post-ctrl {
    padding: 50px 0 30px;
    .el-row--flex.is-justify-center {
      justify-content: center;
    }
    .el-row--flex {
      display: flex;
    }
    .el-row {
      box-sizing: border-box;
    }

    .ctrl-item {
      margin: 0 20px;
      font-size: 20px;
      text-align: center;
      cursor: pointer;

      .iconpinglun:before {
        content: "\e61c";
      }
    }

    .ctrl-item i {
      display: block;
      font-size: 28px;
      color: orange;
    }

    p {
      color: #999;
      font-size: 14px;
    }
  }
}

</style>
