<template>
  <div class="myself">
    <div class="page1">
      <div class="content">
        <div class="headPicture">
          <van-image
            round
            width="80px"
            height="80px"
            :src="this.Common.User.headPicture"
          />
        </div>
        <div class="wxName">
          {{ this.Common.User.wxName }}
        </div>
      </div>
    </div>
    <div class="page2">
      <div class="bg">
        <ul class="menuBar">
          <li>
            <router-link :to="{ name: 'WDJF' }">
              <van-cell icon="balance-o" title="我的积分">
                <template #right-icon>
                  <van-icon name="arrow" class="arrow" />
                </template>
              </van-cell>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'GRXX' }">
              <van-cell icon="user-o" title="个人信息">
                <template #right-icon>
                  <van-icon name="arrow" class="arrow" />
                </template>
              </van-cell>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'LXWM' }">
              <van-cell icon="phone-circle-o" title="联系我们">
                <template #right-icon>
                  <van-icon name="arrow" class="arrow" />
                </template>
              </van-cell>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'BBXX' }">
              <van-cell icon="label-o" title="版本信息">
                <template #right-icon>
                  <van-icon name="arrow" class="arrow" />
                </template>
              </van-cell>
            </router-link>
          </li>
          <li v-if="!loginShow">
            <router-link :to="{ name: 'DJDL' }">
              <van-cell icon="add-o" title="点击登录">
                <template #right-icon>
                  <van-icon name="arrow" class="arrow" />
                </template>
              </van-cell>
            </router-link>
          </li>
          <li v-if="loginShow" @click="delLogin">
            <van-cell icon="close" title="退出登录">
              <template #right-icon>
                <van-icon name="arrow" class="arrow" />
              </template>
            </van-cell>
          </li>
        </ul>
      </div>
    </div>
    <div class="page page3" style="display: none">
      <div class="page3_top">
        <van-icon name="arrow-left" @click="myself_page3_i" />
      </div>
      <div class="page3_body" @scroll="activityScrollMyself">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Dialog } from "vant";
import { Cell, CellGroup } from "vant";
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Dialog);
export default {
  name: "Myself",
  mounted() {
    this.loginShow = this.Common.User.login;
    $(".myself .page3 .page3_body").css({
      height: $(window).height() - 50 + "px",
    });
    //myself页面子页面显示控制
    if (this.$route.path == "/Myself") {
      $(".myself .page3").css("display", "none");
    }
    if (this.$route.path == "/Myself/WDJF") {
      if (!this.Common.User.login) {
        Dialog.confirm({
          title: "提示",
          message: "您未登录，是否登录？",
        })
          .then(() => {
            // on confirm
            $(".myself .page3").css("display", "block");
            this.$router.push("/Myself/DJDL");
          })
          .catch(() => {
            // on cancel
            this.$router.push("/Myself");
            return false;
          });
        return false;
      }
      $(".myself .page3").css("display", "block");
    }
    if (this.$route.path == "/Myself/GRXX") {
      if (!this.Common.User.login) {
        Dialog.confirm({
          title: "提示",
          message: "您未登录，是否登录？",
        })
          .then(() => {
            // on confirm
            $(".myself .page3").css("display", "block");
            this.$router.push("/Myself/DJDL");
          })
          .catch(() => {
            // on cancel
            this.$router.push("/Myself");
            return false;
          });
        return false;
      }
      $(".myself .page3").css("display", "block");
    }
    if (this.$route.path == "/Myself/LXWM") {
      $(".myself .page3").css("display", "block");
    }
    if (this.$route.path == "/Myself/BBXX") {
      $(".myself .page3").css("display", "block");
    }
    if (this.$route.path == "/Myself/DJDL") {
      $(".myself .page3").css("display", "block");
    }
  },
  methods: {
    delLogin() {
      Dialog.confirm({
        title: "退出",
        message: "确认退出？",
      })
        .then(() => {
          // on confirm
          this.Common.User.login = false;
          this.loginShow = this.Common.User.login;
        })
        .catch(() => {
          // on cancel
        });
    },
    myself_page3_i() {
      this.$router.push("/Myself");
    },
    activityScrollMyself() {
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        this.$router.history.current.meta.scoll.y = $(
          ".myself .page3 .page3_body"
        ).scrollTop();
        this.$router.history.current.meta.height = $(
          ".myself .page3 .page3_body>div"
        ).height();
      }
    },
  },
  watch: {
    $route() {
      $(".myself .page3 .page3_body").css({
        height: $(window).height() - 50 + "px",
      });
      //更改vue的title
      document.title = this.$router.history.current.meta.title;
      //myself页面子页面显示控制
      if (this.$route.path == "/Myself") {
        $(".myself .page3").css("display", "none");
      }
      if (this.$route.path == "/Myself/WDJF") {
        if (!this.Common.User.login) {
          Dialog.confirm({
            title: "提示",
            message: "您未登录，是否登录？",
          })
            .then(() => {
              // on confirm
              $(".myself .page3").css("display", "block");
              this.$router.push("/Myself/DJDL");
            })
            .catch(() => {
              // on cancel
              this.$router.push("/Myself");
              return false;
            });
          return false;
        }
        $(".myself .page3").css("display", "block");
      }
      if (this.$route.path == "/Myself/GRXX") {
        if (!this.Common.User.login) {
          Dialog.confirm({
            title: "提示",
            message: "您未登录，是否登录？",
          })
            .then(() => {
              // on confirm
              $(".myself .page3").css("display", "block");
              this.$router.push("/Myself/DJDL");
            })
            .catch(() => {
              // on cancel
              this.$router.push("/Myself");
              return false;
            });
          return false;
        }
        $(".myself .page3").css("display", "block");
      }
      if (this.$route.path == "/Myself/LXWM") {
        $(".myself .page3").css("display", "block");
      }
      if (this.$route.path == "/Myself/BBXX") {
        $(".myself .page3").css("display", "block");
      }
      if (this.$route.path == "/Myself/DJDL") {
        $(".myself .page3").css("display", "block");
      }
      //保存用户路由页面的浏览位置
      if (
        this.$router.history.current.meta.scoll.y != undefined ||
        this.$router.history.current.meta.scoll.y != null
      ) {
        if (this.$router.history.current.meta.scoll.y != 0) {
          var heightDiv = this.$router.history.current.meta.height;
          $(".myself .page3 .page3_body>div").css({ height: heightDiv + "px" });
        }
        $(".myself .page3 .page3_body").scrollTop(
          this.$router.history.current.meta.scoll.y
        );
      }
    },
  },
  data() {
    return {
      loginShow: false,
    };
  },
};
</script>





<style>
.myself {
  background-color: #fbfbfb;
  min-height: 100%;
}
.myself .page1 {
  position: relative;
  height: 266px;
  opacity: 0.8;
  border-radius: 0px 0px 30px 30px/ 6px 6px;
  background: linear-gradient(#5b86e5, #36d1dc);
}
.myself .page1 .content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
.myself .page1 .content .wxName {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.myself .page1 .headPicture {
  height: auto;
  width: 100%;
}
.myself .page1 .headPicture .van-image {
  border-radius: 50%;
  border: 3px solid #fff;
}
.myself .page2 {
  position: relative;
  top: -40px;
  width: 92%;
  height: 280px;
  border-radius: 8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 2px 4px 11px rgba(0, 0, 0, 0.1);
}
.myself .page2 .bg {
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}
.myself .page2 .bg .menuBar li {
  padding-top: 20px;
  height: 2.1rem;
  line-height: 3rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
.myself .page2 .bg .menuBar li:nth-last-of-type(1) {
  border-bottom: none;
}
.myself .page2 .bg .menuBar li .van-icon {
  line-height: 24px;
  color: rgb(138, 138, 138);
}
.myself .page2 .bg .menuBar li .van-cell__title {
  padding-left: 5px;
}
.myself .page2 .bg .menuBar li .van-cell {
  padding: 0px;
  width: 100%;
  height: 100%;
  line-height: 1.6rem;
}

.myself .page2 .bg .menuBar li .van-cell span {
  font-size: 14px;
  font-weight: 600;
  color: rgb(138, 138, 138);
}
.myself .page2 .bg .menuBar li .van-cell .van-cell__value span {
  right: 1rem;
  font-size: 13px;
}
.myself .page3 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fbfbfb;
  z-index: 10;
}
.myself .page3 .page3_top {
  position: fixed;
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #5b86e5, #36d1dc);
}
.myself .page3 .page3_top i {
  color: #fff;
  font-size: 20px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.myself .page3 .page3_body {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  overflow: auto;
}
</style>