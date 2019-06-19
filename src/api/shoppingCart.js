import request from '../utils/request'

//获取购物车列表
export function getcartList(){
    return request({
        url:'/api/member/cart/list',
        methods: 'post'
    })
}

//删除购物车商品接口
export function dellcart(ids){
    return request({
        url:`/api/member/cart/delete?productId=${ids}`,
        method:'post'
    })
}