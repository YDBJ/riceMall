<template>
  <div class="homeContainer">
    <!-- 搜索框 粘性布局-->
    <van-sticky>
      <div class="topSearch">
        <div class="logo">
          <img src="../../favicon.ico" alt="" />
        </div>
        <van-search placeholder="请输入..." />
      </div>
    </van-sticky>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ebe6e6">
      <van-swipe-item v-for="item in swipeData" :key="item.img">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 九宫格 -->
    <van-grid :column-num="4">
      <van-grid-item v-for="item in gridData" :key="item.src">
        <div class="jiuGrid">
          <img :src="item.src" alt="" />
          <span class="text">{{ item.text }}</span>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- 商品列表：分割线 -->
    <van-divider>推荐商品</van-divider>

    <!-- 商品列表：数据 -->
    <div class="goodsData">
      <div class="item" v-for="item in goodsList" :key="item.id">
        <div class="imgWrap flex_c_c">
          <img v-lazy="item.img_url" alt="" />
        </div>
        <div class="title line">
          {{ item.title }}
        </div>
        <div class="price">
          <span class="currentPrice">&yen;{{ item.sell_price }}</span>
          <span class="mun">{{ item.buy }} 购买</span>
        </div>
      </div>
    </div>

    <!-- 回到顶部组件 -->
    <BackTop :scrollTop="500" />
  </div>
</template>

<script>
// 导入接口
import { gainSwipe, gainGoods } from "../api/home.js";
// 九宫格组件
import menu1 from "../assets/images/1.png";
import menu2 from "../assets/images/2.png";
import menu3 from "../assets/images/3.png";
import menu4 from "../assets/images/4.png";
import menu5 from "../assets/images/5.png";
import menu6 from "../assets/images/6.png";
import menu7 from "../assets/images/7.png";
import menu8 from "../assets/images/more.png";

// 回到顶部组件
import BackTop from "../components/BackTop.vue";

export default {
  data() {
    return {
      swipeData: [],
      page: 1,
      limit: 10,
      gridData: [
        { src: menu1, text: "乐淘超市" },
        { src: menu2, text: "新闻列表" },
        { src: menu3, text: "乐淘生鲜" },
        { src: menu4, text: "生活缴费" },
        { src: menu5, text: "领津贴" },
        { src: menu6, text: "plus会员" },
        { src: menu7, text: "领乐豆" },
        { src: menu8, text: "更多" },
      ],
      goodsList: [],
    };
  },
  // 进来就发请求
  created() {
    this._gainSwipe();
    this._gainGoods();
  },
  methods: {
    // 获取轮播图数据
    async _gainSwipe() {
      let final = await gainSwipe();
      this.swipeData = final.message;
    },
    // 获取商品列表数据
    async _gainGoods() {
      let data = await gainGoods(this.page, this.limit);
      this.goodsList = data.message;
    },
  },
  components: {
    BackTop,
  },
};
</script>

<style lang="scss" scoped>
.homeContainer {
  padding-bottom: 50px;
  font-size: 14px;
  color: #666;

  .topSearch {
    display: flex;
    .logo {
      width: 50px;
      height: 54px;
      background: #fff;
      padding: 0px 3px;
      img {
        width: 100%;
        height: 100%;
        // logo图为原来的0.8倍 缩放
        transform: scale(0.8);
      }
    }
    .van-search {
      flex: 1;
    }
  }

  .my-swipe {
    .van-swipe-item {
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .van-grid {
    .jiuGrid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
      }
      .text {
        margin-top: 6px;
      }
    }
  }

  .goodsData {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: rgba(234, 231, 231, 0.368627451);

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      width: 49%;
      background-color: #fff;
      padding: 6px;
      border-radius: 4px;
      margin-bottom: 6px;
      .imgWrap {
        height: 124px;
        overflow: hidden;
        width: 100%;
        img {
          height: 100%;
        }
      }
      .flex_c_c {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        padding: 10px 0;
        color: #000;
      }

      // 省略号
      .line {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        display: flex;
        justify-content: space-between;

        .currentPrice {
          color: #ff4142;
          font-size: 16px;
          font-weight: 700;
        }

        .num {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>