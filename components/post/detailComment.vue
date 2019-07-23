<template>
  <!-- 评论部分 -->
  <div class="cmt-wrapper">
    <h4 class="cmt-title">评论</h4>
    <!-- input输入框 -->
    <el-input type="textarea" :rows="2" resize="none" placeholder="说点什么吧..." v-model="textarea"></el-input>

    <!-- 上传图片 -->
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

    <!-- 评论列表渲染 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentList" :key="index">
        <div class="shuju">
          <img class="touxiang" :src="$axios.defaults.baseURL+item.account.defaultAvatar" />
          <span class="nick-name">{{item.account.nickname}}</span>
          <span class="riqi">{{item.created_at}}</span>
        </div>
        <div class="comments">{{item.content}}</div>
        <div>
          <el-dialog :visible.sync="dialogVisible">
            <img class="demoImg" width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <el-row class="commentUrl el-row--flex">
          <div class="ing-div" v-for="(item2,index2) in item.pics" :key="index2">
            <img
              :src="$axios.defaults.baseURL+item2.url"
              @click="TestClick($axios.defaults.baseURL+item2.url)"
            />
          </div>
        </el-row>
      </div>
    </div>

    <!-- 分页 -->
    <!-- size-change：切换条数时候触发 -->
    <!-- current-change: 切换页数时候触发 -->
    <!-- page-size: 默认一页多少条数据 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: [], // 评论数据
      textarea: "", // input输入框
      pageIndex: 1, // 当前页数
      pageSize: 2, // 当前页面的条数
      total: 0, // 总条数
      dialogImageUrl: "", // 显示上传图片的大图
      dialogVisible: false
    };
  },
  methods: {
    commentPage() {
      //获取评论列表数据
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.$route.query.id, // 页面带过来的文章ID
          _limit: this.pageSize, //选择的页面评论条数
          _start: this.pageIndex //选择的页
          // _start: 0 //选择的页
        }
      }).then(res => {
        const { data } = res.data;
        this.commentList = data;
        this.total = res.data.total;
        // console.log(res);
        //遍历结果集数组
        this.commentList.forEach((value, index) => {
          // 根据毫秒数构建 Date 对象
          var date = new Date(value.created_at);
          // 格式化日期
          var dateTime = date.toLocaleString();
          //赋值
          value.created_at = dateTime;
        });
      });
    },

    // 切换条数时候触发
    handleSizeChange(value) {
      this.pageSize = value;
      this.commentPage();
    },

    // 切换页数时候触发
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.commentPage();
    },

    //移除图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //点击图片看大图
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    //点击评论里的图片的大图效果
    TestClick(url) {
      console.log(url);
      this.dialogImageUrl = url;
      this.dialogVisible = true;
    }
  },
  mounted() {
    //请求评论数据
    this.commentPage();
  }
};

// 重写方法，自定义格式化日期
Date.prototype.toLocaleString = function() {
  // 补0   例如 2018/7/10 14:7:2  补完后为 2018/07/10 14:07:02
  function addZero(num) {
    if (num < 10) return "0" + num;
    return num;
  }
  // 按自定义拼接格式返回
  return (
    this.getFullYear() +
    "/" +
    addZero(this.getMonth() + 1) +
    "/" +
    addZero(this.getDate()) +
    " " +
    addZero(this.getHours()) +
    ":" +
    addZero(this.getMinutes()) +
    ":" +
    addZero(this.getSeconds())
  );
};
</script>

<style lang="less" scoped>
.demoImg {
  width: 100%;
  height: 100%;
}

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
    .cmt-item {
      border-bottom: 1px dashed #ddd;
      padding: 20px 20px 5px;
    }
    .cmt-item:last-child {
      border-bottom: none;
    }
  }

  .el-pagination {
    margin: 10px;
  }

  .commentUrl {
    margin-left: 30px;

    .ing-div{
      width: 80px;
      height: 80px;
      border: 1px dashed #ccc;
      border-radius: 5px;
      padding: 5px;
      margin: 0 2px 20px;

      img {
      width: 80px;
      height: 80px;
    }
    }
  }
  .comments{
    margin: 10px 30px;
  }
}

.shuju {
  height: 20px;
  line-height: 20px;

  .touxiang {
    width: 16px;
    vertical-align: middle;
  }

  .nick-name {
    font-size: 12px;
    color: rgb(104, 100, 100);
  }

  .riqi {
    font-size: 10px;
    color: rgb(175, 169, 169);
  }
}
</style>

