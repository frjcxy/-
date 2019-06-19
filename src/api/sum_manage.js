import request from '../utils/request'

//个人信息提交
export function usersubmit(data){
    return request({
        url:'/api/member/sso/saveData',
        method:'post',
        data:data
    })
}

//企业账号信息提交
export function getfirm(data){
    return request({
        url:'/api/member/sso/saveData',
        method:'post',
        data:data
    })
}