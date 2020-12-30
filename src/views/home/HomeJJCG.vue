<template>
  <div class="homeJJCG">
    <div class="page page1">
      <div class="li_page1">
        <van-image
          round
          width="60px"
          height="60px"
          :src="this.$parent.modeImgList[2]"
        />
        <div class="t">聚焦城管</div>
      </div>
    </div>
    <!-- 聚焦城管新闻栏目 -->
    <div class="page page3">
      <div
        class="home_page3_li"
        v-for="(i, index) in HomeJJCGPage3Li"
        :key="index"
      >
        <a :href="i.url">
            <van-image v-if="i.img" :src="i.img" />
            <van-image v-if="!i.img" :src="ImgList" />
          <div class="txt">{{ i.txt }}</div>
          <div class="ico">
            <span>{{ i.from }}</span>
            <van-icon name="clock" />
            <span>{{ i.time }}</span>
          </div>
        </a>
      </div>
    </div>
    <div class="page page4">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ImgList: //模块图片
        require('../../assets/home/home_jjcg_jjcg.jpg')
      ,
      HomeJJCGPage3Li: [
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=2652353171&idx=1&sn=9ca049ddb939fd192733d99544fc1be7&chksm=f1a2dc3ec6d55528c3b4bb95a33448657960f167a2f3058b298657111452a191944592ee4856&mpshare=1&scene=23&srcid=1221b4yPEeSqJNCquEtCPVO4&sharer_sharetime=1608516948346&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "聚焦城管|我们为什么不能忘记？",
          from: "校团委宣传部",
          time: "2020-12-14",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=2652353097&idx=1&sn=2ecfdb23400382277d90ac01c6a09ceb&chksm=f1a2dce4c6d555f25b5a2962606f14b704a6a095568dc31b334009c04fd03e89c832b2d3b889&mpshare=1&scene=23&srcid=1221QNTtO6OmTYLNe8pVcfDQ&sharer_sharetime=1608517058692&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "聚焦城管|凝聚青春正能量，助力扶贫勇担当",
          from: "校团委",
          time: "2020-12-13",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=2652352311&idx=1&sn=02cd43811f9f146f4bfd687e5ded225e&chksm=f1a2c19ac6d5488cf04f42843293b3faf256b7c4e489c3777ee2e12c776063d5c0ed45946419&mpshare=1&scene=23&srcid=1221ISaDj92feLHUNK5kVyM6&sharer_sharetime=1608517116659&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "聚焦城管|求学、工作、结婚……都相关，为啥是今天？",
          from: "校团委宣传部",
          time: "2020-12-04",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=2652351815&idx=1&sn=a14d51c05489eab3d69c61d38b78514c&chksm=f1a2c3eac6d54afc19bf61f5466fd0f41b6d336ddb4728e82f0f42e13612549b5c49e39c3eda&mpshare=1&scene=23&srcid=12213df14CnCJJebwkWsiJWN&sharer_sharetime=1608517187735&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "聚焦城管|书籍回收，环保同行",
          from: "校团委",
          time: "2020-11-29",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=2652350783&idx=1&sn=0afe405ec3a14ecf8e25352e3d32ab3d&chksm=f1a2c792c6d54e84e5585bc9a0056f696844a658f8a96f29932973b4ec7d82fe3b8a2ae8e452&mpshare=1&scene=23&srcid=12210igk6YD2fYGiP4Kmwiow&sharer_sharetime=1608517245040&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "聚焦城管|纪念“11·27大屠杀”71周年，每个人都应铭记的历史",
          from: "校团委",
          time: "2020-11-27",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=2652350501&idx=1&sn=f6b76c72cc7b8797a3fd33c3274a5986&chksm=f1a2c688c6d54f9e535255265f4317da1d6b38e89225c627b2b090e86602dd86ec0b9a57ffad&mpshare=1&scene=23&srcid=1221u0MiREjZMkl8XS7HJUU8&sharer_sharetime=1608517300249&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "聚焦城管|团学干部大比武，秀出十八般“武艺”",
          from: "校团委",
          time: "2020-11-19",
        },
      ],
    };
  },
};
</script>
<style>
.homeJJCG .page1 {
  width: 100%;
  height: 250px;
  position: relative;
  background-image: url("http://zxlin.top/img/20201216/home_qnzs_bg.jpg");
  background-repeat: no-repeat;
	background-size: 100% 100%;
	-moz-background-size: 100% 100%;
}
.homeJJCG .page1 .li_page1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.homeJJCG .page1 .li_page1 .t {
  color: #fff;
  padding-top: 6px;
}
.homeJJCG .page3 .txt{
    text-align: left;
    width: 60%;
}
.homeJJCG .page3 .home_page3_li{
    min-height: 140px;
}
.homeJJCG .page3 .van-image{
    position: absolute;
    top: 20px;
    right: 15px;
    width: 32%;
    height: 100px;
}
</style>