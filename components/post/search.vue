<template>
  <div class="Search">
    <div class="Search-top">
      <el-input placeholder="请输入想去的地方,例如:广州" v-model="input">
        <el-button slot="append" icon="el-icon-search" style="color:orange;border-radius:0"></el-button>
      </el-input>
    </div>
    <div>
      <ul class="Search-bottom">
        <li>推荐:</li>
        <li>
          <nuxt-link to>广州</nuxt-link>
        </li>
        <li>
          <nuxt-link to>上海</nuxt-link>
        </li>
        <li>
          <nuxt-link to>北京</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style scoped lang='less'>
/deep/ .el-input-group {
  border: 4px solid orange;
}
/deep/ .el-input-group > .el-input__inner {
  border: none;
}
/deep/ .el-input-group__append,
.el-input-group__prepend {
  border-radius: 0;
  background-color: #fff;
  border: none;
  font-size: 20px;
  font-weight: 900;
}
.Search-bottom {
  display: flex;
  margin: 10px 0;
  font-size: 12px;
  li {
    margin-right: 6px;
    a:hover {
      color: orange;
      text-decoration: underline;
    }
  }
}
</style>
