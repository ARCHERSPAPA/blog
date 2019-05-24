<template>
  <div id="index">
    <!-- <div class="content">
    <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption> 
        </figure>
        <h3>{{blog.title}}<span> {{(blog.createdAt)}}</span></h3> 
        <p>{{blog.description}}</p>
      </router-link>
  
    </div>-->

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
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="onPageChange"
      style="float:right"
    ></el-pagination>
  </div>
</template>

<script src="./index.js">
</script>

<style lang="less" src="./index.less" >
</style>