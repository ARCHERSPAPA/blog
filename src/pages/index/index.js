import blog from '@/api/blog.js'
import{ mapActions, mapGetters} from 'vuex';


export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1,
      user:{},
     
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      
      ])
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({ page: this.page }).then(res => {
      console.log(res)
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
   
  },

  methods: {
    onPageChange(newPage) {
      console.log(newPage)
      blog.getIndexBlogs({ page: newPage }).then(res => {
        // console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: '/', query: { page: newPage}})
      })
    }
  }
}