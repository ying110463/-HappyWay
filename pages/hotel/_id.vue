<template>
  <div class="container">
    <div v-for="(item,index) in data" :key="index">
      <div class="breadcrumb">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
          <el-breadcrumb-item>{{item.real_city}}酒店</el-breadcrumb-item>
          <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="name-info">
        <span>
          {{item.name}}
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
        </span>
        <span>{{item.alias}}</span>
        <span>
          <i class="iconfont iconlocation"></i>
          {{item.address}}
        </span>
      </div>
      <div class="main-pic" v-for="(v, i) in item.pics" :key="i">
        <!-- 获取图片路径 -->
        <img :src=" $axios.defaults.baseURL + v.url" alt />
      </div>
      <div class="hidden-columns">
        <!-- <el-table :data="tableData" style="width: 100%" >
          <el-table-column prop="name" :cell-click="handpang" label="价格来源" width="180"></el-table-column>
          <el-table-column prop="bestType" label="低价户型" width="180"></el-table-column>
          <el-table-column prop="price" label="最底价格/每晚"></el-table-column>
        </el-table>-->
        <ul>
          <li>价格来源</li>
          <li>低价户型</li>
          <li>最底价格/每晚</li>
        </ul>
        <ul v-for="(v,i) in tableData" :key="i" @click="handpang">
          <li>{{v.name}}</li>
          <li>{{v.bestType}}</li>
          <li style="color:red">
            ￥{{v.price}}
            <i style="color:black">起</i> >
          </li>
        </ul>
      </div>
      <el-row class="info-row">
        <el-col :span="12" id="container"></el-col>
        <el-col :span="10">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="info-right">
            <el-tab-pane label="风景" name="first" style=" height: 400px;"></el-tab-pane>
            <el-tab-pane label="交通" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <div class="info-row">
        <ul>
          <li>价格来源</li>
          <li>低价户型</li>
          <li>最底价格/每晚</li>
        </ul>
        <ul v-for="(v,i) in tableData" :key="i" @click="handpang">
          <li>{{v.name}}</li>
          <li>{{v.bestType}}</li>
          <li style="color:red">
            ￥{{v.price}}
            <i style="color:black">起</i> >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      tableData: [],
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handpang() {
      this.$router.push({
        path: "/hotel"
      });
    }
  },
  mounted() {
    // 页面加加载之后执行
    window.onLoad = function() {
      // 生成地图.container是显示地图的div的id
      var map = new AMap.Map("container", {
        zoom: 11, //放大级别
        center: [118.8718107, 31.32846821], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
        position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      map.add(marker);
    };
    // 地图的链接
    var key = "fc349821166279b8365299d22d7cf202";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);

    this.$axios("/hotels?id=" + this.$route.params.id).then(res => {
      const { data } = res.data;
      this.data = data;
      this.tableData = res.data.data[0].products;
      console.log(res.data.data[0].products);
    });
    this.$axios("/hotels/options").then(res => {
      console.log(res, 666);
    });
  }
};
</script>
<style lang="less" scoped>
.container {
  margin: 0 auto;

  width: 1000px;
  .breadcrumb {
    padding: 15px 0;

    /deep/ .el-breadcrumb {
      font-size: 16px;
    }
  }
  .name-info {
    padding: 5px 0 40px 0px;
    span:nth-child(1) {
      color: #333;
      font-weight: 400;
      font-size: x-large;
      i {
        color: #666;
        font-size: 14px;
      }
    }
    span:nth-child(2) {
      color: #666;
      font-size: 14px;
    }
    span:nth-child(3) {
      color: #666;
      font-size: 14px;
    }
  }
  img {
    height: 100px;
  }
}
span {
  display: block;
}
.info-row {
  margin-top: 20px;
}
.info-right {
  overflow: auto;
  height: 300px;
}

#container {
  height: 400px;
  margin-right: 20px;
}
.hidden-columns {
  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    li {
      flex-wrap: nowrap;
      padding: 10px;
    }
  }
  ul:nth-child(1) {
    color: #aaa;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>


