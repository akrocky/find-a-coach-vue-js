import { createStore } from "vuex";
import authModule from "./modules/auth/index";
import coachesModule from './modules/coaches/index';
import requestModule from "./modules/request/index";

const store=createStore({
    modules:{
       coaches:coachesModule ,
       requests:requestModule,
       auth:authModule
    },
   
    
})

export default store;