<template>
  <div id="create">
   <h1>新的博客</h1>
<p>文章标题</p>
<el-input
  placeholder="请输入内容"
  v-model="title"
  maxlength="10"
  clearable>
</el-input>
   <p>内容简介</p>
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="1000"
  show-word-limit
  clearable
>
</el-input>
<p>文章内容</p>
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea1"
  maxlength="1000" id="content-t"
  show-word-limit
>
</el-input>
 <el-button type="success" icon="el-icon-check" circle style="float:right; margin-right:3%; margin-top:6px" @click.native="create">创建</el-button>
 <p><label for='chk1'>是否首页</label> 
   <el-switch
  v-model="chk"
  active-color="#13ce66"
  inactive-color="#ff4949" id="chk1">
</el-switch></p>

    <router-view/>
  </div>
  
</template>

<script src="./create.js">

</script>

<style lang="less" src="./create.less" >

</style>