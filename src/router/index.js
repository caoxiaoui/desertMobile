import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import eqList from '@/components/equipmentList/equipmentList'
import eqInfo from '@/components/equipmentList/equipmentInfo'
import eq2D from '@/components/equipmentList/equipment2D'
import docList from '@/components/equipmentList/equipmentDocList'
import setting from '@/components/setting/setting'
import upkeep from '@/components/upkeep/upkeep'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login,
      children: [{
        path: "HelloWorld",
        component: HelloWorld
      }]
    },
    {
      path: '/eqList',
      name: 'eqList',
      component: eqList
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: "/upkeep",
      name: "upkeep",
      component: upkeep
    },
    {
      path: '/eqInfo',
      name: 'eqInfo',
      component: eqInfo
    },
    {
      path: '/eq2D',
      name: 'eq2D',
      component: eq2D
    },
    {
      path: '/docList',
      name: 'docList',
      component: docList
    }
  ],
  linkActiveClass: "mui-active" //覆盖默认路由高亮类
})
