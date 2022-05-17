<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o" badge="30" to="/home/shopcar"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="user-circle-o" to="/home/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    $route: {
      handler: function (newRoute, oldRoute) {
        let { name } = newRoute.meta;
        console.log(name);
        const nameMap = {
          Home: 0,
          Shopcar: 1,
          My: 2,
        };
        this.active = nameMap[name];
      },
      // 立即执行（刷新也会执行）
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
</style>