import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import eqList from '@/components/equipmentList/equipmentList'
import eqInfo from '@/components/equipmentList/equipmentInfo'
import eq2D from '@/components/equipmentList/equipment2D'
import docList from '@/components/equipmentList/equipmentDocList'
// import setting from '@/components/setting/setting'
import editInfo from '@/components/setting/editInfo'
import upkeep from '@/components/upkeep/upkeep'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: '登陆页',
      component: login,
      // redirect:'/HelloWorld'
    },
    {
      path: "/HelloWorld",
      // component: HelloWorld,
      component:()=>import("./../components/HelloWorld")
    },
    {
      path: '/eqList',
      name: '设备列表',
      component: eqList
    },
    // {
    //   path: '/setting',
    //   name: '设置',
    //   component: setting
    // },
    {
      path: "/upkeep",
      name: "保养",
      component: upkeep
    },
    {
      path: '/eqInfo',
      name: '设备信息',
      component: eqInfo
    },
    {
      path: '/eq2D',
      name: '工艺流程图',
      component: eq2D
    },
    {
      path: '/docList',
      name: '文档列表',
      component: docList
    },
    {
      path: '/editInfo',
      name: '个人中心',
      component: editInfo
    }
  ],
  linkActiveClass: "mui-active" //覆盖默认路由高亮类
})
