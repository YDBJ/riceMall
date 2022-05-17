import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


import Index from "../views/index.vue"
// import Home from "../views/Home.vue"
// import Shopcar from "../views/Shopcar.vue"
import My from "../views/User.vue"
import Goodslist from "../views/Goodslist.vue"
import Order from "../views/Order.vue"




// 创建 router 实例
const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: "/home/index"
        }, {
            path: '/home',
            component: Index,
            children: [{
                path: "index",
                // 路由懒加载 -> 点击之后在加载
                component: () => import("../views/Home.vue"),
                meta: {
                    name: "Home",
                    isMainPage: true
                }
            }, {
                path: 'shopcar',
                // 路由懒加载 -> 点击之后在加载
                component: () => import("../views/Shopcar.vue"),
                meta: {
                    name: "Shopcar",
                    isMainPage: true
                }
            }, {
                path: "my",
                component: My,
                meta: {
                    name: "My",
                    isMainPage: true
                }
            }]
        },
        {
            path: "/goodslist",
            component: Goodslist,
            meta: {
                title: "商品列表"
            }
        }, {
            path: "/order",
            component: Order,
            meta: {
                title: "我的订单"
            }
        }

    ]
})
export default router;