<template>
  <div class="city-recommend">
    <div class="city-recommend-top">
      <ul class="city-recommend-top-father">
        <li v-for="(v,i) in cityList" :key="i" @mouseenter="fn(i)">
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
          <span>{{i}}{{v.name}}</span>
          <span>{{v.list}}</span>
        </li>
      </ul>
    </div>
    <div class="city-recommend-bottom"></div>
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
      num: 0
    };
  },
  methods: {
    fn(i) {
      this.num = i;
      console.log(123);
    }
  }
};
</script>

<style scoped lang='less'>
.city-recommend {
  height: 300px;
  .city-recommend-top {
    position: relative;
    .city-recommend-top-father {
      li {
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        font-size: 14px;
        border: 1px solid #ddd;
        border-bottom: none;
        span:last-child {
          color: #ddd;
          font-family: cursive;
          font-size: 16px;
        }
        &:last-child {
          border: 1px solid #ddd;
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
      border: 1px solid #ddd;
      border-left: none;
      width: 350px;
      // padding: 20px 0;
      li {
        padding: 10px 30px;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }
    }
  }
}
</style>
