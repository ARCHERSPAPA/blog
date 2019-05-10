<template>
  <div id="index">
   
    <p>nihaoa</p>
    <el-button type="primary">主要按钮</el-button>
    <el-button :plain="true" @click="open">成功</el-button>
    <router-view/>
  </div>
</template>

<script src="./index.js">

</script>

<style lang="less" src="./index.less">

</style>