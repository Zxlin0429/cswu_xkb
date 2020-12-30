<template>
  <div class="home">
    <!-- 顶部轮播 -->
    <div class="page page1">
      <van-swipe :autoplay="3500">
        <van-swipe-item v-for="(image, index) in HomePage1Swipe" :key="index">
          <a :href="image.url" class="a">
            <img v-lazy="image.img" width="100%" height="230px" />
            <div class="txt">{{ image.text }}</div>
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 菜单板块 -->
    <div class="page page2">
      <router-link :to="{ name: 'QNZS' }">
        <div class="li_page2_1" @click="show_view_page2_home = true">
          <van-image
            round
            width="60px"
            height="60px"
            :src="modeImgList[0]"
          />
          <div class="txt">青年之声</div>
        </div>
      </router-link>
      <router-link :to="{ name: 'TJZJ' }">
        <div class="li_page2_2" @click="show_view_page2_home = true">
          <van-image
            round
            width="60px"
            height="60px"
            :src="modeImgList[1]"
          />
          <div class="txt">团聚指尖</div>
        </div>
      </router-link>

      <router-link :to="{ name: 'JJCG' }">
        <div class="li_page2_3">
          <van-image
            round
            width="60px"
            height="60px"
            :src="modeImgList[2]"
          />
          <div class="txt">聚焦城管</div>
        </div>
      </router-link>
      <div class="i" @click="i_view_page2_home" v-show="show_view_page2_home">
        <van-icon name="arrow-left" />
      </div>
      <div
        class="view"
        v-show="show_view_page2_home"
        @scroll="activityScrollHome"
      >
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- 新闻栏目 -->
    <div class="page page3">
      <div class="home_page3_li" v-for="(i, index) in HomePage3Li" :key="index">
        <a :href="i.url">
          <div class="txt">{{ i.txt }}</div>
          <div class="ico">
            <span>{{ i.from }}</span>
            <van-icon name="clock" />
            <span>{{ i.time }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Home",
  mounted() {
    if (this.$route.path == "/") {
      $(".home .page2 .i").css("display", "none");
      $(".home .page2 .view").css("display", "none");
      $(".home").attr("style","");
    }
    if (this.$route.path == "/QNZS") {
      $(".home .page2 .i").css("display", "block");
      $(".home .page2 .view").css("display", "block");
    }
    if (this.$route.path == "/TJZJ") {
      $(".home .page2 .i").css("display", "block");
      $(".home .page2 .view").css("display", "block");
    }
    if (this.$route.path == "/JJCG") {
      $(".home .page2 .i").css("display", "block");
      $(".home .page2 .view").css("display", "block");
    }
  },
  methods: {
    i_view_page2_home() {
      this.$router.push("/");
      this.show_view_page2_home = false;
    },
    activityScrollHome() {
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        this.$router.history.current.meta.scoll.y = $(
          ".home .page2 .view"
        ).scrollTop();
        this.$router.history.current.meta.height = $(
          ".home .page2 .view>div>div"
        ).height();
      }
    },
  },
  watch: {
    $route() {
      //更改vue的title
      document.title = this.$router.history.current.meta.title;
      //home页面子页面显示控制
      if (this.$route.path == "/") {
        $(".home .page2 .i").css("display", "none");
        $(".home .page2 .view").css("display", "none");
        $(".home").attr("style","");
      }
      if (this.$route.path == "/QNZS") {
        $(".home .page2 .i").css("display", "block");
        $(".home .page2 .view").css("display", "block");
      }
      if (this.$route.path == "/TJZJ") {
        $(".home .page2 .i").css("display", "block");
        $(".home .page2 .view").css("display", "block");
      }
      if (this.$route.path == "/JJCG") {
        $(".home .page2 .i").css("display", "block");
        $(".home .page2 .view").css("display", "block");
      }
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        if (this.$router.history.current.meta.scoll.y != 0) {
          var heightDiv = this.$router.history.current.meta.height;
          $(".home .page2 .view>div").css({ height: heightDiv + "px" });
        }
        $(".home .page2 .view").scrollTop(
          this.$router.history.current.meta.scoll.y
        );
      }
    },
  },
  data() {
    return {
      show_view_page2_home: false,
      modeImgList: [//模块图片
        require('../assets/home/home_page2_1.jpg'),
        require('../assets/home/home_page2_2.jpg'),
        require('../assets/home/home_page2_3.jpg'),
        require('../assets/home/home_qnzs_qnzs.jpg'),
        require('../assets/home/home_tjzj_tjzj.jpg'),
        require('../assets/home/home_jjcg_jjcg.jpg'),
      ],
      HomePage1Swipe: [
        //顶部轮播
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47929/page.htm",
          img:
            "http://www.cswu.cn/_upload/article/images/11/39/92ab10be426faad602361e792f43/fcddf1f6-dbe2-47b7-b784-fd7448d3ffa3.jpg",
          text: "我校青年志愿者服务总队荣获第八届重庆青年志愿者优秀集体",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47928/page.htm",
          img:
            "http://www.cswu.cn/_upload/article/images/75/fc/ef6b21d847068305411391d2787d/8f139e82-9033-4515-8472-4f5e698af618.jpg",
          text: "我校举办2020年校园文化艺术节师生合唱大赛",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47927/page.htm",
          img:
            "http://www.cswu.cn/_upload/article/images/43/90/95f5ba5c4d74ac89356061be04ad/144c6423-fdc7-4959-a8d6-96623579085a.jpg",
          text: "文化与旅游学院2020年“青马工程”大骨班培训顺利结束",
        },
      ],
      HomePage3Li: [
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47929/page.htm",
          txt: "我校青年志愿者服务总队荣获第八届重庆青年志愿者优秀集体",
          from: "校团委",
          time: "2020-12-08",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47928/page.htm",
          txt: "我校举办2020年校园文化艺术节师生合唱大赛",
          from: "校团委",
          time: "2020-12-07",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47927/page.htm",
          txt: "文化与旅游学院2020年“青马工程”大骨班培训顺利结束",
          from: "校团委",
          time: "2020-12-07",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47926/page.htm",
          txt: "我校举办2020年度校园文化艺术节健康青春大赛",
          from: "校团委",
          time: "2020-11-30",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1208/c1040a47925/page.htm",
          txt: "智慧康养学院开展经络养生志愿服务活动",
          from: "校团委",
          time: "2020-11-26",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1126/c1039a47619/page.htm",
          txt:
            "关于推荐参加重庆市2020年“三下乡”社会实践活动优秀组织单位优秀团队、先进工作者、优秀个人的公示",
          from: "校团委",
          time: "2020-11-23",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/1118/c1039a47378/page.htm",
          txt:
            "重庆城市管理职业学院关于推荐参加第八届重庆青年志愿者优秀集体、优秀个人的公示",
          from: "校团委",
          time: "2020-11-18",
        },
        {
          url: "http://www.cswu.cn/2020/1218/c34a48141/page.htm",
          txt:
            "关于推荐参加2020年重庆市高校“一校一品”优秀团学工作品牌培育建设工作的公示",
          from: "校团委",
          time: "2020-09-07",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/0824/c1039a44832/page.htm",
          txt: "关于推荐参加重庆市2020年社会实践“三下乡”优秀调研报告大赛的公示",
          from: "校团委",
          time: "2020-08-24",
        },
        {
          url: "http://www.cswu.cn/xytw/2020/0709/c1039a44531/page.htm",
          txt:
            "重庆城市管理职业学院关于表彰2020年度“优秀抗疫志愿者”、“优秀抗疫志愿服务团队”的公示",
          from: "校团委",
          time: "2020-07-08",
        },
      ],
    };
  },
};
</script>
<style>
.home {
  background-color: #f1f1f1;
}
.home .page1 {
  width: 100%;
  height: 230px;
}
.home .page1 .a {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 0;
}
.home .page1 .txt {
  position: absolute;
  width: 90%;
  bottom: 28px;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.home .page2 {
  width: 100%;
  height: 110px;
  background-color: #fff;
  position: relative;
}
.home .page2 .li_page2_1 {
  width: 60px;
  position: absolute;
  top: 50%;
  left: 17%;
  transform: translate(-50%, -50%);
}
.home .page2 .li_page2_2 {
  width: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home .page2 .li_page2_3 {
  width: 60px;
  position: absolute;
  top: 50%;
  right: 17%;
  transform: translate(50%, -50%);
}
.home .page2 .txt {
  font-size: 15px;
  text-align: center;
}
a {
  text-decoration: none;
  outline: none;
  color: #000;
}
.home .page2 .view {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  z-index: 10;
  top: 0;
  left: 0;
  overflow: auto;
}
.home .page2 .i {
  position: fixed;
  color: #fff;
  z-index: 100;
  top: 20px;
  left: 12px;
  font-size: 22px;
}
.home .page3 .home_page3_li {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #fff;
  margin-top: 6px;
  padding: 20px 20px 10px 20px;
  box-sizing: border-box;
}
.home .page3 .home_page3_li .txt {
  font-size: 18px;
  padding-bottom: 15px;
}
.home .page3 .home_page3_li .ico {
  font-size: 13px;
  color: #999;
}
.home .page3 .home_page3_li .ico span {
  display: inline-block;
  padding-right: 6px;
}
.home .page3 .home_page3_li .ico i {
  bottom: -2px;
}
</style>