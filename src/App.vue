<template>
  <div class="app">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      v-show="isShowNavbar"
      @click-left="$router.back()"
      left-arrow
    />

    <!-- 匹配根路由 显示全部-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowNavbar: false,
      title: "淘米",
    };
  },
  // 隐藏显示导航栏
  watch: {
    $route: {
      handler: function (newRoute, oldRoute) {
        // 是主页则隐藏navbar,否则显示
        let { isMainPage, title } = newRoute.meta;
        this.title = title;
        this.isShowNavbar = !isMainPage;
      },
      // 立即执行（刷新也会执行）
      immediate: true,
    },
  },
  components: {},
};
</script>
<style lang="scss">
.App {
  ul {
    li {
      list-style: none;
    }
  }
}
// .app {
//   min-width: 320px;
//   max-width: 750px;
//   margin: 0 auto;
// }
</style>

