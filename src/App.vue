<template>
  <div id="app">
   <Header></Header>
   <Main>
      <router-view/>
   </Main>
   <Footer class="footer"></Footer>

  </div>
</template>

<script>
import Header from '@/components/head.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components:{
Header,
Footer


  }
}

</script>

<style >
*{
  margin:0;
  padding: 0
}

html,body,#app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;

}
#app{
   display: grid;
   grid-template-columns: 10% auto 10%;
   grid-template-rows: auto 1fr auto;
   grid-template-areas: "header header header"
                         ". main ."
                         "footer footer footer";
}
Header{
  grid-area: header;
 
  padding-right: 10%;
  background: url(http://img.soogif.com/WLHTIW6yr8XOHtxAzHZIjhKVkXu8TBp4.gif);
  background-repeat: no-repeat;
  background-size: cover;
  padding:20px;
  padding-left: 10%;
}
Main{
  grid-area: main;
  background: rgba(246, 249, 250, 0.5)
}
.footer{
  grid-area: footer;
  background: rgba(216, 227, 230, 0.5);
  padding: 10px;
  text-align: center
}
</style>
