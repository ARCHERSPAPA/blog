<template>
  <header :class="{'login': isLogin, 'no-login': !isLogin}">
  <template v-if="isLogin">
<div class="head">
   <div @click="createIs"><h2>这里是 <sub>夏风</sub> <sub >休闲blog</sub></h2></div>
    <div class="ctr-h">
      <router-link to="/create"><img src="../assets/create.png" alt="" class="bt-h"></router-link> 
    </div>
    <div class="user" style="margin-right:6%">   
       <el-dropdown @command="handleCommand" >
  <span class="el-dropdown-link">
    <a href=""><img :src="user.avatar" :alt="user.username" :title="user.username"></a><i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown"  >
    <el-dropdown-item command="a">注销</el-dropdown-item>
    <el-dropdown-item command="my"> 我的blog</el-dropdown-item>
    <el-dropdown-item command="geren">个人设置</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
      <a href="">{{user.username}}</a>
    </div>
    <div>
     
    </div>
    
  </div>
  
  </template>
  <template  v-if="!isLogin"  >
    <div class="rig"><el-button class="bt"> <router-link to="/login"><span>登录</span> </router-link></el-button>
    <el-button class="bt"><router-link to="/register"><span>注册</span></router-link></el-button></div>
    <p class="text-title"><i>夏天的风</i></p>
    <p class="text-title1"><i>是否还能想起</i></p>
    <p class="text-title2"><em>曾经那个少年</em></p>
    <p class="text-title3">?</p>
    <div class="playm" :class="{'isplay': isplay, 'no-isplay': !isplay}">
     <img src="../assets/zt.png" alt="" @click="play"   class="pl">
     <img src="../assets/bf.png" alt="" @click="pause"  class="zt">
  </div>
  </template>
  </header>
</template>

<script>
 import { mapGetters, mapActions } from 'vuex'
 var mus= new Audio()
          mus.src='http://110.185.115.22/amobile.music.tc.qq.com/C400002URiHF2KamxI.m4a?guid=4239294560&amp;vkey=A8F5CF2FED52B37D5A9C0421052A6CC6115E572599A5E2C45728D4E93184B7CDE6D15C846FA35596ADD86675C69C15AFD13AF376A98D730F&amp;uin=4774&amp;fromtag=66"><source src="http://110.185.115.22/amobile.music.tc.qq.com/C400002URiHF2KamxI.m4a?guid=4239294560&amp;vkey=A8F5CF2FED52B37D5A9C0421052A6CC6115E572599A5E2C45728D4E93184B7CDE6D15C846FA35596ADD86675C69C15AFD13AF376A98D730F&amp;uin=4774&amp;fromtag=66"'
          
export default {
  data(){
    return{
      isplay:true
    }
     
  },
   computed: {
      ...mapGetters([
        'isLogin',
        'user'
        ])
    },

    created() {
      this.checkLogin()
        
    },

    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
        ]),
       play(){
          mus.play()
          this.isplay=false
       },
        pause(){
          mus.pause()
          this.isplay=true
       },
        createIs(){
          console.log(this.$route.path)
         if(this.$route.path==='/create'){
      this.$confirm('是否退出本次编辑？', {
      
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(()=>{
          this.$message({
            type:'success',
            message:'欢迎回到夏风小站~'
          })
          this.$router.push({ path: `/`})
        })
         } 
        },
        
    
    handleCommand(command) {
      console.log(this)
     if(command==='a'){
         this.logout().then(()=>{this.$router.push({path: '/'})
    }
    )
    
     }
        if(command==='my'){
      this.$router.push({path: `/my`})
        
     }
     
       if(command==='geren'){
         this.$router.push({path: '/detail'})
    
    
     }
  
      },
      
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='less'>
.isplay{
  .zt{
    display: none    
  }
}
.no-isplay{
  .pl{
    display: none    
  }
}
.playm{
  position: absolute;
  right: 10px;
  top:1px;
  img{
    width: 30px
  }
}
@import '.././assets/animate.css';
.text-title{
  animation: 2s fadeInDown linear ;
  text-align: center
}
.text-title1{
  animation: 4s fadeInDown linear ;
    
  text-align: center
}
.text-title2{
  animation: 8s fadeOutDown  ;
    margin-top: 30px;
    margin-left: 300px;
  text-align: center
}
.text-title3{

    margin-top: 30px;
font-size: 50px;
  text-align: center
}
 a{
  color: rgba(63, 57, 57, 0.8);
  text-decoration: none
}
p{
  color: rgba(1,1,1,0.6)
}
.bt-h:hover{
  box-shadow: 4px 4px 3px 4px rgba(1,1,1,0.6)
}

.no-login{
  button{
    float: left!important;
  }
 float: left!important;
   height: 300px;
 



}
.bt{
  padding:9px;
 
 
}
.rig{
  margin: 0 auto
}
.bt span{
  padding: 9px 7px}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  
  margin: 0 10px;
}

el-button{
padding-left: 70%
}
.user{
 position: absolute;
 right: 0;
top:10px
}
.user img{
  display: block;
  width: 70px
}
.ctr-h img{
  width: 50px;
  float: right;
  margin-right: 12%;
  margin-top:-40px
}
.user span{
  display: inline-block;

  border-radius: 47%;
  overflow: hidden;
  width: 48px;
  height: 48px;
}

</style>
