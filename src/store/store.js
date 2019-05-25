//引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//引入之后，对vuex进行引用
Vue.use(Vuex)
//新建一个状态对象state



export default  new Vuex.Store({
    state: {
        shopCount: 0//购物车中商品数量
    },
    mutations: {
        addShopCount (state) {//购物车中商品数量累加
            state.shopCount++;
        },
        setShopCount (state,num) {//设置购物车中商品数量
            state.shopCount = num;
        }
    }
})


