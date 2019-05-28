
<template>
  <div id="index">
    <div class="layout-l">
      <div class="usern">
        <label for="username-l">
          <img src="@/assets/user.png" alt>
        </label>
        <el-input v-model="username" placeholder="请输入用户名" id="username-l"></el-input>
      </div>
      <div class="passw">
        <label for="password-l">
          <img src="@/assets/pass.png" alt > 
        </label>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
          name="password"
          id="password-l"
          @keyup.enter.native="onlogin"
        >mima</el-input>
      </div>
      <el-button round class="log-l" @click="onlogin">登录</el-button>
      <el-button round class="log-l">
        <router-link to="/register">注册</router-link>
      </el-button>
    </div>

    <router-view/>
  </div>
</template>

<script src="./login.js">
</script>

<style lang="less" src="./login.less"  scoped>
</style>