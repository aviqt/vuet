

export default [
  {
    path: '/login/staff',
    name: 'login-staff',
    component: () => import('@/views/login/staff.vue'),
    meta: {
      title: "后台登录"
    }
  },
  {
    path: '/adminlayout',
    component: () => import('@/layouts/admin.vue'),
    name: 'admin',
    children : [
      {
        path: '/admin/live',
        name: 'live',
        component: () => import('@/views/admin/live.vue'),
        meta: {
          title: '直播管理'
        }
      },
    ]
  }
]