//Reducre =. a functio that takes in he old state , and a action =>neww state 
const contextReducer = (state , action) => {
    let transactions;

   switch (action.type){
       case 'DELETE_TRANSACTION':
             transactions = state.filter((t) => t.id !== action.payload);

            return transactions;
            
        case 'ADD_TRANSCATION'   :
             transactions =[action.payload, ...state];

             return transactions;
          
        default :
            return state;    
   }

}
export default contextReducer