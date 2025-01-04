import ComingSoonPage from 'pages/ComingSoon.vue'
import HomePage from 'pages/HomePage.vue'
import IndexPage from 'pages/IndexPage.vue'
import KihonQuizPage from 'pages/KihonQuiz.vue'
import WorkoutsPage from 'pages/WorkoutsPage.vue'
import DojoKunPage from 'pages/DojoKun.vue'
import MovePage from 'pages/MovePage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: HomePage },
      { path: 'index', component: IndexPage },
      { path: 'quiz', component: KihonQuizPage },
      { path: 'workouts', component: WorkoutsPage },
      { path: 'zenshin-kotai', component: ComingSoonPage },
      { path: 'kata', component: ComingSoonPage },
      { path: 'ippon-kumite', component: ComingSoonPage },
      { path: 'dojo-kun', component: DojoKunPage },
      { path: 'moves/:moveId', component: MovePage },
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
