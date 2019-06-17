import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 注册
Vue.use(Vuex)
const store = new Vuex.Store({
    // 数据
    state: {
        // tab栏分类
        setCategoryData: [],
        // 注册信息
        loginPhone: "",
        loginCode: "",
        // 个人信息
        personalDetails:{},
        // 企业信息
        enterpriseInformation:{},
        QQ: "",
        // 提交商品订单
        submitOrderGoods:[],
        orderNumber:'',
        totalAmount:''
    },
    mutations: {
        setShoppingCart(state, newTab) {
            state.setShoppingCartData = newTab
        }
    }
})

export default store