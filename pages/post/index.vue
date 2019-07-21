<template>
  <div style="padding:50px;">
     <h1 >ada</h1>
  <div class="travel-strategy">
    <div class="travel-strategy-left">
      <Recommend :cityList="cityData"></Recommend>
    </div>
    <div class="travel-strategy-right">
      <Search />
      <Content />
    </div>
    b663eedd771127122ff0ff4bae7bd7da43ab614e
  </div>
  <div>
        <button @click="handelClick">塞班贵？一定是你的打开方式不对！6000块玩转塞班</button>
  </div>
</template>

<script>
import Recommend from "@/components/post/recommend";
import Search from "@/components/post/search";
import Content from "@/components/post/content";
export default {
  data() {
    return {
      cityData: {},
      data:[]
    };
  },
  //   引入子组件
  components: {
    Recommend,
    Search,
    Content
  },
  mounted() {
    console.log(123);
    const {
      user: { userInfo }
    } = this.$store.state;
    // 请求城市菜单列表
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res);
      this.cityData = res.data;
    });
  },
  methods: {
        handelClick(){
            this.$axios({
                url:'/posts?id=4'
            }).then(res=>{
            //    console.log(res.data.data);
               const {data}=res.data
               this.data=data;
               console.log(this.data);
            this.$store.commit('post/setDetailData',data)
            this.$router.push('post/detail')
               
            })
        } 
     }
}
};
</script>

<style scoped lang='less'>
.travel-strategy {
  display: flex;
  width: 1000px;
  min-width: 1000px;
  margin: 20px auto;
  .travel-strategy-left {
    width: 260px;
    margin-right: 40px;
  }
  .travel-strategy-right {
    width: 700px;
  }
}
</style>
