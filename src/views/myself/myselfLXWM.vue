<template>
  <div class="myselfLXWM">
    <div class="pg pg1">
      <div class="txt_1">联系我们</div>
      <div class="txt_2">Get in touch with us</div>
      <div class="txt_3"></div>
    </div>
    <div class="pg pg2">
      <div class="p1">
        <div class="tit tit_1">联系方式</div>
        <a href="tel:02386968868" style="color: #555">
          <div class="box box_1">
            <van-icon name="printer" />
            <div class="txt_1">联系电话:</div>
            <div class="txt_2">023-86968868</div>
          </div>
        </a>
        <div class="box box_2">
          <van-icon name="printer" />
          <div class="txt_1">E-mail:</div>
          <div class="txt_2">csglzy@cqgqt.com</div>
        </div>
      </div>
      <div class="p2">
        <div class="tit tit_1">查看路线</div>
        <div class="box box_1">
          <van-icon name="printer" />
          <div class="txt_1">团委坐标:</div>
          <div class="txt_2">学生素质教育中心3楼</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.myselfLXWM .pg1 {
  position: relative;
  width: 100%;
  height: 230px;
  color: #fff;
  background: linear-gradient(to right, #5b86e5, #36d1dc);
  text-align: center;
  font-size: 20px;
}
.myselfLXWM .pg1 .txt_1 {
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
}
.myselfLXWM .pg1 .txt_2 {
  position: absolute;
  top: 105px;
  left: 50%;
  transform: translateX(-50%);
}
.myselfLXWM .pg1 .txt_3 {
  position: absolute;
  width: 40px;
  border-bottom: 1px solid #fff;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
}
.myselfLXWM .pg2 {
  padding: 30px 20px 30px 20px;
  color: rgb(138, 138, 138);
}
.myselfLXWM .pg2 .p1 {
  padding-bottom: 15px;
  border-bottom: 2px dashed #777;
}
.myselfLXWM .pg2 .tit {
  color: #333;
  font-size: 20px;
  position: relative;
  margin-bottom: 17px;
}
.myselfLXWM .pg2 .box {
  position: relative;
  height: 60px;
}
.myselfLXWM .pg2 .box i {
  position: absolute;
  font-size: 30px;
  color: #888;
}
.myselfLXWM .pg2 .box .txt_1 {
  position: absolute;
  color: #555;
  left: 45px;
  font-size: 16px;
}
.myselfLXWM .pg2 .box .txt_2 {
  position: absolute;
  color: #555;
  left: 45px;
  font-size: 16px;
  top: 23px;
}
.myselfLXWM .pg2 .p2 {
  padding-top: 30px;
}
</style>