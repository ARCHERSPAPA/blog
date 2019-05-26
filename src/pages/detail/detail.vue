<template>
  <div id="index">
   
  <section class="user-info">
       <img :src="user.avatar" alt=""><router-link :to="`/user:${user.id}`"><span>&nbsp;&nbsp;&nbsp;{{user.username}}&nbsp;&nbsp;&nbsp;发布于{{friendlyDate(createdAt)}}</span></router-link>
       <h2>{{title}}</h2>
    <section v-html="markdown">
      {{markdown}}
    </section>
                                
                                

    </section>
    <router-view/>
  </div>
</template>

<script src="./detail.js">

</script>

<style lang="less" src="./detail.less">

</style>