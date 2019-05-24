import blog from '../../api/blog'
window.route=this.$route
export default {
    data(){
        return{
            blogs:[],
            user:{},
            page:1
        }
    },
    created(){
        console.log($route)
        this.user_id=this.$route.params.user_id
         blog.getBlogsByUserId(this.user_id,{page:this.page}).then(res=>{
             console.log(res)
             this.blogs=res.data
             this.page=res.page
         })
    }
}