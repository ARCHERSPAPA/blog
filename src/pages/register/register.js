import { mapActions } from "vuex";

export default {
    data() {
      return {
    username:'',
    password:'',
    radio:'',
    }
  },
  methods: {
    ...mapActions(['register']),

    onregister() {
      this.register({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: '/'})
        })
    }
  }
}