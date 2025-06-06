const intiitalState ={
    count:0
}

export const counterReducer =(state = intiitalState,action)=>{
     switch(action.type){
        case "increment":
        return {
            count:state.count+1
        }
        case "decrement":
            return {
                count:state.count-1
            }
        default:
            return{
                count:state.count
            }
     }
}