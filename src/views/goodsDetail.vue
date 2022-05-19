<template>
  <div class="details">
    <div class="card" @click="previewImg">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item.src" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="card">
      <div class="price">
        <span class="sell_price">&yen; {{ goodsInfo.sell_price }}</span>
        <span class="market_price">&yen; {{ goodsInfo.market_price }}</span>
      </div>
      <div class="title">
        {{ goodsInfo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { gainGoodsImages } from "../api/details.js";
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      id: this.$route.params.id,
      images: [],
      goodsInfo: {
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        market_price: 2499,
        sell_price: 2195,
      },
    };
  },
  created() {
    this._gainGoodsImages();
  },
  methods: {
    async _gainGoodsImages() {
      const { message } = await gainGoodsImages(this.id);
      this.images = message;
    },
    previewImg() {
      // 图片预览
      let img = this.images.map((item) => item.src);
      ImagePreview({ images: img, startPosition: 0 });
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  height: 100vh;
  background: rgba(234, 231, 231, 0.368627451);
  padding: 4px;

  .card {
    border-radius: 6px;
    margin-bottom: 8px;
    background: #fff;
    padding: 8px;
    .my-swipe {
      .van-swipe-item {
        height: 240px;
        text-align: center;
        img {
          //   width: 100%;
          height: 100%;
        }
      }
    }
    .price {
      .sell_price {
        color: #fa865d;
        font-size: 20px;
        margin-right: 20px;
      }

      .market_price {
        color: #666;
        font-size: 14px;
      }
    }

    .title {
      color: #333;
      font-weight: 500;
    }
  }
}
</style>