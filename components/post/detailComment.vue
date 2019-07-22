<template>
  <div class="cmt-wrapper">
    <h4 class="cmt-title">评论</h4>
    <el-input type="textarea" :rows="2" resize="none" placeholder="说点什么吧..." v-model="textarea"></el-input>

    <div class="cmt-input-ctrls el-row is-justify-space-between el-row--flex">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-button type="primary" size="mini">提交</el-button>
    </div>

    <!-- <div class="cmt-list">
      <div class="cmt-item">
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
    </div> -->

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ""
    };
  }
};
</script>

<style lang="less" scoped>
.cmt-wrapper {
  width: 700px;
  .cmt-title {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .cmt-input-ctrls {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .el-row--flex.is-justify-space-between {
    justify-content: space-between;
  }
  .el-row--flex {
    display: flex;
  }
  .el-row {
    box-sizing: border-box;
  }

  .el-button {
    height: 28px;
  }

  /deep/ .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

  .cmt-list {
    width: 100%;
    border: 1px solid #ddd;

    .cmt-item{
    border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
  }
  .main .cmt-item:last-child {
    border-bottom: none;
  }
  }
}
</style>

