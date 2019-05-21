<template>
 <div id="register">
    

   <div class="layout-l">
<div class="usern">
  <label for="username-l"><img src="@/assets/user.png" alt=""></label>
<el-input v-model="username"  placeholder="请输入内容"  id='username-l'></el-input>
</div>

<div class="passw">
  <label for="password-l"><img src="@/assets/pass.png" alt=""></label>
  <el-input placeholder="请输入密码" v-model="password" show-password name="password" id="password-l">mima</el-input>
</div>
<div class="sex">
    <el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio>

</div>
<el-button round class="log-l"  @click="onregister" style="margin-left:150px">注册</el-button>
</div>
 

    <router-view/>
  </div>
</template>

<script src="./register.js">

</script>

<style lang="less" src="./register.less" scoped>

</style>