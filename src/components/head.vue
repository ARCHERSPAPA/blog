<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
  <template v-if="isLogin">
<div class="head">
    <h2>这里是 <sub>夏风</sub> <sub >休闲blog</sub></h2>
    <div class="user" style="margin-right:6%">
       <el-dropdown @command="handleCommand" >
  <span class="el-dropdown-link">
    <a href=""><img :src="user.avatar" :alt="user.username" :title="user.username"></a><i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown"  >
    <el-dropdown-item command="a">注销</el-dropdown-item>
    <el-dropdown-item command="my">我的blog</el-dropdown-item>
    <el-dropdown-item command="geren">个人设置</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
      <a href="">{{user.username}}</a>
    </div>
    <div>
     
    </div>
    
  </div>
  </template>
  <template  v-if="!isLogin" class="rig" >
    <el-button class="bt"> <router-link to="/login"><span>登录</span> </router-link></el-button>
    <el-button class="bt"><router-link to="/register"><span>注册</span></router-link></el-button>
  </template>
  </header>
</template>

<script>
 import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
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

    
    handleCommand(command) {
      console.log(command)
     if(command==='a'){
         this.logout().then(()=>{this.$router.push({path: '/'})
    }
    )
    
     }
        if(command==='my'){
        this.$router.push({path: '/my'})
     }
     
       if(command==='geren'){
         this.$router.push({path: '/detail'})
    
    
     }
  
      },
      
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.login{
  background: url(http://img.soogif.com/j0IQe01cGKokSUiT430bLRxUjhJVqQvg.gif);
   
  background-size: cover;
}
.bt{
  padding:9px
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
a {
  color: #42b983;
};
el-button{
padding-left: 70%
}
.user{
 position: absolute;
 right: 0;
top:10px
}
.user img{
  width: 70px
}
.user span{
  display: inline-block;

  border-radius: 45%;
  overflow: hidden;
  width: 50px;
  height: 50px;
}

</style>
