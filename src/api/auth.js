import req from '@/helpers/axios'
const URL={
    register:'/auth/register',
    login:'/auth/login',
    logout:'/auth/logout',
    GET_INFO:'/auth'
}
export default {
    register({username,password}){
        return req(URL.register,'post',{username,password})
    },
    login({username,password}){
        return req(URL.login,'post',{username,password})
    },
    logout(){
        return req(URL.logout)
    },
    getInfo() {
        return req(URL.GET_INFO)
      }
} 