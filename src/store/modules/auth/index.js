import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
export default {
    state(){
        return{
            userId:null,
            tiken:null,
           
            didAutoLogout:false
        };
    },
    mutations,
    actions,
    getters
}