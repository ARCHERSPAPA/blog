import {Message} from 'element-ui'
import axios from 'axios'


axios.defaults.headers.post['Content-type']='application/x-www-form-urlencoded'
axios.defaults.baseURL='http://blog-server.hunger-valley.com'
axios.defaults.withCredentials= true
export default function request(url,type='get',data={}){
    return new Promise((resolve,reject) => {
        let option ={
            url,
            method:type
        }
        window.op=option
        if(type.toLowerCase()==='get'){
            option.params =data
        }else{
          option.data=data
        }
        axios(option).then(res =>{
            if(res.data.status === 'ok'){
                resolve(res.data)
            }else{
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err =>{
            Message.error('网络异常')
            reject({msg:'yichang'})
        })

    })
}