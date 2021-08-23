import {DECREMENT, INCREMENT, INIT_APPLICAION} from "./conts";

export function increment(){
    return {
        type:INCREMENT
    }
}
export function decrement(){
    return {
        type:DECREMENT
    }
}

export function initApplication(){

return {
    type:INIT_APPLICAION
}
}