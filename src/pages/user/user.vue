<template>
<div>
    <h2>我的博客</h2> 
     <div class="content" v-for="blog in blogs">
      <figure class="user">
        <img :src="blog.user.avatar" alt>
        <p>
          <a href>{{blog.user.username}}</a>
        </p>
      </figure>
      <router-link :to="`/detail/${blog.id}`">
        <div class="text">
          <h3>
            {{blog.title}}
            <span>发表日期:{{friendlyDate(blog.createdAt)}}</span>
          </h3>
          <p>{{blog.description}}</p>
        </div>
      </router-link>
    </div>
<router-view/>

</div>


</template>
<style src="./user.less" lang="less">

</style>
<script src="./user.js">

</script>


