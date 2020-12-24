<template>
  <div class="homeTJZJ">
    <div class="page page1">
      <div class="li_page1">
        <van-image
          round
          width="60px"
          height="60px"
          src="http://zxlin.top/img/20201216/home_page2_2.jpg"
        />
        <div class="t">团聚指尖</div>
      </div>
    </div>
    <!-- 团聚指尖新闻栏目 -->
    <div class="page page3">
      <div
        class="home_page3_li"
        v-for="(i, index) in HomeTJZJPage3Li"
        :key="index"
      >
        <a :href="i.url">
            <van-image v-if="i.img" :src="i.img" />
            <van-image v-if="!i.img" src="http://zxlin.top/img/20201216/home_tjzj_tjzj.jpg" />
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
export default {
  data() {
    return {
      HomeTJZJPage3Li: [
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=504852376&idx=1&sn=850779cecf72379b3eb345e91855fffc&chksm=71a2013546d588237f621ef504a1818d9b1dad9555082e34a520d9235c94bafde38f3d65386a&mpshare=1&scene=23&srcid=12211cKAu97D1Os1mbOK3b4S&sharer_sharetime=1608514132397&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          // img: "https://mmbiz.qpic.cn/mmbiz_jpg/ESZXy0HjMqbFwbaNouFKicMjibJ6QDm4TZwDRQAOE4DiaINf62dTgOUfPiaYiacsy61dPknSBsoib99ibCceyibicCiaLRcQ/640",
          txt: "团聚指尖|聚焦团委",
          from: "校团委",
          time: "2018-09-06",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=504852381&idx=1&sn=bb27ff40e07e3a86aff1c70d3c001131&chksm=71a2013046d58826c92545198974c49b90ad50d404c749154a2d739c62372410c2787f31c7b8&mpshare=1&scene=23&srcid=1221UK0w5mineHBOTA4VqLWh&sharer_sharetime=1608514579676&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          // img: "https://mmbiz.qpic.cn/mmbiz_jpg/ESZXy0HjMqbFwbaNouFKicMjibJ6QDm4TZTNUUibzNwzEot8tpLVDdDzultN0naqTKV52wun9oDNQdOuYkxh7bhGg/640",
          txt: "团聚指尖|学生会这些事",
          from: "校团委",
          time: "2018-09-06",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=504852383&idx=1&sn=599ebd81a08a2f2a0686c7bd29d7e7e3&chksm=71a2013246d588247a186ca6e97d92232853cd5ea89988ec910dd12c9dc99484d7346d86b763&mpshare=1&scene=23&srcid=1221HDWIZxRMUdjlg8KFclmp&sharer_sharetime=1608514843752&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "团聚指尖|不负青春，来我大社团？",
          from: "校团委",
          time: "2018-05-31",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=504852386&idx=1&sn=2501f4ffc85be854bda65d604e4e6592&chksm=71a2010f46d5881912763959ab2dc98e9a766c57f45ef402e6c9d21174327f5b8e41cd58cd0e&mpshare=1&scene=23&srcid=1221SeZkPJYu5HWhxNgLdvUM&sharer_sharetime=1608514968177&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "团聚指尖|无艺术，不青春",
          from: "校团委",
          time: "2018-06-01",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=504852385&idx=1&sn=79a48918aa04df30eb2809d6230c74bb&chksm=71a2010c46d5881a381e622a6b6901f9acf43ade8152927c48fb9a892cb1a88eebadb81a2962&mpshare=1&scene=23&srcid=1221OT3XHQpPIDRD2lrhx9rI&sharer_sharetime=1608515025995&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "团聚指尖|敲黑板！青春同心·志愿同行",
          from: "校团委",
          time: "2020-05-31",
        },
        {
          url: "http://mp.weixin.qq.com/s?__biz=MzI2MzA1MjIyNg==&mid=504852378&idx=1&sn=52076429e756f1a92484f91f3caae54f&chksm=71a2013746d58821bc75303928cc3d819446f46dd3a6f786c71a3a495212a8a48a8d62ccafb6&mpshare=1&scene=23&srcid=1221gQLPwfdCdwn6094l7Yom&sharer_sharetime=1608515080987&sharer_shareid=f275983526fc34ace88d2215c18a7d7a#rd",
          txt: "团聚指尖|不一样的公寓自律委员会",
          from: "校团委",
          time: "2020-09-06",
        },
      ],
    };
  },
};
</script>
<style>
.homeTJZJ .page1 {
  width: 100%;
  height: 250px;
  position: relative;
  background-image: url("http://zxlin.top/img/20201216/home_qnzs_bg.jpg");
  background-repeat: no-repeat;
	background-size: 100% 100%;
	-moz-background-size: 100% 100%;
}
.homeTJZJ .page1 .li_page1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.homeTJZJ .page1 .li_page1 .t {
  color: #fff;
  padding-top: 6px;
}
.homeTJZJ .page3 .txt{
    text-align: left;
    width: 60%;
}
.homeTJZJ .page3 .home_page3_li{
    min-height: 140px;
}
.homeTJZJ .page3 .van-image{
    position: absolute;
    top: 20px;
    right: 15px;
    width: 32%;
    height: 100px;
}
</style>