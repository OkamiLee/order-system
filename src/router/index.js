import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import shopdetail from '@/page/shopdetail'
import shopcar from '@/page/shopcar'
import result from '@/page/result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',//商品列表
      name: 'home',
      component: home,
    },
    {
      path:'/shopdetail',//商品详情
      name:'shopdetail',
      component: shopdetail
    },
    {
      path:'/shopcar',//购物车
      name:'shopcar',
      component: shopcar
    },
    {
      path:'/result',//购物车
      name:'result',
      component: result
    }
  ]
})
