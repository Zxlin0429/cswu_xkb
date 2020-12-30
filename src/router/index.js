import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      scoll:{x:0,y: 0},
      height:0,
      title: '校快办-发布大厅'
    },
    children: [
      {
        path: 'QNZS',
        name: 'QNZS',
        component: () => import('../views/home/HomeQNZS.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-青年之声'
        }
      },
      {
        path: 'TJZJ',
        name: 'TJZJ',
        component: () => import('../views/home/HomeTJZJ.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-团聚指尖'
        },
      },
      {
        path: 'JJCG',
        name: 'JJCG',
        component: () => import('../views/home/HomeJJCG.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-聚焦城管'
        },
        children: [
          {
            path: 'SP',
            name: 'SP',
            component: () => import('../views/home/HomeQNZS.vue'),
            meta: {
              keepAlive: true,
              scoll:{x:0,y: 0},
              height:0,
              title: '校快办-聚焦城管'
            }
          }
        ]
      },
    ]
  },
  {
    path: '/Work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
    meta: {
      keepAlive: true,
      scoll:{x:0,y: 0},
      height:0,
      title: '校快办-校快办'
    },
    children: [
      {
        path: 'QNDXX',
        name: 'QNDXX',
        component: () => import('../views/work/WorkQNDXX.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-青年大学习'
        }
      },
      {
        path: 'QXY',
        name: 'QXY',
        component: () => import('../views/work/WorkQXY.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-团聚指尖'
        },
      },
    ]
  },
  {
    path: '/Group',
    name: 'Group',
    component: () => import('../views/Group.vue'),
    meta: {
      keepAlive: true,
      scoll:{x:0,y: 0},
      height:0,
      title: '校快办-团委'
    }
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('../views/Activity.vue'),
    meta: {
      keepAlive: true,
      scoll:{x:0,y: 0},
      height:0,
      title: '校快办-校活动'
    }
  },
  {
    path: '/Myself',
    name: 'Myself',
    component: () => import('../views/Myself.vue'),
    meta: {
      keepAlive: true,
      scoll:{x:0,y: 0},
      height:0,
      title: '校快办-个人中心'
    },
    children: [
      {
        path: 'WDJF',
        name: 'WDJF',
        component: () => import('../views/myself/myselfWDJF.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-我的积分'
        }
      },
      {
        path: 'GRXX',
        name: 'GRXX',
        component: () => import('../views/myself/myselfGRXX.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-个人信息'
        }
      },
      {
        path: 'LXWM',
        name: 'LXWM',
        component: () => import('../views/myself/myselfLXWM.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-联系我们'
        }
      },
      {
        path: 'BBXX',
        name: 'BBXX',
        component: () => import('../views/myself/myselfBBXX.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-版本信息'
        }
      },
      {
        path: 'DJDL',
        name: 'DJDL',
        component: () => import('../views/myself/myselfDJDL.vue'),
        meta: {
          keepAlive: true,
          scoll:{x:0,y: 0},
          height:0,
          title: '校快办-登录'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
