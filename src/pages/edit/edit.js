import blog from '../../api/blog'
window.blog=blog
export default {
    data(){
       return {
           textarea:'',
       textarea1:'',
       chk:'false',
       title:''
    }
    },
    
    created(){
            console.log(this.$route.params.blogId)
            this.blogId=this.$route.params.blogId.substr(1,9)
            blog.getDetail({blogId:this.blogId}).then(res=>{
            this.textarea=res.data.description
            this.textarea1=res.data.content
            this.chk=res.data.atIndex
            this.title=res.data.title
                console.log(res)
            this.$message.success(res.msg)})
           
        },
    methods:{
onedit(){
    blog.updataBlog({blogId:this.blogId},{title:this.title,description:this.textarea,content:this.textarea1,atIndex:this.chk}).then(res=>{
        console.log(res)
        this.$router.push({path:'/my'})
    })
}
    }
} 