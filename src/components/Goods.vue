<template>
  <div class="item" @click="clickHandle">
    <div class="imgWrap flex_c_c">
      <img v-lazy="data.img_url" alt="" />
    </div>

    <div class="title line">{{ data.title }}</div>
    <slot name="footer">
      <div class="price">
        <span class="currentPrice">&yen;{{ data.sell_price }}</span>
        <span class="mun">{{ data.buy }} 购买</span>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props: ["data"],
  methods: {
    clickHandle(event) {
      // 触发父绑定的自定义事件
      this.$emit("goodClick", { event, data: this.data });
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>