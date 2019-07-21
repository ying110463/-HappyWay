<template>
  <div class="city-recommend">
    <div class="city-recommend-top">
      <ul class="city-recommend-top-father">
        <li
          v-for="(v,i) in cityList"
          :key="i"
          @mouseenter="immigrations(i)"
          @mouseleave="shiftOut"
          :class="{frame:curr}"
        >
          <span>{{v}}</span>
          <span>></span>
        </li>
      </ul>
      <ul
        class="city-recommend-top-children"
        v-for="(value,index) in citytitle"
        :key="index"
        v-show="index===num"
      >
        <li v-for="(v,i) in value" :key="i">
          <span>
            <i>{{i}}</i>
            {{v.name}}
          </span>
          <span>{{v.list}}</span>
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
      cityList: ["热门城市", "推荐城市", "奔向海岛", "主题推荐"],
      citytitle: [
        [
          {
            name: "a北京1",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "a北京2",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "a北京3",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "a北京4",
            list: "世界著名古都和现代化国际城市"
          }
        ],
        [
          {
            name: "b北京1",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "b北京2",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "b北京3",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "b北京4",
            list: "世界著名古都和现代化国际城市"
          }
        ],
        [
          {
            name: "c北京1",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "c北京2",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "c北京3",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "c北京4",
            list: "世界著名古都和现代化国际城市"
          }
        ],
        [
          {
            name: "d北京1",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "d北京2",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "d北京3",
            list: "世界著名古都和现代化国际城市"
          },
          {
            name: "d北京4",
            list: "世界著名古都和现代化国际城市"
          }
        ]
      ],
      num: null,
      curr: false
    };
  },
  methods: {
    // 鼠标移出显示
    immigrations(i) {
      this.num = i;
      console.log(123);
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
      font-size: 16px;
      border: 1px solid #ddd;
      border-left: none;
      width: 360px;
      padding: 10px 0;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      li {
        padding: 10px 20px;
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
