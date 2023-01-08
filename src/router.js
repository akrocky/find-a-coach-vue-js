import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import CoachDetails from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecived from './pages/requests/RequestRecived.vue';
import store from './store/index';

const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/',redirect:'/coaches'},
      {
        path:'/coaches',
        component:CoachesList
      },
      {
        path:'/coaches/:id',
        component:CoachDetails,
        props:true,
        children: [
       {path:'contact',component:ContactCoach,props:true  },]
      },
      {
        path:'/register',
        component:CoachRegistration,
        meta:{
          requiresAuth:true
        }
        
      },
      {
        path:'/requests',
        component:RequestRecived,
        meta:{
          requiresAuth:true
        }
      },
      {
        path:'/auth',
        component: UserAuth,
        meta:{
          requiresUnAuth:true
        }
      },
      {
        path:'/:notFound(.*)',
        component:NotFound
      },
    ],
});

router.beforeEach(function (to,_,next) {
  if (to.meta.requiresAuth && !store.getters['isAuthenticated']) {
    
    next('/auth');
  } else if(to.meta.requiresUnAuth && store.getters['isAuthenticated'] ){
next('/coaches');
  }else{
    next();
  }
})
export default router;