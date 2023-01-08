export default{
 async contactCoach(context,payload){
    const newrequest={
        
        coachId:payload.coachId,
    userEmail:payload.email ,
    message:payload.message   
    };
  const response=  fetch(`https://coach-finder-b2662-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
   { 
    method:'POST',
    body:JSON.stringify(newrequest)
  })
  const responseData= await response.json();
  newrequest.id=responseData.name;
  if (!response.ok) {
    const error = new Error(responseData.message || 'Failed to send request..');
   throw error;
  }
   context.commit('addRequest',newrequest) 
 } ,
 async fetchRequests(context){
 
const coachId=context.rootGetters.userId;
const token=context.rootGetters.token;
const response=await  fetch(`https://coach-finder-b2662-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=`+token);

const responseData= await response.json();
if (!response.ok) {
  const error = new Error(responseData.message || 'Failed to send request..');
 throw error;
}
const requests=[];
for (const key in responseData) {
  const request = {
    id:key,
    coachId:coachId,
    userEmail:responseData[key].userEmail,
    message:responseData[key].message
  };
  requests.push(request);

}
context.commit('setRequests',requests);
} ,

}