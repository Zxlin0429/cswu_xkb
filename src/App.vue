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
    // var ua = navigator.userAgent.toLowerCase();
    // var isWeixin = ua.indexOf("micromessenger") != -1;
    // if (!isWeixin) {
    //   document.head.innerHTML =
    //     '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
    //   document.body.innerHTML =
    //     '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
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
