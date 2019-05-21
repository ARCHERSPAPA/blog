import req from '@/helpers/axios'

const URL={
    GET_lIST:'/blog',
    GET_DEDATAL:'/blog/:blogId',
    CREATE:'/blog',
    UPDATA:'/blog/:blogId',
    DELETE:'/blog/:blogId'
}
export default{
    getBlogs({page=1,userId,atIndex}={page:1}){
        return req(URL.GET_lIST,'get',{page,userId,atIndex})
    },
    getIndexBlogs({page=1}={page:1}){
        return this.getBlogs({page,atIndex:true})
    },
    getBlogsByUserId(userId,{page=1,atIndex}={page:1}){
        return this.getBlogs({userId,page,atIndex})
    },
    getDetail({blogId}){
        return req(URL.GET_DEDATAL.replace(':blogId',blogId))
    },
    updataBlog({blogId},{title,content,description,atIndex}){
        return req(URL.UPDATA.replace(':blogId',blogId),'PATCH',{title,content,description,atIndex})
    },
    deleteBlog({blogId}){
        return req(URL.DELETE.replace(':blogId',blogId),'DELETE')
    },
    createBlog({title='',content='',description='',atIndex=false}={title:'',content:'',description:'',atIndex:false}){
        return req(URL.CREATE,'POST',{title,content,description,atIndex})
    }
}