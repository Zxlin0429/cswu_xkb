<template>
  <div class="myselfDJDL">
    <div class="pg pg1">
      <div>
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="学号"
            label="学号"
            placeholder="请输入学号"
            :rules="[{ required: true, message: '请填写学号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin-top: 40px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onSubmit() {
      this.Common.User.login = true;
      this.$parent.loginShow = this.Common.User.login;
      this.$router.push("/Myself");
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
<style>
.myselfDJDL {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/myself/login_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;
}
.myselfDJDL .pg1 > div {
  width: 80%;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.myselfDJDL .pg1 > div .van-cell {
  line-height: 33px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
.myselfDJDL .pg1 > div .van-cell:nth-of-type(2)::after{
    display: none;
}
.myselfDJDL .pg1 > div .van-cell .van-cell__title {
  color: #fff;
}
.myselfDJDL .pg1 > div .van-cell .van-cell__value,
.myselfDJDL .pg1 > div .van-cell .van-field__control {
  color: #fff;
}
.myselfDJDL .pg1 > div .van-cell::after {
  left: 0;
  right: 0;
}
.myselfDJDL .pg1 > div .van-button--round {
  border-radius: 1px;
}
</style>