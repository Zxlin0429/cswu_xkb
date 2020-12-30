<template>
  <div class="myselfWDJF">
    <div class="pg pg1">
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
        <div class="score">当前总积分:{{ this.Common.User.score }}</div>
      </div>
    </div>
    <div class="pg pg2">
      <div class="box box_1">
        <div class="tit">什么是积分？</div>
        <div class="txt">
          积分是团委推出的专属的一种虚拟货币，它能在学期期末中兑换素质拓展分（具体兑换公式为：200积分=1素质拓展分，一学期最多兑换2素质拓展分），作为五四评优、优秀团员等评比中的加分凭证。
        </div>
      </div>
      <div class="box box_2">
        <div class="tit">我怎么获得积分？</div>
        <div class="txt">
          <table>
            <tr>
              <th>方式</th>
              <th>积分</th>
              <th>限制</th>
            </tr>
            <tr>
              <td>阅读青年之声</td>
              <td>+2</td>
              <td>1次/同一篇只加一次</td>
            </tr>
            <tr>
              <td>阅读团聚指尖</td>
              <td>+2</td>
              <td>1次/同一篇只加一次</td>
            </tr>
            <tr>
              <td>参加校活动</td>
              <td>+5</td>
              <td>1次/同一个只加一次</td>
            </tr>
            <tr>
              <td>阅读新闻</td>
              <td>+2</td>
              <td>1次/日</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="box box_3">
        <div class="tit">积分会过期吗？</div>
        <div class="txt">
          积分是团委提供的一种福利道具，存在使用有效期。每学期的校历放假日期的24点为积分到期日。
        </div>
      </div>
      <div class="box box_4">
        <div class="tit">其他</div>
        <div class="txt">
          为保证所有同学的正当利益，我们会严厉打击违规行为。对于恶意盗刷积分的行为，我们将对作弊者进行积分清零或封禁。对行为恶劣者，我们会保留启动学校校规追究等一切权利。
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.myselfWDJF {
  background-color: #f1f1f1;
  min-height: 100%;
}
.myselfWDJF .pg1 {
  position: relative;
  width: 100%;
  height: 216px;
  color: #fff;
  background-image: url("../../assets/myself/myself_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 266px;
  -moz-background-size: 100% 266px;
  background-position: 0% 100%;
  text-align: center;
  font-size: 20px;
}
.myselfWDJF .pg1 .content {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
.myselfWDJF .pg1 .content .wxName {
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.myselfWDJF .pg1 .content .score {
  font-size: 15px;
  margin-top: 19px;
}
.myselfWDJF .pg1 .headPicture {
  height: auto;
  width: 100%;
}
.myselfWDJF .pg1 .headPicture .van-image {
  border-radius: 50%;
  border: 3px solid #fff;
}
.myselfWDJF .pg2 {
  width: 100%;
  height: auto;
  position: relative;
}
.myselfWDJF .pg2 .box {
  width: 100%;
  margin-top: 9px;
  height: auto;
  position: relative;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
}
.myselfWDJF .pg2 .box .tit {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
}
.myselfWDJF .pg2 .box .txt {
  padding: 10px 10px 20px 10px;
}
.myselfWDJF .pg2 .box_2 table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.myselfWDJF .pg2 .box_2 table,
.myselfWDJF .pg2 .box_2 table tr td,
.myselfWDJF .pg2 .box_2 table tr th
 {
  border: 1px solid #333;
}
</style>