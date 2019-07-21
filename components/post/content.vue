<template>
  <div class="strategy-content">
    <div class="strategy-content-header">
      <p>推荐攻略</p>
      <el-button type="primary" size="medium" icon="el-icon-edit">写游记</el-button>
    </div>
    <div>
      <ul class="strategy-content-middle">
        <li class="strategy-content-middle-border">
          <p class="strategy-content-middle-title">塞班贵?一定是你的打开方式不对!6000块玩转塞班</p>
          <p
            class="strategy-content-middle-text"
          >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
          <ul class="strategy-content-middle-img">
            <li>
              <img
                src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </li>
            <li>
              <img
                src="http://b3-q.mafengwo.net/s13/M00/FF/47/wKgEaVzMTOCAHX9_AAnidFWU9K466.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                alt
              />
            </li>
            <li>
              <img
                src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </li>
          </ul>
          <div class="strategy-content-footer">
            <p>
              <i class="el-icon-location-outline" />
              <i>北京市</i>
              <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
              <span>地球发动机</span>
              <i class="el-icon-view" />3042
            </p>
            <span class="right">30赞</span>
          </div>
        </li>
        <li class="strategy-content-middle-border" style="display:flex;">
          <ul class="strategy-content-middle-img" style="flex:1;">
            <li>
              <img
                src="http://b3-q.mafengwo.net/s13/M00/FF/47/wKgEaVzMTOCAHX9_AAnidFWU9K466.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                alt
              />
            </li>
          </ul>
          <div style="flex:2;">
            <p class="strategy-content-middle-title">塞班贵?一定是你的打开方式不对!6000块玩转塞班</p>
            <p
              class="strategy-content-middle-text"
            >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
            <div class="strategy-content-footer">
              <p>
                <i class="el-icon-location-outline" />
                <i>北京市</i>
                <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
                <span>地球发动机</span>
                <i class="el-icon-view" />3042
              </p>
              <span class="right">30赞</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="strategy-content-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
  .strategy-content-middle-border {
    border-bottom: 1px solid #ddd;
  }
  .strategy-content-middle-title {
    padding: 20px 0;
    font-size: 18px;
  }
  .strategy-content-middle-text {
    font-size: 14px;
    color: #666;
    line-height: 22px;
  }
  .strategy-content-middle-img {
    display: flex;
    margin-top: 18px;
    li {
      flex: 1;
      margin-right: 14px;
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
