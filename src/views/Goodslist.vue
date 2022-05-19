<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="goodsData">
          <Goods
            v-for="item in list"
            :key="item.id"
            :data="item"
            @goodClick="foo"
          >
            <template #footer>
              <div class="footerArea">
                <div class="price">
                  <span class="sell_price">&yen; 2195</span>
                  <span class="market_price">&yen; 2499</span>
                </div>
                <div class="info">
                  <span class="hot">热卖中</span>
                  <span class="remain">剩余100件</span>
                </div>
              </div>
            </template>
          </Goods>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { gainGoodslist } from "../api/goodslist";
import Goods from "../components/Goods.vue";
export default {
  data() {
    return {
      page: 0,
      pagesize: 10,
      // 数据
      list: [],
      loading: false, // 是否正在加载中..
      finished: false, // 是否已经加载完毕
      refreshing: false, // 是否正在刷新中
    };
  },
  methods: {
    // 上拉加载
    onLoad() {
      console.log("onLoad");
      this.page++;
      this._gainGoodslist();
    },
    // 下拉刷新
    onRefresh() {
      console.log("onRefresh");
      this.page = 0;
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 获取商品列表
    async _gainGoodslist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      const goodslist = await gainGoodslist(this.page, this.pagesize);
      console.log(goodslist);
      this.loading = false;
      // 追加数据
      this.list = [...this.list, ...goodslist.message];
      if (goodslist.message.length === 0) {
        this.finished = true; // 已经把接口所有数据都加载完成，在往上拉不会发请求
      }
    },
    foo({ data }) {
      // 跳转到商品详情页
      this.$router.push(`/goodsDetail/${data.id}`);
    },
  },
  components: {
    Goods,
  },
};
</script>

<style lang="scss" scoped>
.goodsData {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgba(234, 231, 231, 0.368627451);
  .footerArea {
    .price {
      display: flex;
      justify-content: space-between;

      .sell_price {
        color: #ff4142;
        font-size: 16px;
        font-weight: 700;
      }

      .market_price {
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
      }
    }
    .info {
      display: flex;
      margin-top: 8px;
      justify-content: space-between;
      color: #787272;
      font-size: 14px;
    }
  }
}
</style>