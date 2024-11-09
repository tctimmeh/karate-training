import ComingSoonPage from 'pages/ComingSoon.vue'
import HomePage from 'pages/HomePage.vue'
import IndexPage from 'pages/IndexPage.vue'
import KihonRenshu from 'pages/KihonRenshu.vue'
import DojoKun from 'pages/DojoKun.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: HomePage },
      { path: 'index', component: IndexPage },
      { path: 'quiz', component: ComingSoonPage },
      { path: 'kihon-renshu', component: KihonRenshu },
      { path: 'zenshin-kotai', component: ComingSoonPage },
      { path: 'kata', component: ComingSoonPage },
      { path: 'ippon-kumite', component: ComingSoonPage },
      { path: 'dojo-kun', component: DojoKun },
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
