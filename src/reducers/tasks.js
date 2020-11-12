import * as types from "./../constants/ActionType"
var data  =  JSON.parse(localStorage.getItem("tasks"))
var initialState = data ? data : undefined;

var MyReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.LIST_ALL :
            return state;
        case types.ADD_TASK :
            console.log(action);
            return state;
        default: return state;
    }
}

export default MyReducer