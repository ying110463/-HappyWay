<template>
  <div class="strategy-content">
    <div class="strategy-content-header">
      <p>推荐攻略</p>
      <nuxt-link to="post/create">
        <el-button type="primary" size="medium" icon="el-icon-edit">写游记</el-button>
      </nuxt-link>
    </div>
    <div>
      <ul class="strategy-content-middle">
        <li
          class="strategy-content-middle-border"
          v-for="(v,i) in getlist "
          :key="i"
          @click="skip(v.id)"
        >
          <div v-if="v.images.length!==1">
            <p class="strategy-content-middle-title">{{v.title}}</p>
            <p class="strategy-content-middle-text">{{v.summary}}</p>
            <div class="strategy-content-middle-img">
              <div>
                <img :src="v.images[0]" alt />
              </div>
              <div>
                <img :src="v.images[1]" alt />
              </div>
              <div v-if="v.images[2]">
                <img :src="v.images[2]" alt />
              </div>
            </div>
            <div class="strategy-content-footer">
              <p>
                <i class="el-icon-location-outline" />
                <i>{{v.cityName}}</i>
                <img :src="`http://127.0.0.1:1337${v.account.defaultAvatar}`" alt />
                <span>{{v.account.nickname}}</span>
                <i class="el-icon-view" />
                {{v.watch}}
              </p>
              <span class="right">{{v.link?v.link:0}}赞</span>
            </div>
          </div>
          <div style="display:flex;" v-if="v.images.length===1">
            <div class="strategy-content-middle-img" style="flex:1;">
              <div style="width:220px">
                <img :src="v.images[0]" alt />
              </div>
            </div>
            <div style="flex:2;">
              <p class="strategy-content-middle-title">{{v.title}}</p>
              <p class="strategy-content-middle-text">{{v.summary}}</p>
              <div class="strategy-content-footer">
                <p>
                  <i class="el-icon-location-outline" />
                  <i>{{v.cityName}}</i>
                  <img :src="`http://127.0.0.1:1337${v.account.defaultAvatar}`" alt />
                  <span>{{v.account.nickname}}</span>
                  <i class="el-icon-view" />
                  {{v.watch}}
                </p>
                <span class="right">{{v.link?v.link:0}}赞</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="strategy-content-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 分页数据
      currentPage: 1,
      page: 2,
      total: 0,
      datalist: []
      // datalists: []
    };
  },
  computed: {
    // 计算属性 只要函数里面的 this指向的值发生变化就会触发函数 同时返回参数
    getlist() {
      // 备份两份数据  一份用来永远不会改变  一份用来操作
      // this.datalists = this.$store.state.post.articleList;
      // // 从新改变vuex 仓库中的数据
      // this.$store.commit("post/alterArticle", this.datalists);
      this.datalist = this.$store.state.post.articleList;
      this.total = this.datalist.length; //修改数据的数量
      let a = this.page;
      let b = this.currentPage;
      // 利用数组方法slice 截取其中一段  第一个是从何开始  第二个是到哪里结束
      this.datalist = this.datalist.slice((b - 1) * a, (b - 1) * a + a);

      return this.datalist;
    }
  },
  methods: {
    // 分页封装函数
    paging() {
      let a = this.page;
      let b = this.currentPage;
      let data = this.$store.state.post.articleList;
      // console.log(data);
      // 利用数组方法slice 截取其中一段  第一个是从何开始  第二个是到哪里结束
      let list = data.slice((b - 1) * a, (b - 1) * a + a);
      // 从新改变vuex 仓库中的数据
      this.datalist = list;
    },
    // 分页函数
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.page = val;
      this.paging();
    },
    handleCurrentChange(val) {
      // // console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.paging();
    },
    // 跳转文章攻略详情页面
    skip(id) {
      this.$router.push({ path: "/post/detail", query: { id } });
    }
  },
  mounted() {
    // 请求文章列表数据
    this.$store.dispatch("post/getArticle");
  }
};
</script>

<style scoped lang='less'>
.strategy-content {
  .strategy-content-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    p {
      font-size: 18px;
      color: orange;
      padding: 10px 0 20px 0;
      border-bottom: 2px solid orange;
    }
  }
}

.strategy-content-middle {
  cursor: pointer;
  .strategy-content-middle-border {
    border-bottom: 1px solid #ddd;
  }
  .strategy-content-middle-title {
    padding: 20px 0;
    font-size: 18px;
    &:hover {
      color: orange;
    }
  }
  .strategy-content-middle-text {
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #666;
    height: 63px;
    line-height: 22px;
  }
  .strategy-content-middle-img {
    display: flex;
    margin-top: 18px;
    > div {
      width: 33%;
      margin-right: 14px;
      border: none;
      img {
        width: 100%;
        height: 150px;
      }
    }
  }
}

.strategy-content-footer {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 13px;
  p {
    color: #666;
    img {
      width: 14px;
      height: 14px;
      border-radius: 50%;
    }
    span {
      font-size: 13px;
      padding-right: 4px;
    }
    i {
      padding-right: 4px;
    }
  }
  span {
    font-size: 18px;
    color: orange;
  }
}
.strategy-content-page {
  padding: 20px 0;
}
/deep/ .el-button--medium {
  height: 40px;
  margin-top: 6px;
}
</style>
