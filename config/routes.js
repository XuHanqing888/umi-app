export default [
  {
    path: '/login',
    component: '@/pages/login/index',
    wrappers: ['@/wrappers/login'],
  },
  {
    path: '/',
    // redirect: '/home',
    component: '@/layouts/index',
    // exact: true,
    // redirect: '/home',
    wrappers: ['@/wrappers/auth'],
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: '@/pages/home/index',
      },
      {
        path: '/user',
        component: '@/pages/user/index',
        exact: true,
      },
      {
        path: '/roles',
        component: '@/pages/roles/index',
      },
    ],
  },
];
