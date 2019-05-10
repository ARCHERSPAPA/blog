import req from '../../helpers/axios'
const URL={
    register:'/auth/register',
    login:'/auth/login',
    logout:'/auth/logout',
    get_info:'/auth'
}
export default{
    register({username,password}){
        return req(URL.register,'post',{username,password})
    },
    login({username,password}){
        return req(URL.login,'post',{username,password})
    },
    logout(){
        return req(url.logout)
    },
    loginfo(){
        return req(url.get_info)
    }
    
}