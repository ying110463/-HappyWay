<template>
  <div class="city-recommend">
    <div class="city-recommend-top">
      <ul class="city-recommend-top-father">
        <li
          v-for="(v,i) in cityList.data"
          :key="i"
          @mouseenter="immigrations(i)"
          @mouseleave="shiftOut"
          :class="{frame:curr}"
        >
          <span>{{v.type}}</span>
          <span>></span>
        </li>
      </ul>
      <ul
        class="city-recommend-top-children"
        v-for="(value,index) in cityList.data"
        :key="index"
        v-show="index===num"
      >
        <li v-for="(v,i) in value.children" :key="i">
          <span>
            <i>{{i+1}}</i>
            {{v.city}}
          </span>
          <span>{{v.desc}}</span>
        </li>
      </ul>
    </div>
    <div class="city-recommend-bottom">
      <div class="city-recommend-bottom-title">推荐城市</div>
      <ul>
        <li>
          <nuxt-link to="#">
            <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: null,
      curr: false
    };
  },
  props: {
    cityList: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 鼠标移出显示
    immigrations(i) {
      this.num = i;
    },
    // 鼠标移出隐藏
    shiftOut() {
      this.num = null;
    }
  }
};
</script>

<style scoped lang='less'>
.city-recommend {
  .city-recommend-top {
    position: relative;
    .city-recommend-top-father {
      border-right: 1px solid #ddd;
      &:hover {
        border: none;
      }
      li {
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        font-size: 14px;
        border: 1px solid #ddd;
        border-bottom: none;
        border-right: none;
        span:last-child {
          color: #ddd;
          font-family: cursive;
          font-size: 16px;
        }
        &:last-child {
          border-bottom: 1px solid #ddd;
        }
        &:hover {
          color: orange;
          border-right: none;
        }
      }
    }
    .city-recommend-top-children {
      position: absolute;
      top: 0;
      left: 260px;
      z-index: 200;
      background-color: #fff;
      border: 1px solid #ddd;
      border-left: none;
      width: 360px;
      padding: 10px 0;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      li {
        padding: 10px 20px;
        font-size: 14px;
        span:first-child {
          font-size: 16px;
          color: orange;
          margin-right: 10px;
          i {
            font-size: 18px;
            padding-right: 10px;
          }
        }
      }
    }
  }
}
.city-recommend-bottom {
  margin-top: 10px;
  .city-recommend-bottom-title {
    padding: 14px 0;
    border-bottom: 1px solid #ddd;
  }
  li {
    width: 260px;
    height: 170px;
    margin-top: 10px;
    background-color: rgba(69, 66, 228, 0.2);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
