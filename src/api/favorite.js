import request from '../utils/request'

//获取收藏夹数据
export function getscList(){
    return request({
        url:"/api/member/collection/listProduct",
        method:'get'
    })
}

//取消收藏
export function delsc(id){
    return request({
        url:  `/api/member/collection/deleteProduct?productIds=${id}`,
        method:'get'
    })
}