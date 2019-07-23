<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- 攻略详情 -->
          <DetailPage />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <!-- 右侧 相关攻略 -->
          <DetailAside />
        </div>
      </el-col>
    </el-row>

    <!-- 底部 评论部分 -->
    <DetailComment />
  </div>
</template>

<script>
import DetailPage from "@/components/post/detailPage";
import DetailAside from "@/components/post/detailAside";
import DetailComment from "@/components/post/detailComment";
export default {
  components: {
    DetailPage,
    DetailAside,
    DetailComment
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}

</style>
