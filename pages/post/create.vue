<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="elrow">
      <div class="publish">
        <p>发表新攻略</p>
        <span>分享你的个人游记，让更多人看到哦！</span>
      </div>
    </el-row>

    <el-input placeholder="请输入标题" style="width:800px;" class="btn" v-model="form.title"></el-input>
    <div>
      <!-- 富文本所在地 -->
      <section class="container">
        <div
          class="quill-editor"
          :content="content"
          @change="onEditorChange($event)"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          v-quill:myQuillEditor="editorOption"
        ></div>
      </section>
    </div>
    <!-- 选择城市 -->
    <div class="chooseciry">
      <el-form ref="form" :model="form">
        <el-form-item label="选择城市">
          <el-autocomplete
            :fetch-suggestions="querySearchAsync"
            placeholder="请搜索游玩城市"
            @select="handleSelect"
            v-model="id"
          ></el-autocomplete>
        </el-form-item>
      </el-form>
    </div>
    <!-- 发布按钮 -->
    <div>
      <el-button type="primary" @click="release">发布</el-button>或者
      <span @click="baocun" class="release">保存到草稿箱</span>
    </div>
    <div class="draft">
      <div class="cao">草稿箱()</div>
      <div v-for="(value,index) in list" :key="index">
        <span class="yiru" @click="cha(value.city,value.title,value.content)">
          {{value.title}}
          <i class="el-icon-edit"></i>
        </span>
        <span @click="deletes(index)">
          <i class="el-icon-delete"></i>
        </span>
        <p>{{value.data|sjian}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 对象
      // users:{},
      list:[],

      // 富文本
      content: "",
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            ["link", "image", "video"] // 链接、图片、视频
          ]
        }
      },
      form: {
        // 城市id
        city: "",
        title: ""
      },
      // 城市名称
      id: ""
    };
  },

  filters: {
    sjian(zhi) {
      var data = new Date(zhi);
      var nian = data.getFullYear();
      var yue = data.getMonth() + 1;
      var ri = data.getDate();
      return nian + "-" + yue + "-" + ri;
    }
  },

  methods: {
    // 删除草稿
    deletes(index) {
      this.list.splice(index, 1);
      this.form.title = "";
      this.form.city = "";
      this.content = "";
      this.id = "";
    },
    // 查看草稿
    cha(city, title, content) {
      this.form.title = title;
      this.id = city;
      this.content = content;
    },
    // 添加草稿
    baocun() {
      this.list.push({
        title: this.form.title,
        data: new Date(),
        city: this.id,
        content: this.content
      });
      console.log(this.list);

      localStorage.setItem("shuj", JSON.stringify(this.list));
    },
    // 富文本
    onEditorBlur(editor) {},
    onEditorFocus(editor) {},
    onEditorReady(editor) {},
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },

    // 输入时触发    cb必须接受个数组
    querySearchAsync(value, cb) {
      //   判断是否输入为空，如果是空不发送请求
      if (!value.trim()) {
        // 让其不显示转来转去
        cb([]);
        return;
      }
      this.$axios({
        url: "/airs/city",
        params: {
          // name: this.form.city
          name: this.id
        }
      }).then(res => {
        console.log(res);
        // 这里的data是一个数组  数组的每一项必须是对象，对象里面必须有value值
        const { data } = res.data;
        var newarr = data.map(v => {
          return {
            // 将循环到的对象返到一个新数组里
            ...v,
            value: v.name,
            id: v.id
          };
        });
        //   const arr= res.data.data;
        this.id = newarr[0].name;
        this.form.city = newarr[0].id;
        // this.form.city = newarr[0].name;
        // this.form.id = newarr[0].id;
        cb(newarr);
      });
    },
    // 点击城市时触发
    handleSelect(value) {
      console.log(value);
      this.form.city = value.id;
      this.id = value.name;
      console.log(this.id);

      // this.form.city = value.name;
      // this.form.id = value.id;
    },
    release() {
      // 校验
      const rules = {
        title: {
          value: this.form.title,
          message: "请输入标题"
        },
        city: {
          value: this.form.city,
          message: "请输入城市"
        }
      };
      // 循环对象
      var bl = true;
      Object.keys(rules).forEach(v => {
        if (!bl) return;
        if (!rules[v].value) {
          bl = false;
          this.$message.warning(rules[v].message);
        }
      });
      if (bl) {
        // 点击发布
        this.$axios({
          url: "/posts",
          method: "POST",
          data: {
            city: this.form.city,
            title: this.form.title,
            content: this.content
          },
          headers: {
            // 加入token
            Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
          }
        }).then(res => {
          if (res.status === 200) {
            this.$message({
              message: "新增成功",
              type: "success"
            });
            this.form.title = "";
            this.form.city = "";
            this.content = "";
            this.id = "";
          }
        });
      }
    }
  },
  mounted() {
    this.list = JSON.parse(localStorage.getItem("shuj"));

    // 富文本
    // console.log("app init, my quill insrance object is:", this.myQuillEditor);
    // setTimeout(() => {
    //   // this.content = "i am changed";
    // }, 3000);
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
.publish p {
  padding-bottom: 10px;
  font-size: 22px;
}
.publish span {
  color: rgb(211, 208, 208);
  font-size: 14px;
  font-weight: 400px;
}
.draft {
  // width: 200px;
  // height: 60px;
  position: absolute;
  right: 60px;
  top: 94px;
  border: 2px solid #ddd;
  float: right;
  padding: 15px 15px;
  padding-right: 60px;
  // text-align: center;
  // line-height: 60px;
}
.elrow {
  margin-bottom: 10px;
}
.btn {
  padding-bottom: 15px;
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
.release {
  color: orange;
  // text-decoration：underline;
  cursor: pointer;
}
.yiru:hover {
  color: red;
}
.cao {
  padding-bottom: 5px;
}
</style>
