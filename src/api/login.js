import request from '../utils/request'
//登陆数据
export function logi(username,password,) { 
    return request({
        url:  '/api/member/sso/login',
        method:"post",
        data:{
            username,
            password
        }
    })
 }

 //验证码请求
 export function getyanzhengma(telephone) {
     return request({
         url:"/api/member/sso/getAuthCode"+telephone,
         method:"get"
     })
   }