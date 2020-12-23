<template>
  <div id="app">
    <div id="index_bottom">
      <TableBottom />
    </div>
    <div id="index_body" @scroll="activityScroll">
      <router-view />
    </div>
  </div>
</template>
<script>
import TableBottom from "./components/TabbarBottom";
import $ from "jquery";

export default {
  components: {
    TableBottom,
  },
  beforeCreate() {
    document.title = this.$router.history.current.meta.title;
  },
  mounted() {
    //禁止使用微信以外打开
  // var useragent = navigator.userAgent;
  // if (useragent.match(/MicroMessenger/i) != "MicroMessenger") {
  //   // 这里警告框会阻塞当前页面继续加载
  //   alert("已禁止本次访问：您必须使用微信内置浏览器访问本页面！");
  //   // 以下代码是用javascript强行关闭当前页面
  //   var opened = window.open("提示", "_self");
  //   opened.opener = null;
  //   opened.close();
  // }
  },
  methods: {
    activityScroll() {
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        this.$router.history.current.meta.scoll.y = $(
          "#index_body"
        ).scrollTop();
        this.$router.history.current.meta.height = $(
          "#index_body>div"
        ).height();
      }
    },
  },
  watch: {
    $route() {
      //更改vue的title
      document.title = this.$router.history.current.meta.title;
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        if (this.$router.history.current.meta.scoll.y != 0) {
          var heightDiv = this.$router.history.current.meta.height;
          $("#index_body>div").css({ height: heightDiv + "px" });
        }
        $("#index_body").scrollTop(this.$router.history.current.meta.scoll.y);
      }
    },
  },
};
$(function () {
  $("#index_body").css({ height: $(window).height() - 50 + "px" });
});
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: ALL;
}
#index_body {
  overflow-x: hidden;
  overflow-y: auto;
}
#index_body > div {
  min-height: 100%;
}
</style>
