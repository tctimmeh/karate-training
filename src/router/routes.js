import IndexPage from 'pages/IndexPage.vue'
import KihonRenshu from 'pages/KihonRenshu.vue'
import DojoKun from 'pages/DojoKun.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: IndexPage },
      { path: 'dojo-kun', component: DojoKun },
      { path: 'kihon-renshu', component: KihonRenshu },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
