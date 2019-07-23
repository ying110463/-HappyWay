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
          <i
            v-for="(v,j) in item.hotellevel.level"
            :key="j"
            class="iconfont iconhuangguan"
          ></i>
        </span>
        <span>{{item.alias}}</span>
        <span>
          <i class="iconfont iconlocation"></i>
          {{item.address}}
        </span>
      </div>
      <div class="main-pic">
        <!-- 获取图片路径 -->
        <el-row>
          <el-col :span="14">
            <div style="height:360px">
              <img
                style="height:360px"
                :src=" `http://157.122.54.189:9093/images/hotel-pics/1.jpeg`"
                alt
              />
            </div>
          </el-col>
          <el-col :span="10">
            <div class="main-rit">
              <div>
                <img :src="`http://157.122.54.189:9093/images/hotel-pics/1.jpeg`" alt />
                <img :src="`http://157.122.54.189:9093/images/hotel-pics/2.jpeg`" alt />
                <img :src="`http://157.122.54.189:9093/images/hotel-pics/3.jpeg`" alt />
                <img :src="`http://157.122.54.189:9093/images/hotel-pics/4.jpeg`" alt />
                <img :src="`http://157.122.54.189:9093/images/hotel-pics/5.jpeg`" alt />
                <img :src="`http://157.122.54.189:9093/images/hotel-pics/6.jpeg`" alt />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="hidden-columns">
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
      <!-- 地图 -->
      <el-row class="info-row">
        <el-col :span="12" id="container"></el-col>
        <el-col :span="10">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="风景" name="first" style=" height: 400px;" class="info-right">
              <div class="info-col">
                <ul v-for="(v,i) in Nadata" :key="i">
                  <li>{{v.name}}</li>
                  <li>{{(v.biz_ext.rating)*2}}公里</li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="交通" name="second">
              <div class="info-col">
                <ul v-for="(v,i) in Nadata" :key="i">
                  <li>{{v.name}}</li>
                  <li>{{(v.typecode)/400000}}公里</li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">基本信息</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-light">入住时间: 14:00之后</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-light">离店时间: 12:00之前</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-light">{{item.creation_time}} / {{item.renovat_time}}</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-light">{{item.roomCount}}间客房</div>
        </el-col>
      </el-row>

      <el-row :span="20" v-for="(v,i) in item.hotelassets" :key="i">
        <el-col :span="4"></el-col>
        <el-col>
          <div class="grid-content bg-purple-light">
            {{v.type}}
            <i>{{v.name}}</i>
          </div>
        </el-col>
      </el-row>
      <div>
        <span>10条真实用户评论</span>

        <el-row>
          <el-col :span="5">
            <el-row>
              <el-col :span="24">
                <div>总评数：9</div>
                <div>好评数：1</div>
                <div>差评数：2</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <div class="childeren">
              <el-progress
                :show-text="false"
                type="circle"
                :percentage="(data[0].scores.service)*10"
                status="warning"
                :stroke-width="2"
                :width="70"
              ></el-progress>
            </div>
            <i class="is0">
              <span>{{(data[0].scores.service)*10}}分</span>
              <em>推荐</em>
            </i>
          </el-col>
          <el-col :span="13">
            <el-row>
              <el-col :span="8">
                <div>
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :width="70"
                    :stroke-width="2"
                    :percentage="(data[0].scores.product)*5"
                    status="warning"
                  ></el-progress>
                </div>
                <i class="is1">
                  环境
                  <br />
                 {{ (data[0].scores.product)*5}}分
                </i>
              </el-col>
              <el-col :span="8">
                <div>
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :width="70"
                    :stroke-width="2"
                    status="warning"
                    :percentage="(data[0].scores.environment)*5"
                  ></el-progress>
                </div>
                <i class="is2">
                  产品
                  <br />
                  {{(data[0].scores.environment)*5}}分
                </i>
              </el-col>
              <el-col :span="8">
                <div>
                  <el-progress
                    type="circle"
                    :show-text="false"
                    :width="70"
                    :stroke-width="2"
                    status="warning"
                    :percentage="(data[0].scores.environment)*5"
                  ></el-progress>
                </div>
                <i class="is3">
                  服务
                  <br />
                  {{(data[0].scores.environment)*5}}分
                </i>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <Critic :data="navs" />
    </div>
  </div>
</template>
<script>
import Critic from "@/components/hotel/critic ";
export default {
  data() {
    return {
      data: [],
      tableData: [],
      activeName: "first",
      navs: [],
      Nadata: []
    };
  },
  components: {
    Critic
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, 6666);
      if (tab.label == "交通") {
        this.$axios(
          "https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.871811,31.328468&types=%E4%BA%A4%E9%80%9A%E8%AE%BE%E6%96%BD%E6%9C%8D%E5%8A%A1&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42"
        ).then(res => {
          console.log(res, 8888);
          const { pois } = res.data;
          this.Nadata = pois;
        });
      } else if (tab.label == "风景") {
        this.$axios({
          url:
            "https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.871811,31.328468&types=%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42"
        }).then(res => {
          const { pois } = res.data;
          this.Nadata = pois;
        });
      }
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
    });
    this.$axios("/hotels/options").then(res => {
      // console.log(res, 666);
    });
    this.$axios("/hotels/comments").then(res => {
      // console.log(res.data, 777);
      const { data } = res.data;
      this.navs = data;
    });
    this.$axios({
      url:
        "https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.871811,31.328468&types=%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42"
    }).then(res => {
      const { pois } = res.data;
      this.Nadata = pois;
    });
  }
};
</script>
<style lang="less" scoped>
.is0{
  position: absolute;
  left: 228px;
  bottom: 20px;
  font-size: 18px;
  color: orange;
}
.is1 {
  position: absolute;
  left: 18px;
  bottom: 26px;
  font-size: 14px;
  color: orange;
}
.is2 {
  position: absolute;
  left: 199px;
  bottom: 26px;
  font-size: 14px;
  color: orange;
}
.is3 {
  position: absolute;
  right: 120px;
  bottom: 26px;
  font-size: 14px;
  color: orange;
}
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
        color: gold;
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

  .main-rit {
    div {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 38%;
        margin-bottom: 15px;
        margin-left: auto;
      }
    }
  }
  img {
    width: 100%;
  }
}
.main-pic {
  margin: 5px 0 25px;
}
span {
  display: block;
}
.info-row {
  margin-top: 25px;
  margin-bottom: 25px;
  .info-col {
    overflow: auto;
    height: 300px;
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        flex: 50%;
        margin: 10px 0;
      }
    }
  }
}

.grid-content {
  margin: 10px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  > i {
    margin-left: 150px;
    background-color: #ddd;
    border-radius: 10%;
    border: 1px solid #ddd;
  }
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


