import * as types from './actionTypes'
const intialState ={
    users:[],
    user:{},
    loading:false
}
const userReducers =(state=intialState,action: { type: any; payload: any; })=>{
    switch(action.type){
        case types.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case types.DELETE_USERS:
            return{
                ...state,
                laoding:false
            }
        case types.ADD_USERS:
            return{
                ...state,
                laoding:false
            }
        case types.GET_SINGLE_USER:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case types.PUT_SINGLR_USER:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        // case types.GET_SINGLE_USER1:
        //     return{
        //         ...state,
        //         users:action.payload,
        //         loading:false
        //     }
        default:
            return state
    }
}

export default userReducers;