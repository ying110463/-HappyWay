<template>
<<<<<<< HEAD
    <div class="header">
  <el-row type="flex" justify="space-between" class="elrow">
      <div class="publish">
          <p>发表新攻略</p>
          <span>分享你的个人游记，让更多人看到哦！</span>
      </div>
      <div class="draft">
         草稿箱(0)
      </div>
</el-row>
    <el-input  placeholder="请输入标题" style="width:700px;" class="btn"></el-input>
    <div>
        <!-- 富文本所在地 -->
  <section class="container">
    <div class="quill-editor" 
         :content="content"
         @change="onEditorChange($event)"
         @blur="onEditorBlur($event)"
         @focus="onEditorFocus($event)"
         @ready="onEditorReady($event)"
         v-quill:myQuillEditor="editorOption">
    </div>
  </section>
    </div>
    <!-- 选择城市 -->
    <div class="chooseciry">

<el-form ref="form" :model="form" >
    <el-form-item label="选择城市" >
    <el-autocomplete
  :fetch-suggestions="querySearchAsync"
  placeholder="请搜索游玩城市"
  @select="handleSelect"
  v-model="form.city"
></el-autocomplete>
  </el-form-item>
    </el-form>
    </div>
        <!-- 发布按钮 -->
 <div class=" release">
     <el-button type="primary">发布</el-button>
     <span>或者 保存到草稿</span>
 </div>

    </div>
</template>

<script>
export default {
data () {
    return {
        // 富文本
                content: '<p>I am Example</p>',
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
               [{header:1 }, {header:2 }],
              ["link", "image", "video"],// 链接、图片、视频
                       
            ]
          }
        },
  form:{
      city:""
  }      
    }
},

methods: {
// 富文本
     onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },

    // 输入时触发    cb必须接受个数组
    querySearchAsync(value,cb){
        console.log(value);
        
//   判断是否输入为空，如果是空不发送请求
if(!value.trim()){
    // 让其不显示转来转去
                    cb([])
return
}
this.$axios({
    url:"/airs/city",
    params:{
        name:this.form.city
    }
})
.then(res=>{
    console.log(res);
    // 这里的data是一个数组  数组的每一项必须是对象，对象里面必须有value值
                    const {data} = res.data;
var newarr=data.map((v)=>{
    return {
        // 将循环到的对象返到一个新数组里
          ...v,
    value: v.name
    } 
})
            //   const arr= res.data.data;
              this.form.city=newarr[0].value
cb(newarr)
})
    },
    // 点击城市时触发
    handleSelect(value){
              this.form.city=value.value
    }
},
mounted () {
    // 富文本
       console.log('app init, my quill insrance object is:', this.myQuillEditor)
      setTimeout(() => {
        this.content = 'i am changed'
      }, 3000)
}
}
</script>

<style lang="less" scoped>
.header{
    width:1000px;
    margin:0 auto;
    padding:20px 0;
}
.publish p{
    padding-bottom:10px;
    font-size:22px;
}
.publish span{
    color:rgb(211, 208, 208);
    font-size:14px;
    font-weight:400px;
}
.draft{
    width:200px;
    height:60px;
    border:2px solid #ddd;
    text-align: center;
    line-height: 60px;
}
.elrow{
    margin-bottom:10px;
}
.btn{
    padding-bottom:15px;
}
// 富文本
  .container {
    width: 800px;
    height: 450px;
    padding: 20px 0;
    .quill-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
  }
=======
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
>>>>>>> 141a46c9daf234720e970426eb3fad415873aa9e
</style>
