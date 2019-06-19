import request from '../utils/request'

//获取商品信息
export function useridproduct(id,id1){
    return request({
        url:`/api/produce/getProductDetail?categoryId=${id}&productId=${id1}`,
        method:'get'
    })
}

//加入购物车
export function addcart(data){
    return request({
        url:"/api/member/cart/add",
        method:"post",
        data:data
    })
}

//收藏商品
export function shoucang(productId){
    return request({
        url:`/api/member/collection/addProduct?ids=${productId}`,
        method:"post",
        productId:productId
    })
}