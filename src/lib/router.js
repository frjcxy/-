import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 公共组件
import shopping from "../components/common/shopping.vue"
// 用户登录/注册组件
import userModule from '../components/pages/login/userModule.vue'
import register from '../components/pages/login/register.vue'
import retrievePwd from '../components/pages/login/retrievePwd.vue'
import login from '../components/pages/login/login.vue'
import pwd from '../components/pages/login/pwd.vue'

// 主要页面
import index from "../components/pages/tabPages/index.vue"
import catalog from '../components/pages/tabPages/catalog.vue'
import enter from '../components/pages/tabPages/enter.vue'
import integral from '../components/pages/tabPages/integral.vue'
import pairing from '../components/pages/tabPages/pairing.vue'
import procurement from '../components/pages/tabPages/procurement.vue'
import ticket from '../components/pages/tabPages/ticket.vue'
import listdetails from '../components/pages/tabPages/listdetails.vue'
import particulars from '../components/pages/tabPages/particulars.vue'
import member from '../components/pages/tabPages/member.vue'
import shoppingCart from '../components/pages/tabPages/shoppingCart.vue'
import checkout from '../components/pages/tabPages/checkout.vue'
import submitOrder from '../components/pages/tabPages/submitOrder.vue'
import pay from '../components/pages/tabPages/pay.vue'

//会员中心
import center from '../components/pages/memberPages/center.vue'
// 账户中心
import bind from '../components/pages/memberPages/customer/bind.vue'
import edit from '../components/pages/memberPages/customer/edit.vue'
import invoice from '../components/pages/memberPages/customer/invoice.vue'
import material from '../components/pages/memberPages/customer/material.vue'
import myintegral from '../components/pages/memberPages/customer/myintegral.vue'
import myticket from '../components/pages/memberPages/customer/myticket.vue'
import password from '../components/pages/memberPages/customer/password.vue'
import site from '../components/pages/memberPages/customer/site.vue'
//交易管理
import agent from '../components/pages/memberPages/order/agent.vue'
import bill from '../components/pages/memberPages/order/bill.vue'
import BOM from '../components/pages/memberPages/order/BOM.vue'
import history from '../components/pages/memberPages/order/history.vue'
import list from '../components/pages/memberPages/order/list.vue'
//服务中心
import after_sales from '../components/pages/memberPages/serve/after_sales.vue'
import apply from '../components/pages/memberPages/serve/apply.vue'
import complaint from '../components/pages/memberPages/serve/complaint.vue'
import favorite from '../components/pages/memberPages/serve/favorite.vue'
import message from '../components/pages/memberPages/serve/message.vue'
import schedule from '../components/pages/memberPages/serve/schedule.vue'
import subscribe from '../components/pages/memberPages/serve/subscribe.vue'
//预付余额
import deposit from '../components/pages/memberPages/balance/deposit.vue'
import recharge from '../components/pages/memberPages/balance/recharge.vue'
import sum_manage from '../components/pages/memberPages/balance/sum_manage.vue'
import supply from '../components/pages/memberPages/balance/supply.vue'
let routes = [{
    // 重定向
    path: "/",
    redirect: "/shopping/index"
}, {
    // 重定向
    path: "/shopping",
    redirect: "/shopping/index"
},

// 用户登录注册
{
    path: '/userModule',
    component: userModule,
    children: [
        //注册
        {
            path: "/register",
            components: {
                default: userModule,
                user: register
            }
        },
        // 密码
        {
            path: "/pwd",
            components: {
                default: userModule,
                user: pwd
            }
        },
        //登录
        {
            path: "/login",
            components: {
                default: userModule,
                user: login
            }
        },
        //找回密码
        {
            path: "/retrievePwd",
            components: {
                default: userModule,
                user: retrievePwd
            }
        },
    ]
},
{
    // 商城首页
    path: "/shopping",
    component: shopping,
    children: [
        {
            // 商城首页
            path: "index",
            component: index
        },
        {
            // 商品目录
            path: "catalog",
            component: catalog
        },
        {
            // 免费入驻
            path: "enter",
            component: enter
        },
        {
            // 积分商城
            path: "integral",
            component: integral
        },
        {
            //    BOM配单
            path: "pairing",
            component: pairing
        },
        {
            // 海外代购
            path: "procurement",
            component: procurement
        },
        {
            // 领券中心
            path: "ticket",
            component: ticket
        },
        {
            // 列表详情
            path: "listdetails/:id",
            component: listdetails
        },
        {
            // 商品详情
            path: 'particulars',
            component: particulars,
        },
        // 购物车
        {
            path: "shoppingCart",
            component: shoppingCart
        },
        // 提交订单
        {
            path: "submitOrder",
            component: submitOrder
        },
        // 收银台
        {
            path: "checkout",
            component: checkout
        },
        {
            path: "pay",
            component: pay
        },
        {
            // 会员中心
            path: 'member',
            component: member,

            children: [
                {
                    path: "center",
                    components: {
                        default: member,
                        memberCenter: center
                    },
                },
                // 账户中心
                {
                    path: "bind",
                    components: {
                        default: member,
                        memberCenter: bind
                    }
                },
                {
                    path: "edit",
                    components:
                    {
                        default: member,
                        memberCenter: edit
                    }
                },
                {
                    path: "invoice",
                    components:
                    {
                        default: member,
                        memberCenter: invoice
                    }
                },
                {
                    path: "material",
                    components: {
                        default: member,
                        memberCenter: material
                    }
                },
                {
                    path: "myintegral",
                    components: {
                        default: member,
                        memberCenter: myintegral
                    }
                },
                {
                    path: "myticket",
                    components: {
                        default: member,
                        memberCenter: myticket
                    }
                },
                {
                    path: "password",
                    components: {
                        default: member,
                        memberCenter: password
                    }
                },
                {
                    path: "site",
                    components:
                    {
                        default: member,
                        memberCenter: site
                    },
                },

                //交易管理
                {
                    path: "agent",
                    components: {
                        default: member,
                        memberCenter: agent
                    }
                },
                {
                    path: "bill",
                    components: {
                        default: member,
                        memberCenter: bill
                    }
                },
                {
                    path: "BOM",
                    components: {
                        default: member,
                        memberCenter: BOM
                    }
                },
                {
                    path: "history",
                    components: {
                        default: member,
                        memberCenter: history
                    }
                },
                {
                    path: "list",
                    components: {
                        default: member,
                        memberCenter: list
                    }
                },
                //服务中心
                {
                    path: "after_sales",
                    components: {
                        default: member,
                        memberCenter: after_sales
                    }
                },
                {
                    path: "apply",
                    components: {
                        default: member,
                        memberCenter: apply
                    }
                },
                {
                    path: "complaint",
                    components: {
                        default: member,
                        memberCenter: complaint
                    }
                },
                {
                    path: "favorite",
                    components: {
                        default: member,
                        memberCenter: favorite
                    }
                },
                {
                    path: "message",
                    components: {
                        default: member,
                        memberCenter: message
                    }
                },
                {
                    path: "schedule",
                    components: {
                        default: member,
                        memberCenter: schedule
                    }
                },
                {
                    path: "subscribe",
                    components: {
                        default: member,
                        memberCenter: subscribe
                    }
                },
                //预付余额
                {
                    path: "deposit",
                    components: {
                        default: member,
                        memberCenter: deposit
                    }
                },
                {
                    path: "recharge",
                    components: {
                        default: member,
                        memberCenter: recharge
                    }
                },
                {
                    path: "sum_manage",
                    components: {
                        default: member,
                        memberCenter: sum_manage
                    }
                },
                {
                    path: "supply",
                    components: {
                        default: member,
                        memberCenter: supply
                    }
                },
            ]
        }
    ]
}
]

const router = new VueRouter({
    mode: 'history',
    routes
})


// 注册(添加)导航守卫 前置守卫
router.beforeEach((to, from, next) => {
    // 路由跳转回到顶部
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
    // to去哪
    
    // from 从哪来
    if (to.path.indexOf("/shopping/member/") == -1) {
        // 直接放过去
        next()
    } else {
        if (window.sessionStorage.getItem('token')) {
            // 登录了
            next()
        } else {
            // 提示用户 this不是Vue实例 无法访问$message
            Vue.prototype.$message.warning('请先登录')
            // 没有登录
            next('/login')
        }
    }
    if (to.path == "/shopping/submitOrder") {
        if (window.sessionStorage.getItem('token')) {
            next()
        } else {
            Vue.prototype.$message.warning('请先登录')
            next('/login')
        }
    }
    // if (to.path=="/shopping/particulars") {
    //     if(window.sessionStorage.getItem('token')){
    //         next()
    //     }else{
    //         Vue.prototype.$message.warning('请先登录')
    //         next('/login')
    //     }
    // }
})

export default router