import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from './pages/NotFound.vue';
import CoachDetails from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecived from './pages/requests/RequestRecived.vue';

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
        
      },
      {
        path:'/requests',
        component:RequestRecived
      },
      {
        path:'/:notFound(.*)',
        component:NotFound
      },
    ],
});
export default router;