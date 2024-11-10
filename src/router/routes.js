import ComingSoonPage from 'pages/ComingSoon.vue'
import HomePage from 'pages/HomePage.vue'
import IndexPage from 'pages/IndexPage.vue'
import KihonQuizPage from 'pages/KihonQuiz.vue'
import KihonRenshuPage from 'pages/KihonRenshu.vue'
import DojoKun from 'pages/DojoKun.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: HomePage },
      { path: 'index', component: IndexPage },
      { path: 'quiz', component: KihonQuizPage },
      { path: 'kihon-renshu', component: KihonRenshuPage },
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
