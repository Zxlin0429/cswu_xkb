<template>
  <div class="work">
    <!-- 导航 -->
    <div class="page page1">
      <div class="box">
        <div class="box_li" v-for="(i, index) in work_page1_li" :key="index">
          <a :href="i.url">
            <van-image :src="i.img" />
            <div class="txt">{{ i.txt }}</div>
          </a>
        </div>
      </div>
    </div>
    <!-- 垃圾分类 -->
    <div class="page page2">
      <a href="http://cqfb.people.com.cn/h5/rubbish/"
        ><van-image
          width="100%"
          height="100%"
          src="http://zxlin.top/img/20201216/work_page1_banner.jpeg"
      /></a>
    </div>
    <!-- 办事板块 -->
    <div class="page page3">
      <div class="box">
        <div class="box_li" v-for="(i, index) in work_page3_li" :key="index">
          <a :href="i.url">
            <van-image :src="i.img" />
            <div class="txt">{{ i.txt }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      work_page1_li: [
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_1.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "疫情填报",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_2.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "青年大学习",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_3.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "心理咨询",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_4.png",
          url: "http://wall.dato.run/wall/index.html?media_id=gh_b0b32d063c36&v=x20201222",
          txt: "团青树洞",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_5.png",
          url: "https://score.super.cn/Score/index.html",
          txt: "成绩查询",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_6.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "五四评优",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_7.png",
          url: "https://wj.qq.com/s/2152931/eff5/",
          txt: "团青意见箱",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_8.png",
          url: "http://wip.cswu.cn/cas/login?service=http%3A%2F%2Fdc.cswu.cn%2Fportal_main%2FtoPortalPage",
          txt: "一站式服务",
        },
      ],
      work_page3_li: [
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_1.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "疫情填报",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_2.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "青年大学习",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_3.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "心理咨询",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_4.png",
          url: "http://wall.dato.run/wall/index.html?media_id=gh_b0b32d063c36&v=x20201222",
          txt: "团青树洞",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_5.png",
          url: "https://score.super.cn/Score/index.html",
          txt: "成绩查询",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_6.png",
          url: "http://zxlin.top/h5/20201215/vr/",
          txt: "五四评优",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_7.png",
          url: "https://wj.qq.com/s/2152931/eff5/",
          txt: "团青意见箱",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_8.png",
          url: "http://wip.cswu.cn/cas/login?service=http%3A%2F%2Fdc.cswu.cn%2Fportal_main%2FtoPortalPage",
          txt: "一站式服务",
        },
        {
          img: "http://zxlin.top/img/20201216/work_page1_li_3.png",
          url: "http://www.cswu.cn",
          txt: "权小益",
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
  height: 245px;
  background-image: url("http://zxlin.top/img/20201216/work_page1_banner.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.work .page1 .box {
  width: 90%;
  height: 180px;
  position: relative;
  top: 65px;
  left: 50%;
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
  top: 90px;
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
  bottom: 13px;
  font-size: 12px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
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
  top: -60px;
}
.work .page3 .box {
  width: 100%;
  height: auto;
  position: relative;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
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
  top: 120px;
}
.work .page3 .box .box_li:nth-of-type(7),
.work .page3 .box .box_li:nth-of-type(8),
.work .page3 .box .box_li:nth-of-type(9) {
  top: 240px;
}
.work .page3 .box .box_li:nth-of-type(10),
.work .page3 .box .box_li:nth-of-type(11),
.work .page3 .box .box_li:nth-of-type(12) {
  top: 360px;
}
.work .page3 .box .box_li:nth-of-type(13),
.work .page3 .box .box_li:nth-of-type(14),
.work .page3 .box .box_li:nth-of-type(15) {
  top: 480px;
}
.work .page3 .box .box_li .van-image {
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.work .page3 .box .box_li img {
  width: 55px;
  height: 55px;
}
.work .page3 .box .box_li .txt {
  position: absolute;
  bottom: 8px;
  font-size: 13px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}
</style>