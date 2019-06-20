import request from '../utils/request'

//发送验证码请求
export function getyanzhengma(telephone){
    return request({
        ulr:"/api/member/sso/getAuthCode"+telephone,
        method:"get"
    })
}