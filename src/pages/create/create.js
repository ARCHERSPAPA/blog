import blog from '../../api/blog'
export default {
    data(){
       return {
           textarea:'',
       textarea1:'',
       chk:'false',
       title:''
    }
    },
    methods:{
        create(){
            blog.createBlog({title:this.title,description:this.textarea,content:this.textarea1,atIndex:this.chk}).then(res=>{
                this.$router.push({path:`/detail/${res.data.id}`})
                console.log(res.data.id)
            this.$message.success(res.msg)})
           
        }
    }

} 