<template>
  <div>
    <div class="login-box">
      <div class="role-title" >{{roleList[selectedRoleIndex].name}}登录</div>
      <div class="form">
        <div class="form-item">
          <i class="iconfont icon-user"></i>
          <el-input v-model="form.username" placeholder="请输入账号" maxlength='20'></el-input>
        </div>
        <div class="form-item">
          <i class="iconfont icon-mima"></i>
          <el-input v-model="form.password" placeholder="请输入密码" type="password"  @keyup.enter.native="login"></el-input>
        </div>
        <el-checkbox v-model="checked">记住用户名和密码</el-checkbox>
        <div class="button" @click="checkForm()">登 录</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/login.css'
import loginMixin from '@/mixins/loginMixin'

export default {
  mixins: [ loginMixin],
  data() {
    return {
    }
  },
  mounted() {
    this.selectedRoleIndex = 2
  },
  methods: {
  },
  head() {
    return {
      title: '后台登录-实验室管理系统'
    }
  }
}
</script>

<style>
body {
  background: url(../../assets/images/login-bg.png) no-repeat;
  background-size: cover;
}
</style>
