<template>
  <div id="index">
   
  <section class="user-info">
       <img :src="user.avatar" alt="">
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