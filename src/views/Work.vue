<template>
  <div class="work">
    <!-- 导航 -->
    <div class="page page1">
      <div class="box">
        <div class="box_li" v-for="(i, index) in work_page1_li" :key="index">
          <div v-if="i.url">
            <a :href="i.url">
              <van-image :src="i.img" />
              <div class="txt">{{ i.txt }}</div>
            </a>
          </div>
          <div v-if="i.link_url">
            <router-link :to="{ name: i.link_url }">
              <van-image :src="i.img" />
              <div class="txt">{{ i.txt }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 垃圾分类 -->
    <!-- <div class="page page2">
      <a href="http://cqfb.people.com.cn/h5/rubbish/"
        ><van-image
          width="100%"
          height="100%"
          src="http://zxlin.top/img/20201216/work_page1_banner.jpeg"
      /></a>
    </div> -->
    <!-- 办事板块 -->
    <div class="page page3">
      <div class="box box1">
        <div class="bot">
          <div class="bor"></div>
          <div class="txt">常用</div>
        </div>
        <div>
          <div class="box_li" v-for="(i, index) in work_page3_li_1" :key="index">
            <div v-if="i.url">
              <a :href="i.url">
                <van-image :src="i.img" />
                <div class="txt">{{ i.txt }}</div>
              </a>
            </div>
            <div v-if="i.link_url">
              <router-link :to="{ name: i.link_url }">
                <van-image :src="i.img" />
                <div class="txt">{{ i.txt }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="box box2">
        <div class="bot">
          <div class="bor"></div>
          <div class="txt">其他</div>
        </div>
        <div>
          <div class="box_li" v-for="(i, index) in work_page3_li_2" :key="index">
          <div v-if="i.url">
            <a :href="i.url">
              <van-image :src="i.img" />
              <div class="txt">{{ i.txt }}</div>
            </a>
          </div>
          <div v-if="i.link_url">
            <router-link :to="{ name: i.link_url }">
              <van-image :src="i.img" />
              <div class="txt">{{ i.txt }}</div>
            </router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!-- 子页面 -->
    <div class="page page4" style="display: none" @scroll="activityScrollWork">
      <div><router-view></router-view></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Work",
  mounted() {
    if (this.$route.path == "/Work") {
      $(".work .page4").css("display", "none");
      $(".work").attr("style", "");
    }
    if (this.$route.path == "/Work/QNDXX") {
      $(".work .page4").css("display", "block");
    }
    if (this.$route.path == "/Work/QXY") {
      $(".work .page4").css("display", "block");
    }
  },
  methods: {
    activityScrollWork() {
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        this.$router.history.current.meta.scoll.y = $(
          ".work .page4"
        ).scrollTop();
        this.$router.history.current.meta.height = $(
          ".work .page4>div>div"
        ).height();
      }
    },
  },
  watch: {
    $route() {
      //更改vue的title
      document.title = this.$router.history.current.meta.title;
      //home页面子页面显示控制
      if (this.$route.path == "/Work") {
        $(".work .page4").css("display", "none");
        $(".work").attr("style", "");
      }
      if (this.$route.path == "/Work/QNDXX") {
        $(".work .page4").css("display", "block");
      }
      if (this.$route.path == "/Work/QXY") {
        $(".work .page4").css("display", "block");
      }
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        if (this.$router.history.current.meta.scoll.y != 0) {
          var heightDiv = this.$router.history.current.meta.height;
          $(".work>.page4>div").css({ height: heightDiv + "px" });
        }
        $(".work .page4").scrollTop(this.$router.history.current.meta.scoll.y);
      }
    },
  },
  data() {
    return {
      work_page1_li: [
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_1.png",
          link_url: "QNDXX",
          txt: "青年大学习",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_2.png",
          link_url: "QXY",
          txt: "权小益",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_3.png",
          url:
            "http://wall.dato.run/wall/index.html?media_id=gh_b0b32d063c36&v=x20201222",
          txt: "团青树洞",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_4.png",
          url: "https://wj.qq.com/s/2152931/eff5/",
          txt: "团青意见箱",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_5.png",
          url: "http://www.cswu.cn/",
          txt: "学校官网",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_6.png",
          url: "http://www.cswu.cn/xytw/",
          txt: "团委官网",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_7.png",
          url: "http://jiaowu.cswu.cn/",
          txt: "教务系统",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_8.png",
          url:
            "http://wip.cswu.cn/cas/login?service=http%3A%2F%2Fdc.cswu.cn%2Fportal_main%2FtoPortalPage",
          txt: "一站式服务",
        },
      ],
      work_page3_li_1: [
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_6.png",
          link_url: "QNDXX",
          txt: "疫情填报",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_1.png",
          link_url: "QNDXX",
          txt: "青年大学习",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_2.png",
          link_url: "QXY",
          txt: "权小益",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_3.png",
          url:
            "http://wall.dato.run/wall/index.html?media_id=gh_b0b32d063c36&v=x20201222",
          txt: "团青树洞",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_4.png",
          url: "https://wj.qq.com/s/2152931/eff5/",
          txt: "团青意见箱",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_5.png",
          url: "https://wj.qq.com/s/2152931/eff5/",
          txt: "成绩查询",
        }
      ],
      work_page3_li_2: [
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_5.png",
          url: "http://www.cswu.cn/",
          txt: "学校官网",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_6.png",
          url: "http://www.cswu.cn/xytw/",
          txt: "团委官网",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_7.png",
          url: "http://jiaowu.cswu.cn/",
          txt: "教务系统",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_8.png",
          url:
            "http://wip.cswu.cn/cas/login?service=http%3A%2F%2Fdc.cswu.cn%2Fportal_main%2FtoPortalPage",
          txt: "一站式服务",
        },
      ],
    };
  },
};
</script>
<style>
.work {
  width: 100%;
  min-height: 100%;
}
.work .page1 {
  position: relative;
  width: 100%;
  height: 190px;
  background-image: url("../assets/work/work_pg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  border-radius: 0px 0px 30px 30px/ 0 0 10px 10px;
}
.work .page1 .box {
  width: 90%;
  height: 165px;
  position: relative;
  top: 55px;
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 5px -1px 10px rgba(0, 0, 0, 0.2);
}
.work .page1 .box .box_li {
  display: inline-block;
  width: 25%;
  height: 90px;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
}
.work .box .box_li > div {
  position: relative;
  width: 100%;
  height: 100%;
}
.work .page1 .box .box_li:nth-of-type(4n + 1) {
  left: 0;
}
.work .page1 .box .box_li:nth-of-type(4n + 2) {
  left: 25%;
}
.work .page1 .box .box_li:nth-of-type(4n + 3) {
  left: 50%;
}
.work .page1 .box .box_li:nth-of-type(4n + 4) {
  left: 75%;
}
.work .page1 .box .box_li:nth-of-type(1),
.work .page1 .box .box_li:nth-of-type(2),
.work .page1 .box .box_li:nth-of-type(3),
.work .page1 .box .box_li:nth-of-type(4) {
  top: 0;
}
.work .page1 .box .box_li:nth-of-type(5),
.work .page1 .box .box_li:nth-of-type(6),
.work .page1 .box .box_li:nth-of-type(7),
.work .page1 .box .box_li:nth-of-type(8) {
  top: 75px;
}
.work .page1 .box .box_li .van-image {
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.work .page1 .box .box_li img {
  width: 35px;
  height: 35px;
}
.work .page1 .box .box_li .txt {
  position: absolute;
  bottom: 2px;
  font-size: 12px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.work .page2 {
  width: 100%;
  height: 100px;
  position: relative;
  top: 0px;
}
.work .page3 {
  width: 100%;
  height: auto;
  position: relative;
  top: 10px;
}
.work .page3 .box {
  width: 100%;
  height: auto;
  position: relative;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
}
.work .page3 .box2 {
  top: 300px;
}
.work .page3 .box .bot {
  position: absolute;
  top: -25px;
  width: 100%;
  height: 30px;
  background-color: rgba(172, 170, 170, 0.192);
  line-height: 30px;
  font-size: 15px;
}
.work .page3 .box .bot .bor{
  position: absolute;
  height: 100%;
  width: 6px;
  background-color: rgb(0, 123, 180);
}
.work .page3 .box .bot .txt{
  position: absolute;
  left: 20px;
}
.work .page3 .box .box_li {
  display: inline-block;
  width: 33.33%;
  height: 100px;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
}
.work .page3 .box .box_li:nth-of-type(3n + 1) {
  left: 0;
}
.work .page3 .box .box_li:nth-of-type(3n + 2) {
  left: 33.33%;
}
.work .page3 .box .box_li:nth-of-type(3n + 3) {
  left: 66.66%;
}
.work .page3 .box .box_li:nth-of-type(1),
.work .page3 .box .box_li:nth-of-type(2),
.work .page3 .box .box_li:nth-of-type(3) {
  top: 0;
}
.work .page3 .box .box_li:nth-of-type(4),
.work .page3 .box .box_li:nth-of-type(5),
.work .page3 .box .box_li:nth-of-type(6) {
  top: 85px;
}
.work .page3 .box .box_li:nth-of-type(7),
.work .page3 .box .box_li:nth-of-type(8),
.work .page3 .box .box_li:nth-of-type(9) {
  top: 170px;
}
.work .page3 .box .box_li:nth-of-type(10),
.work .page3 .box .box_li:nth-of-type(11),
.work .page3 .box .box_li:nth-of-type(12) {
  top: 255px;
}
.work .page3 .box .box_li:nth-of-type(13),
.work .page3 .box .box_li:nth-of-type(14),
.work .page3 .box .box_li:nth-of-type(15) {
  top: 340px;
}
.work .page3 .box .box_li .van-image {
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.work .page3 .box .box_li img {
  width: 45px;
  height: 45px;
}
.work .page3 .box .box_li .txt {
  position: absolute;
  bottom: 1px;
  font-size: 13px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.work .page4 {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>