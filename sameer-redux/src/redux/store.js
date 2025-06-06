//load the reducers
import {combineReducers, createStore} from "redux"
import { userReducer } from "./userReducer"
import { counterReducer } from "./counterReducer";

//combining all the reducer
const rootReducer = combineReducers({users:userReducer,counter:counterReducer});

//creating the store by createStore
export const store = createStore(rootReducer)