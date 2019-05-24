import { mapActions } from "vuex";

export default {
    data() {
      return {
    username:'',
    password:''
    }
  },
  methods: {
    ...mapActions(['login']),

    onlogin() {
      this.login({username: this.username, password: this.password})
        .then(()=>{
          console.log(this)
          this.$router.push({path: '/'})
        })
    }
    
  }
}