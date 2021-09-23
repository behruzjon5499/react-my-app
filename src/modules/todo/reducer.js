import {ADD_TASK, DELETE_TASK, SET_VALUE} from "./types";
import initialState from "./initialState";



const todoReducer = (state = initialState,action) =>{

    switch (action.type){
        case SET_VALUE:
            return {
                ...state,
                value:action.payload

            }
        case ADD_TASK:
            return {
                ...state,
                value:"",
                tasks:[...state.tasks,{title:action.payload}]

            }
        case DELETE_TASK:
            let tasks = [...state.tasks];
            tasks.splice(action.payload,1);

            return {
                ...state,tasks
            }
        default : return state;

    }
}
export default todoReducer;
