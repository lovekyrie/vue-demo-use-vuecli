const manage = {
  path: '/manage',
  name: 'Manage',
  component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue'),
}

export default manage
