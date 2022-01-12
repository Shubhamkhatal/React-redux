import userReducers from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    users:userReducers
})

export default rootReducer