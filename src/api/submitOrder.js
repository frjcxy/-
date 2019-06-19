import request from '../utils/request'
//获取联系人地址
export function getpopo(){
    return request({
        url:"/api/member/address/list",
        method:'get'
    })
}