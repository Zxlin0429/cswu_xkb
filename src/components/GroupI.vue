<template>
    <div class="group_i">
        <div class="tit">
        {{msg1}}
        <br />
        {{msg2}}
      </div>
      <p>{{msg3}}</p>
      <div class="i">
        <van-icon name="arrow" size="18" />
        <van-icon name="arrow" size="18" />
        <van-icon name="arrow" size="18" />
        <van-icon name="arrow" size="18" />
        <van-icon name="arrow" size="18" />
        <van-icon name="arrow" size="18" />
        <van-icon name="arrow" size="18" />
      </div>
    </div>
</template>
<script>
export default {
  name: 'GroupI',
  props: {
    msg1: String,
    msg2: String,
    msg3: String
  }
}
</script>

<style>
.group_i .tit {
  width: auto;
  margin: 42px 32px 10px 32px;
  font-size: 24px;
  font-family: MRTL;
}
.group_i p {
  width: auto;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 300;
}
.group_i .i {
  margin-left: 32px;
  position: relative;
}
.group_i .i > i:nth-of-type(1) {
  position: relative;
  animation: groupPage3I 1s 0s linear infinite normal both;
}
.group_i .i > i:nth-of-type(2) {
  position: relative;
  left: -10px;
  animation: groupPage3I 1s 0.1s linear infinite normal both;
}
.group_i .i > i:nth-of-type(3) {
  position: relative;
  left: -20px;
  animation: groupPage3I 1s 0.2s linear infinite normal both;
}
.group_i .i > i:nth-of-type(4) {
  position: relative;
  left: -30px;
  animation: groupPage3I 1s 0.3s linear infinite normal both;
}
.group_i .i > i:nth-of-type(5) {
  position: relative;
  left: -40px;
  animation: groupPage3I 1s 0.4s linear infinite normal both;
}
.group_i .i > i:nth-of-type(6) {
  position: relative;
  left: -50px;
  animation: groupPage3I 1s 0.5s linear infinite normal both;
}
.group_i .i > i:nth-of-type(7) {
  position: relative;
  left: -60px;
  animation: groupPage3I 1s 0.6s linear infinite normal both;
}
@keyframes groupPage3I {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  6% {
    opacity: 1;
  }
  61% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>