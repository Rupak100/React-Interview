//initial state and rudecer function to update the state
//reducers are pure functions


// initial state 
const initialState ={
    allUsers:[]
};
export const userReducer = (state = initialState,action) =>{
    //based on the action well update the state

    if(action.type ==='GET_USERS'){
        return {...state,allUsers:action.payload}
    }
    else{
        return state
    }
}