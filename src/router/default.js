
export default [
  {
    path: '/defaultlayout',
    component: () => import('@/layouts/default.vue'),
    name: 'default',
    children : [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/default/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/myCourse',
        name: 'myCourse',
        component: () => import('@/views/default/MyCourse.vue'),
        meta: {
          title: '我的课程'
        }
      },
      {
        path: '/courseCenter',
        name: 'courseCenter',
        component: () => import('@/views/default/CourseCenter.vue'),
        meta: {
          title: '课程中心'
        }
      },
      {
        path: '/personalCenter',
        name: 'personalCenter',
        component: () => import('@/views/default/PersonalCenter.vue'),
        meta: {
          title: '个人中心'
        }
      },
    ]
  }
]