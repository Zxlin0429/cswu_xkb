<template>
  <div class="myselfGRXX">
    <van-form style="padding-top: 5px">
      <van-field
        v-model="this.Common.User.peopleName"
        name="姓名"
        label="姓名"
        placeholder="请输入真实姓名"
      />
      <van-field
        v-model="this.Common.User.institute[2]"
        is-link
        readonly
        label="专业班级"
        placeholder="请选择所在专业班级"
        @click="myselfGRXX_show_1 = true"
      />
      <van-popup v-model="myselfGRXX_show_1" round position="bottom">
        <van-picker
          title="专业班级"
          show-toolbar
          :columns="institute"
          @confirm="onConfirm_1"
          @cancel="onCancel_1"
        />
      </van-popup>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >确认</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
// import { Toast } from "vant";
export default {
  data() {
    return {
      myselfGRXX_show_1: false,
      institute: [
        {
          text: "大数据与信息产业学院",
          children: [
            {
              text: "计算机信息管理",
              children: [{ text: "信管A1801" }, { text: "信管A1802" }],
            },
            {
              text: "大数据",
              children: [{ text: "大数据A1801" }, { text: "大数据A1802" }],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onConfirm_1(value) {
      this.Common.User.institute = value;
      this.myselfGRXX_show_1 = false;
    },
    onCancel_1() {
      this.myselfGRXX_show_1 = false;
    },
  },
};
</script>