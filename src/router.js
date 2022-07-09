import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from './page/coaches/CoachDetail.vue';
import CoachesList from './page/coaches/CoachesList.vue';
import CoachRegistration from './page/coaches/CoachRegistration.vue';
import ContactCoach from './page/requests/ContactCoach.vue';
import RequestsReceived from './page/requests/RequestsReceived.vue';
import UserAuth from './page/auth/UserAuth.vue';
import NotFound from './page/NotFound.vue';

import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id', 
      component: CoachDetail,
      props: true,
      children: [
        { path: '/coaches/:id/contact', component: ContactCoach } // /coaches/:id/contact прописывать полный путь
      ], 
    },
    { path: '/register', component: CoachRegistration, meta: {requiresAuth: true} },
    { path: '/requests', component: RequestsReceived, meta: {requiresAuth: true} },
    { path: '/auth', component: UserAuth, meta: {requiresUnauth: true} },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;