import request from '../utils/request'
//登陆数据
export function logi(user,password) { 
    return request({
        url: '/api/member/sso/login'+user+password,
        method:"post"
    })
 }

 //验证码请求
 export function getyanzhengma(iphone) {
     return request({
         url:"/api/member/sso/getAuthCode"+iphone,
         method:"get"
     })
   }