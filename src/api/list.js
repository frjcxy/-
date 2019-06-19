import request from '../utils/request'

//获取订单
export function getOrder(status){
    return request({
        url:'/api/member/order/orderlist'+status,
        method:'get',
    })
}