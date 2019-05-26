import blog from '@/api/blog'
import { mapGetters, mapActions } from 'vuex'
window.blog=blog
export default {
  data () {
    return {
      blogs: [],
     
      page: 1,
      total: 0
    }
  },
  computed:{
    ...mapGetters([
        'isLogin',
        'user'
        ])
  },
  created() {
    console.log(this.user.id)
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
      
      })
  },

  methods: {
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: `/my`, query: { page: newPage}})
      })
    },

    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
     
    },
    del(blogId) {
      console.log(blogId)
      this.$confirm('是否删除？', {
      
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      })
        .then(() => {
        return blog.deleteBlog({blogId})
        })
        .then(()=>{
          this.$message({
            type:'success',
            message:'删除成功'
          })
          this.$router.push({ path: `/my`})
        })
         
      
       
    }
  }
}