<template>
  <div>
    <van-tabbar v-model="activeTableBottom" route>
      <van-tabbar-item icon="bell" to="/">发布大厅</van-tabbar-item>
      <van-tabbar-item icon="fire" to="/Work">校快办</van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/Group">团委</van-tabbar-item>
      <van-tabbar-item icon="send-gift" to="/Activity">校活动</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/Myself">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTableBottom: 0,
    };
  },
};
</script>