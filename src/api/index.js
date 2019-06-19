import request from '../utils/request'
//获取轮播图的数据
  export function swiperData() {
    return request({
      url:'/api/home/content',
      method:'get',
    })
  }
  
  //获取分类的数据
  export function getCategoryData() {
    return request({
      url:'/api/home/getCategory',
      method:'get',
    })
  }
