import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
    mode: 'history',
    base:'/',
});

//抛出这个这个实例对象方便外部读取以及访问
export default router