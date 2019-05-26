<template>
  
<div id="my">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item clearfixd" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        
        <div class="con">
          <div class="date">
            <span class="year">{{splitDate(blog.createdAt).year}}年</span>
                <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="day">{{splitDate(blog.createdAt).date}}日</span>
      
        
        </div>
           <h3>{{blog.title}}</h3>
        <p>:{{blog.description}}</p></div>
        
       <el-button @click.prevent="del(blog.id)">删除</el-button>
         <el-button><router-link :to="`/edit:${blog.id}`">编辑</router-link></el-button>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./my.js">

</script>

<style lang="less" src="./my.less">

</style>