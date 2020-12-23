<template>
  <div class="activity">
    <ul class=".news_lists">
      <!-- 拉动刷新 -->
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <li v-for="(item, index) in attributeLists" :key="index">
          <a v-bind:href="item.a_href">
            <img v-bind:src="item.img_src" width="100%" height="250px" />
          </a>
        </li>
      <!-- </van-pull-refresh> -->
      <!-- 拉动刷新 -->
    </ul>
  </div>
</template>


<script>
import { Notify } from "vant"; //拉动刷新
// import $ from "jquery";
//拉动刷新
export default {
  data() {
    return {
      scrollY: 0,
      attributeLists: [
        {
          img_src: "http://zxlin.top/img/20201217/vr.png",
          a_href: "http://zxlin.top/h5/20201215/vr/",
        },
        {
          img_src: "http://zxlin.top/img/20201217/ect.png",
          a_href: "http://zxlin.top/h5/20201215/ect/",
        },
        {
          img_src: "http://zxlin.top/img/20201217/job.png",
          a_href: "http://zxlin.top/h5/20201215/job/",
        },
        {
          img_src: "http://zxlin.top/img/20201217/culture.png",
          a_href: "http://zxlin.top/h5/20201215/culture/",
        },
        {
          img_src: "http://zxlin.top/img/20201217/video.png",
          a_href: "http://zxlin.top/h5/20201215/video/",
        },
      ],
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Notify({ type: "success", message: "刷新成功" });
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>
<style>
.activity{
  min-height: 100%;
}
.activity .li {
  font-size: 0;
}
.activity a {
  width: 100%;
  height: 200px;
  display: block;
  padding-bottom: 3px;
}
.activity a img {
  width: 100%;
  height: 200px;
}
</style>